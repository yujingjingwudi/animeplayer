import { useEffect, useState } from "react";

function getRoute(pathname) {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return { name: "home" };
  }

  if (parts[0] === "anime" && parts[1] && parts[2] === "episode" && parts[3]) {
    return { name: "play", id: parts[1], episode: parts[3] };
  }

  if (parts[0] === "anime" && parts[1]) {
    return { name: "detail", id: parts[1] };
  }

  return { name: "notFound" };
}

export function useRouter() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    if (path === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", path);
    setPathname(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { route: getRoute(pathname), navigate, pathname };
}
