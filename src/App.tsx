import { Component, type ReactNode } from "react";
import { Routes, Route, useLocation } from "react-router";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { RouteMetadata } from "./components/RouteMetadata";
import { ThemeProvider } from "./features/theme/ThemeProvider";
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
    return this.state.failed ? (
      <section className="container error-page">
        <h1 tabIndex={-1}>Let’s try that again.</h1>
        <p>The page couldn’t be loaded.</p>
        <a className="text-link" href="/#work">
          Back to Work →
        </a>
      </section>
    ) : (
      this.props.children
    );
  }
}
export default function App() {
  const location = useLocation();
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <RouteMetadata />
      <SiteHeader />
      <NavigationEffects />
      <main id="main">
        <AppErrorBoundary key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/work/:slug"
              element={<ProjectPage key={location.pathname} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppErrorBoundary>
      </main>
      <SiteFooter />
    </ThemeProvider>
  );
}
