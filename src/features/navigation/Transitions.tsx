import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";
import {
  Link,
  useLocation,
  useNavigate,
  useResolvedPath,
  type LinkProps,
  type NavigateOptions,
  type To,
} from "react-router";

const TransitionContext = createContext<{
  paths: string[];
  navigate: (to: To, path: string, options: NavigateOptions) => void;
} | null>(null);
function useTransitionContext() {
  const context = useContext(TransitionContext);
  if (!context)
    throw new Error("Navigation transitions require TransitionProvider.");
  return context;
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const routerNavigate = useNavigate();
  const location = useLocation();
  const [paths, setPaths] = useState<string[]>([]);
  const current = useRef<ViewTransition | null>(null);
  const generation = useRef(0);
  const navigate = (to: To, pathname: string, options: NavigateOptions) => {
    const token = ++generation.current;
    current.current?.skipTransition();
    const commit = () => {
      if (token === generation.current)
        flushSync(() => routerNavigate(to, options));
    };
    if (
      !document.startViewTransition ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      commit();
      return;
    }
    // Commit names before the old snapshot. GSAP settles via the same context.
    flushSync(() => setPaths([location.pathname, pathname]));
    const transition = document.startViewTransition(commit);
    current.current = transition;
    void transition.ready.catch(() => undefined);
    void transition.finished
      .catch(() => undefined)
      .finally(() => {
        if (token === generation.current) {
          current.current = null;
          setPaths([]);
        }
      });
  };
  return (
    <TransitionContext.Provider value={{ paths, navigate }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useProjectTransition(path: string) {
  return useTransitionContext().paths.includes(path);
}

export function TransitionLink({
  to,
  viewTransition = false,
  onClick,
  replace,
  state,
  preventScrollReset,
  ...props
}: LinkProps) {
  const transition = useTransitionContext();
  const destination = useResolvedPath(to);
  return (
    <Link
      {...props}
      to={to}
      replace={replace}
      state={state}
      preventScrollReset={preventScrollReset}
      onClick={(event) => {
        onClick?.(event);
        if (
          !viewTransition ||
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          props.reloadDocument ||
          (props.target && props.target !== "_self")
        )
          return;
        event.preventDefault();
        transition.navigate(to, destination.pathname, {
          replace,
          state,
          preventScrollReset,
        });
      }}
    />
  );
}
