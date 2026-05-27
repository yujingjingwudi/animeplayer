import React, { useMemo } from "react";
import { BottomNav } from "./components/BottomNav";
import { Header } from "./components/Header";
import { animeList } from "./data/anime";
import { useRouter } from "./hooks/useRouter";
import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PlayPage } from "./pages/PlayPage";

export function App() {
  const { route, navigate, pathname } = useRouter();
  const anime = useMemo(() => animeList.find((item) => item.id === route.id), [route.id]);

  let page = <HomePage navigate={navigate} />;

  if (route.name === "detail") {
    page = anime ? <DetailPage anime={anime} navigate={navigate} /> : <NotFoundPage navigate={navigate} />;
  }

  if (route.name === "play") {
    page = anime ? (
      <PlayPage anime={anime} episode={route.episode} navigate={navigate} />
    ) : (
      <NotFoundPage navigate={navigate} />
    );
  }

  if (route.name === "notFound") {
    page = <NotFoundPage navigate={navigate} />;
  }

  return (
    <div className="app-shell">
      <Header navigate={navigate} pathname={pathname} />
      {page}
      <BottomNav navigate={navigate} pathname={pathname} />
    </div>
  );
}
