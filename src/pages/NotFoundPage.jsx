import { RouteLink } from "../components/RouteLink";
import { useMemo } from "react";

export function NotFoundPage({ navigate }) {
  return (
    <main className="page-shell">
      <section className="info-panel not-found">
        <h1>页面不存在</h1>
        <p>这个地址暂时没有对应的动漫页面。</p>
        <RouteLink className="primary-action" href="/" navigate={navigate}>
          返回首页
        </RouteLink>
      </section>
    </main>
  );
}
