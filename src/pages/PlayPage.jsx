import { Bookmark, CalendarDays } from "lucide-react";
import { EpisodeGrid } from "../components/EpisodeGrid";
import { VideoPlayer } from "../components/VideoPlayer";
import React, { useMemo } from "react";

export function PlayPage({ anime, episode, navigate }) {
  return (
    <main className="page-shell player-page">
      <section className="watch-layout">
        <div className="player-column">
          <VideoPlayer anime={anime} episode={episode} />
          <div className="watch-title">
            <div>
              <span className="section-kicker">Now Playing</span>
              <h1>{anime.title}</h1>
              <p>第 {episode} 话 · {anime.genres.join(" / ")}</p>
            </div>
            <button className="secondary-action" type="button">
              <Bookmark size={18} aria-hidden="true" />
              追番
            </button>
          </div>
          <article className="info-panel">
            <h2>本集简介</h2>
            <p>{anime.synopsis}</p>
          </article>
        </div>

        <aside className="episode-sidebar">
          <div className="panel-title">
            <CalendarDays size={19} aria-hidden="true" />
            <h2>剧集</h2>
          </div>
          <EpisodeGrid anime={anime} activeEpisode={episode} navigate={navigate} />
        </aside>
      </section>
    </main>
  );
}
