import { useState, useEffect } from "react";
import { HomePage } from "./components/HomePage";
import { TechnicalPage } from "./components/TechnicalPage";
import { ApplicationsPage } from "./components/ApplicationsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("");

  useEffect(() => {
    // Simple client-side routing
    const path = window.location.pathname;
    setCurrentPage(path);

    // Handle link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const newPath = new URL(link.href).pathname;
        window.history.pushState({}, "", newPath);
        setCurrentPage(newPath);
        window.scrollTo(0, 0);
      }
    };

    // Handle browser back/forward buttons
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
      window.scrollTo(0, 0);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Render the appropriate page based on the current path
  if (currentPage === "/technical") {
    return <TechnicalPage />;
  } else if (currentPage === "/applications") {
    return <ApplicationsPage />;
  } else {
    return <HomePage />;
  }
}
