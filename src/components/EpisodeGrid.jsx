import { RouteLink } from "./RouteLink";
import React, { useMemo } from "react";

export function EpisodeGrid({ anime, activeEpisode, navigate }) {
  const episodes = Array.from({ length: anime.episodes }, (_, index) => String(index + 1).padStart(2, "0"));

  return (
    <div className="episode-grid" aria-label="剧集列表">
      {episodes.map((episode) => (
        <RouteLink
          className={episode === activeEpisode ? "episode active" : "episode"}
          href={`/anime/${anime.id}/episode/${episode}`}
          navigate={navigate}
          key={episode}
        >
          {episode}
        </RouteLink>
      ))}
    </div>
  );
}
