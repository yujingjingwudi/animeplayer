import { Play, Search, Star } from "lucide-react";
import React, { useMemo } from "react";
import { RouteLink } from "../components/RouteLink";
import { animeList } from "../data/anime";

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function getSearchText(anime) {
  return [anime.title, anime.meta, anime.tag, anime.year, anime.director, anime.studio, anime.synopsis, ...anime.genres, ...anime.cast]
    .filter(Boolean)
    .join(" ");
}

export function SearchPage({ navigate, search }) {
  const query = useMemo(() => new URLSearchParams(search).get("q") || "", [search]);
  const normalizedQuery = normalize(query);
  const results = useMemo(() => {
    if (!normalizedQuery) {
      return animeList;
    }

    return animeList.filter((anime) => normalize(getSearchText(anime)).includes(normalizedQuery));
  }, [normalizedQuery]);

  return (
    <main className="page-shell search-page">
      <section className="search-hero" aria-labelledby="search-title">
        <div>
          <span className="section-kicker">Search</span>
          <h1 id="search-title">{query ? `搜索：${query}` : "搜索结果"}</h1>
          <p>{results.length > 0 ? `找到 ${results.length} 部动漫，点击即可播放第一集。` : "没有找到匹配的动漫。"}</p>
        </div>
        <div className="search-hero-icon" aria-hidden="true">
          <Search size={28} />
        </div>
      </section>

      {results.length > 0 ? (
        <section className="search-results" aria-label="搜索结果列表">
          {results.map((anime) => (
            <RouteLink
              className="search-result-card"
              href={`/anime/${anime.id}/episode/01`}
              key={anime.id}
              navigate={navigate}
            >
              <img src={anime.image} alt="" loading="lazy" />
              <div className="search-result-copy">
                <span>{anime.tag}</span>
                <h2>{anime.title}</h2>
                <p>{anime.synopsis}</p>
                <div className="search-result-meta">
                  <strong>
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                    {anime.score}
                  </strong>
                  <em>{anime.progress}</em>
                </div>
              </div>
              <span className="search-result-play" aria-label={`播放 ${anime.title}`}>
                <Play size={18} fill="currentColor" aria-hidden="true" />
              </span>
            </RouteLink>
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h2>暂无结果</h2>
          <p>换个关键词试试看，比如作品名、标签或年份。</p>
        </section>
      )}
    </main>
  );
}
