import { ChevronRight, Clock3, Flame, Play, Search, Star } from "lucide-react";
import { HeroCarousel } from "../components/HeroCarousel";
import { RouteLink } from "../components/RouteLink";
import { SchedulePanel } from "../components/SchedulePanel";
import { animeList, rankings } from "../data/anime";
import { categories } from "../data/schedule";
import React, { useMemo } from "react";

export function HomePage({ navigate }) {
  return (
    <main>
      <HeroCarousel navigate={navigate} />

      <section className="mobile-search" aria-label="搜索">
        <label className="search-box">
          <Search size={18} aria-hidden="true" />
          <input type="search" placeholder="搜索番剧、声优、标签" />
        </label>
      </section>

      <section className="category-strip" aria-label="分类">
        {categories.map((category) => (
          <a className={category === "推荐" ? "chip active" : "chip"} href="#" key={category}>
            {category}
          </a>
        ))}
      </section>

      <section className="content-grid">
        <div className="main-column">
          <div className="section-heading" id="library">
            <div>
              <span className="section-kicker">Anime Library</span>
              <h2>正在热播</h2>
            </div>
            <a className="text-link" href="#">
              全部
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="show-grid">
            {animeList.slice(1).map((show) => (
              <RouteLink className="show-card" href={`/anime/${show.id}`} navigate={navigate} key={show.id}>
                <div className="poster">
                  <img src={show.image} alt="" loading="lazy" />
                  <span className="poster-badge">{show.progress}</span>
                  <span className="play-button" aria-label={`查看 ${show.title}`}>
                    <Play size={18} fill="currentColor" aria-hidden="true" />
                  </span>
                </div>
                <div className="show-info">
                  <span>{show.tag}</span>
                  <h3>{show.title}</h3>
                  <p>
                    <Star size={15} fill="currentColor" aria-hidden="true" />
                    {show.score}
                  </p>
                </div>
              </RouteLink>
            ))}
          </div>
        </div>

        <aside className="side-column">
          <SchedulePanel />

          <section className="rank-panel" id="rank" aria-label="热度排行">
            <div className="panel-title">
              <Flame size={19} aria-hidden="true" />
              <h2>热度排行</h2>
            </div>
            <ol className="ranking-list">
              {rankings.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                  <Clock3 size={15} aria-hidden="true" />
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </section>
    </main>
  );
}
