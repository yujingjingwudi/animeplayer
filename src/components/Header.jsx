import { Bell, Menu, Search, Tv } from "lucide-react";
import React from "react";
import { RouteLink } from "./RouteLink";

export function SearchForm({ navigate }) {
  return (
    <form
      className="search-box"
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const query = String(formData.get("q") || "").trim();

        navigate(query ? `/search?q=${encodeURIComponent(query)}` : "/search");
      }}
    >
      <Search size={18} aria-hidden="true" />
      <input name="q" type="search" placeholder="搜索番剧、声优、标签" />
    </form>
  );
}

export function Header({ navigate, pathname }) {
  return (
    <header className="topbar" aria-label="主导航">
      <RouteLink className="brand" href="/" navigate={navigate}>
        <span className="brand-mark">
          <Tv size={19} aria-hidden="true" />
        </span>
        <span>漫影</span>
      </RouteLink>

      <nav className="desktop-nav" aria-label="频道">
        <RouteLink className={pathname === "/" ? "active" : ""} href="/" navigate={navigate}>
          首页
        </RouteLink>
        <RouteLink href="/" navigate={navigate}>
          番剧
        </RouteLink>
        <RouteLink href="/" navigate={navigate}>
          时间表
        </RouteLink>
        <RouteLink href="/" navigate={navigate}>
          排行
        </RouteLink>
      </nav>

      <div className="top-actions">
        <SearchForm navigate={navigate} />
        <button className="icon-button" aria-label="通知">
          <Bell size={20} aria-hidden="true" />
        </button>
        <button className="icon-button menu-button" aria-label="菜单">
          <Menu size={20} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
