import React, { useEffect, useState } from "react";
import { Bookmark, ChevronLeft, ChevronRight, Flame, Play } from "lucide-react";
import { heroSlides } from "../data/anime";
import { RouteLink } from "./RouteLink";

export function HeroCarousel({ navigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const hero = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section className="hero" aria-label="焦点推荐轮播">
      {heroSlides.map((slide, index) => (
        <img
          className={index === activeSlide ? "hero-image active" : "hero-image"}
          src={slide.image}
          alt=""
          key={slide.title}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="eyebrow">
          <Flame size={16} aria-hidden="true" />
          {hero.label}
        </div>
        <h1>{hero.title}</h1>
        <p className="hero-meta">{hero.meta}</p>
        <p className="hero-desc">{hero.desc}</p>
        <div className="hero-actions">
          <RouteLink className="primary-action" href={`/anime/${hero.id}`} navigate={navigate}>
            <Play size={18} fill="currentColor" aria-hidden="true" />
            查看详情
          </RouteLink>
          <button className="secondary-action" type="button">
            <Bookmark size={18} aria-hidden="true" />
            追番
          </button>
        </div>
      </div>

      <div className="carousel-controls" aria-label="轮播控制">
        <button className="carousel-arrow" type="button" onClick={goToPrevSlide} aria-label="上一部推荐">
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <div className="carousel-dots" aria-label="轮播分页">
          {heroSlides.map((slide, index) => (
            <button
              className={index === activeSlide ? "carousel-dot active" : "carousel-dot"}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`切换到 ${slide.title}`}
              aria-current={index === activeSlide ? "true" : undefined}
              key={slide.title}
            />
          ))}
        </div>
        <button className="carousel-arrow" type="button" onClick={goToNextSlide} aria-label="下一部推荐">
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
