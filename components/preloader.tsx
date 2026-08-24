"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const EXIT_DURATION_MS = 1100;
const PLAYBACK_START_TIMEOUT_MS = 8000;
const PLAYBACK_STALL_TIMEOUT_MS = 6000;

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const completionRef = useRef(false);
  const playbackRequestedRef = useRef(false);
  const exitTimerRef = useRef<number | null>(null);
  const playbackStartTimerRef = useRef<number | null>(null);
  const playbackStallTimerRef = useRef<number | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isStarting, setIsStarting] = useState(false);

  const clearPlaybackTimers = useCallback(() => {
    if (playbackStartTimerRef.current !== null) {
      window.clearTimeout(playbackStartTimerRef.current);
      playbackStartTimerRef.current = null;
    }
    if (playbackStallTimerRef.current !== null) {
      window.clearTimeout(playbackStallTimerRef.current);
      playbackStallTimerRef.current = null;
    }
  }, []);

  const finish = useCallback(() => {
    if (completionRef.current) return;
    completionRef.current = true;
    onComplete();
  }, [onComplete]);

  const beginExit = useCallback(() => {
    if (completionRef.current || exitTimerRef.current !== null) return;

    clearPlaybackTimers();
    setIsExiting(true);
    document.documentElement.classList.add("intro-revealing");
    exitTimerRef.current = window.setTimeout(finish, EXIT_DURATION_MS);
  }, [clearPlaybackTimers, finish]);

  useEffect(() => {
    const root = document.documentElement;
    const video = videoRef.current;
    setIsHydrated(true);

    if (video && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      setIsVideoReady(true);
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      finish();
      return;
    }

    root.classList.add("intro-active");

    const handleScrollIntent = () => beginExit();
    const handleScrollKey = (event: KeyboardEvent) => {
      if (
        ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(
          event.key
        )
      ) {
        beginExit();
      }
    };

    window.addEventListener("wheel", handleScrollIntent, { passive: true });
    window.addEventListener("touchmove", handleScrollIntent, { passive: true });
    window.addEventListener("scroll", handleScrollIntent, { passive: true });
    window.addEventListener("keydown", handleScrollKey);

    return () => {
      clearPlaybackTimers();
      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }
      window.removeEventListener("wheel", handleScrollIntent);
      window.removeEventListener("touchmove", handleScrollIntent);
      window.removeEventListener("scroll", handleScrollIntent);
      window.removeEventListener("keydown", handleScrollKey);
      root.classList.remove("intro-active", "intro-revealing");
    };
  }, [beginExit, clearPlaybackTimers, finish]);

  const handleVideoReady = useCallback(() => {
    setIsVideoReady(true);
  }, []);

  const handlePlaying = useCallback(() => {
    clearPlaybackTimers();
    setHasStarted(true);
    setIsStarting(false);
  }, [clearPlaybackTimers]);

  const handlePlaybackWaiting = useCallback(() => {
    if (!playbackRequestedRef.current || completionRef.current) return;

    if (playbackStallTimerRef.current !== null) {
      window.clearTimeout(playbackStallTimerRef.current);
    }
    playbackStallTimerRef.current = window.setTimeout(
      beginExit,
      PLAYBACK_STALL_TIMEOUT_MS
    );
  }, [beginExit]);

  const enterPortfolio = async () => {
    const video = videoRef.current;
    if (
      !isHydrated ||
      !isVideoReady ||
      !video ||
      playbackRequestedRef.current
    ) {
      return;
    }

    playbackRequestedRef.current = true;
    setIsStarting(true);
    video.muted = false;
    video.volume = 1;
    video.currentTime = 0;
    playbackStartTimerRef.current = window.setTimeout(
      beginExit,
      PLAYBACK_START_TIMEOUT_MS
    );

    try {
      await video.play();
    } catch {
      // A user gesture normally permits audio. If playback is still rejected,
      // reveal the site instead of leaving the visitor on a frozen frame.
      beginExit();
    }
  };

  return (
    <div
      className={`cinema-intro${isExiting ? " is-exiting" : ""}${
        !hasStarted ? " is-awaiting-entry" : ""
      }`}
      role="region"
      aria-label="Mohammad Yassine animated website introduction"
    >
      <div className="cinema-intro-ambient" aria-hidden="true" />
      <div className="cinema-intro-stars" aria-hidden="true" />

      <div className="cinema-intro-frame">
        <picture className="cinema-intro-poster">
          <source
            srcSet="/media/yassine-pixar-intro-v3-portrait-poster.jpg"
            media="(max-aspect-ratio: 4/5)"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/yassine-pixar-intro-v3-poster.jpg"
            alt=""
            width="1280"
            height="720"
            fetchPriority="high"
          />
        </picture>
        <video
          ref={videoRef}
          className="cinema-intro-video"
          controls={false}
          disablePictureInPicture
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
          onPlaying={handlePlaying}
          onWaiting={handlePlaybackWaiting}
          onStalled={handlePlaybackWaiting}
          onEnded={beginExit}
          onError={beginExit}
        >
          <source
            src="/media/yassine-pixar-intro-v3-portrait.mp4"
            type="video/mp4"
            media="(max-aspect-ratio: 4/5)"
          />
          <source src="/media/yassine-pixar-intro-v3.mp4" type="video/mp4" />
        </video>
        <div className="cinema-intro-vignette" aria-hidden="true" />
      </div>

      {!hasStarted && !isExiting && (
        <div className="cinema-intro-entry">
          {isHydrated && isVideoReady ? (
            <button
              type="button"
              className="cinema-intro-enter"
              onClick={enterPortfolio}
              disabled={isStarting}
              autoFocus
            >
              {isStarting ? "Opening…" : "Enter portfolio"}
            </button>
          ) : (
            <div className="cinema-intro-status" role="status">
              <span aria-hidden="true" />
              Preparing intro
            </div>
          )}
        </div>
      )}

      <div className="cinema-intro-flash" aria-hidden="true" />
    </div>
  );
}
