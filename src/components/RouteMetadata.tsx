import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { routeMetadata } from "../config/routeMetadata";
export function RouteMetadata() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    document.head
      .querySelectorAll("[data-route-meta]")
      .forEach((element) => element.remove());
    const elements = routeMetadata(pathname).map((tag) => {
      const element = document.createElement(
        "title" in tag ? "title" : "tagName" in tag ? "link" : "meta",
      );
      element.setAttribute("data-route-meta", "");
      if ("title" in tag) element.textContent = tag.title;
      else
        Object.entries(tag).forEach(([name, value]) => {
          if (name !== "tagName") element.setAttribute(name, value);
        });
      document.head.appendChild(element);
      return element;
    });
    return () => elements.forEach((element) => element.remove());
  }, [pathname]);
  return null;
}
