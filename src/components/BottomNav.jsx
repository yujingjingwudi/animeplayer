import { CalendarDays, Compass, Home, UserRound } from "lucide-react";
import React, { useMemo } from "react";
import { RouteLink } from "./RouteLink";

export function BottomNav({ navigate, pathname }) {
  return (
    <nav className="bottom-nav" aria-label="移动端导航">
      <RouteLink className={pathname === "/" ? "active" : ""} href="/" navigate={navigate}>
        <Home size={21} aria-hidden="true" />
        首页
      </RouteLink>
      <RouteLink href="/" navigate={navigate}>
        <Compass size={21} aria-hidden="true" />
        发现
      </RouteLink>
      <RouteLink href="/" navigate={navigate}>
        <CalendarDays size={21} aria-hidden="true" />
        时间表
      </RouteLink>
      <a href="#">
        <UserRound size={21} aria-hidden="true" />
        我的
      </a>
    </nav>
  );
}
