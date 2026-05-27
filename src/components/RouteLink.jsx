import React, { useMemo } from "react";

export function RouteLink({ children, className, href, navigate, ...props }) {
  return (
    <a
      className={className}
      href={href}
      onClick={(event) => {
        event.preventDefault();
        navigate(href);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
