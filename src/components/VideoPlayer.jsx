import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { demoVideoSource } from "../data/anime";

export function VideoPlayer({ anime, episode }) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered", "anime-video-player");
      videoElement.setAttribute("playsinline", "true");
      videoElement.setAttribute("data-title", `${anime.title} 第 ${episode} 话`);
      containerRef.current.appendChild(videoElement);

      playerRef.current = videojs(videoElement, {
        autoplay: false,
        controls: true,
        fluid: true,
        preload: "metadata",
        poster: anime.banner,
        sources: [
          {
            src: demoVideoSource,
            type: "video/mp4",
          },
        ],
        controlBar: {
          pictureInPictureToggle: true,
          remainingTimeDisplay: true,
        },
      });
    } else {
      playerRef.current.poster(anime.banner);
      playerRef.current.src({ src: demoVideoSource, type: "video/mp4" });
      playerRef.current.load();
      playerRef.current.el().setAttribute("data-title", `${anime.title} 第 ${episode} 话`);
    }

    return undefined;
  }, [anime.banner, anime.title, episode]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="videojs-shell">
      <div ref={containerRef} />
    </div>
  );
}
