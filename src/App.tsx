import { Component, type ReactNode } from "react";
import { Routes, Route } from "react-router";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { RouteMetadata } from "./components/RouteMetadata";
import { TransitionProvider } from "./features/navigation/Transitions";
import { NavigationEffects } from "./features/navigation/NavigationEffects";
import Home from "./routes/home";
import ProjectPage from "./routes/project";
import NotFound from "./routes/not-found";

class AppErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <>
        <SiteHeader />
        <main id="main" className="container error-page">
          <p className="eyebrow">A SMALL INTERRUPTION</p>
          <h1 tabIndex={-1}>Let’s find our way back.</h1>
          <p>
            The page couldn’t be loaded. Try returning to the selected work.
          </p>
          <a className="text-link" href="/#work">
            Back to selected work <span>→</span>
          </a>
        </main>
        <SiteFooter />
      </>
    );
  }
}

export default function App() {
  return (
    <TransitionProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <RouteMetadata />
      <AppErrorBoundary>
        <NavigationEffects />
        <SiteHeader />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
      </AppErrorBoundary>
    </TransitionProvider>
  );
}
