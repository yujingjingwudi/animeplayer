import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-seek-buttons";
import "videojs-seek-buttons/dist/videojs-seek-buttons.css";
import { demoVideoSource } from "../data/anime";

const SEEK_SECONDS = 5;
const VOLUME_STEP = 0.05;

videojs.addLanguage("zh-CN", {
  Play: "播放",
  Pause: "暂停",
  Replay: "重播",
  "Current Time": "当前时间",
  Duration: "总时长",
  "Remaining Time": "剩余时间",
  "Stream Type": "媒体流类型",
  LIVE: "直播",
  Loaded: "已加载",
  Progress: "进度",
  Fullscreen: "全屏",
  "Non-Fullscreen": "退出全屏",
  Mute: "静音",
  Unmute: "取消静音",
  "Playback Rate": "播放速度",
  Subtitles: "字幕",
  Captions: "字幕",
  Chapters: "章节",
  Descriptions: "描述",
  Audio: "音频",
  "Picture-in-Picture": "画中画",
  "Exit Picture-in-Picture": "退出画中画",
  "The media could not be loaded, either because the server or network failed or because the format is not supported.":
    "媒体无法加载，可能是网络、服务器或格式不受支持。",
});

function isTypingTarget(element) {
  if (!element) {
    return false;
  }

  const tagName = element.tagName?.toLowerCase();
  return tagName === "input" || tagName === "textarea" || tagName === "select" || element.isContentEditable;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function applyChineseControlText(player) {
  const labels = [
    [".vjs-play-control", "播放 / 暂停"],
    [".vjs-mute-control", "静音 / 取消静音"],
    [".vjs-volume-panel", "音量"],
    [".vjs-picture-in-picture-control", "画中画"],
    [".vjs-fullscreen-control", "全屏 / 退出全屏"],
    [".vjs-playback-rate .vjs-playback-rate-value", "播放速度"],
    [".vjs-seek-button.skip-back", `快退 ${SEEK_SECONDS} 秒`],
    [".vjs-seek-button.skip-forward", `快进 ${SEEK_SECONDS} 秒`],
  ];

  labels.forEach(([selector, label]) => {
    player.el().querySelectorAll(selector).forEach((element) => {
      element.setAttribute("title", label);
      element.setAttribute("aria-label", label);
    });
  });
}

function installKeyboardShortcuts(player) {
  const handleKeyDown = (event) => {
    if (isTypingTarget(event.target)) {
      return;
    }

    if (!player || player.isDisposed()) {
      return;
    }

    if (event.code === "Space") {
      event.preventDefault();

      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      player.currentTime(Math.max(0, player.currentTime() - SEEK_SECONDS));
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      player.currentTime(Math.min(player.duration() || player.currentTime() + SEEK_SECONDS, player.currentTime() + SEEK_SECONDS));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      player.muted(false);
      player.volume(clamp(player.volume() + VOLUME_STEP, 0, 1));
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      player.volume(clamp(player.volume() - VOLUME_STEP, 0, 1));
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}

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
      videoElement.setAttribute("data-title", `${anime.title} 第 ${episode} 集`);
      containerRef.current.appendChild(videoElement);

      playerRef.current = videojs(videoElement, {
        autoplay: false,
        controls: true,
        fluid: true,
        language: "zh-CN",
        preload: "metadata",
        poster: anime.banner,
        playbackRates: [0.5, 1, 1.5, 2],
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

      playerRef.current.seekButtons({
        forward: SEEK_SECONDS,
        back: SEEK_SECONDS,
      });

      playerRef.current.ready(() => {
        applyChineseControlText(playerRef.current);
      });
    } else {
      playerRef.current.poster(anime.banner);
      playerRef.current.src({ src: demoVideoSource, type: "video/mp4" });
      playerRef.current.load();
      playerRef.current.el().setAttribute("data-title", `${anime.title} 第 ${episode} 集`);
      applyChineseControlText(playerRef.current);
    }

    return undefined;
  }, [anime.banner, anime.title, episode]);

  useEffect(() => {
    if (!playerRef.current) {
      return undefined;
    }

    return installKeyboardShortcuts(playerRef.current);
  }, []);

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
