import { Bookmark, Play, Star } from "lucide-react";
import { EpisodeGrid } from "../components/EpisodeGrid";
import { RouteLink } from "../components/RouteLink";
import React, { useMemo } from "react";

export function DetailPage({ anime, navigate }) {
  return (
    <main className="page-shell">
      <section className="detail-hero">
        <img className="detail-backdrop" src={anime.banner} alt="" />
        <div className="detail-shade" />
        <div className="detail-layout">
          <img className="detail-poster" src={anime.image} alt="" />
          <div className="detail-copy">
            <div className="eyebrow">
              <Star size={16} fill="currentColor" aria-hidden="true" />
              {anime.score} 分 · {anime.year}
            </div>
            <h1>{anime.title}</h1>
            <p className="hero-meta">{anime.meta}</p>
            <p className="detail-desc">{anime.synopsis}</p>
            <div className="genre-row">
              {anime.genres.map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </div>
            <div className="hero-actions">
              <RouteLink className="primary-action" href={`/anime/${anime.id}/episode/01`} navigate={navigate}>
                <Play size={18} fill="currentColor" aria-hidden="true" />
                播放第 01 话
              </RouteLink>
              <button className="secondary-action" type="button">
                <Bookmark size={18} aria-hidden="true" />
                追番
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-grid">
        <article className="info-panel">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Story</span>
              <h2>作品简介</h2>
            </div>
          </div>
          <p>{anime.synopsis}</p>
          <dl className="meta-list">
            <div>
              <dt>导演</dt>
              <dd>{anime.director}</dd>
            </div>
            <div>
              <dt>制作</dt>
              <dd>{anime.studio}</dd>
            </div>
            <div>
              <dt>年份</dt>
              <dd>{anime.year}</dd>
            </div>
          </dl>
        </article>

        <article className="info-panel">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Cast</span>
              <h2>声优阵容</h2>
            </div>
          </div>
          <div className="cast-grid">
            {anime.cast.map((actor) => (
              <span key={actor}>{actor}</span>
            ))}
          </div>
        </article>

        <article className="info-panel episode-panel">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Episodes</span>
              <h2>选择剧集</h2>
            </div>
          </div>
          <EpisodeGrid anime={anime} navigate={navigate} />
        </article>
      </section>
    </main>
  );
}
