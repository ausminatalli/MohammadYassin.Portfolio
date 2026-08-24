"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_SESSION_KEY = "portfolio-cinematic-intro-v2";
const EXIT_DURATION_MS = 1100;

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoplayAttemptedRef = useRef(false);
  const completionRef = useRef(false);
  const exitTimerRef = useRef<number | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [needsEntry, setNeedsEntry] = useState(false);

  const finish = useCallback(() => {
    if (completionRef.current) return;
    completionRef.current = true;
    try {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, "seen");
    } catch {
      // Storage may be unavailable in strict private-browsing contexts.
    }
    onComplete();
  }, [onComplete]);

  const beginExit = useCallback(() => {
    if (completionRef.current || exitTimerRef.current !== null) return;

    setIsExiting(true);
    document.documentElement.classList.add("intro-revealing");
    exitTimerRef.current = window.setTimeout(finish, EXIT_DURATION_MS);
  }, [finish]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousBodyOverflow = body.style.overflow;
    const previousRootOverflow = root.style.overflow;
    let seenThisSession = false;
    try {
      seenThisSession =
        window.sessionStorage.getItem(INTRO_SESSION_KEY) === "seen";
    } catch {
      // Continue with the intro when session storage is unavailable.
    }
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (seenThisSession || reduceMotion) {
      finish();
      return;
    }

    root.classList.add("intro-active");
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const failsafeId = window.setTimeout(beginExit, 20000);

    return () => {
      window.clearTimeout(failsafeId);
      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }
      root.classList.remove("intro-active", "intro-revealing");
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [beginExit, finish]);

  const attemptAutoplayWithSound = useCallback(async () => {
    const video = videoRef.current;
    if (!video || autoplayAttemptedRef.current || completionRef.current) return;

    autoplayAttemptedRef.current = true;
    video.muted = false;
    video.volume = 1;

    try {
      await video.play();
      setNeedsEntry(false);
    } catch {
      video.pause();
      video.currentTime = 0;
      setNeedsEntry(true);
    }
  }, []);

  const enterPortfolio = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;
    video.currentTime = 0;

    try {
      await video.play();
      setNeedsEntry(false);
    } catch {
      setNeedsEntry(true);
    }
  };

  return (
    <div
      className={`cinema-intro${isExiting ? " is-exiting" : ""}${
        needsEntry ? " is-awaiting-entry" : ""
      }`}
      role="dialog"
      aria-label="Mohammad Yassine animated website introduction"
      aria-modal="true"
    >
      <div className="cinema-intro-ambient" aria-hidden="true" />
      <div className="cinema-intro-stars" aria-hidden="true" />

      <div className="cinema-intro-frame">
        <video
          ref={videoRef}
          className="cinema-intro-video"
          autoPlay
          controls={false}
          disablePictureInPicture
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={attemptAutoplayWithSound}
          onEnded={beginExit}
          onError={beginExit}
        >
          <source
            src="/media/yassine-pixar-intro-portrait.mp4"
            type="video/mp4"
            media="(max-aspect-ratio: 4/5)"
          />
          <source src="/media/yassine-pixar-intro.mp4" type="video/mp4" />
        </video>
        <div className="cinema-intro-vignette" aria-hidden="true" />
      </div>

      {needsEntry && (
        <div className="cinema-intro-entry">
          <button
            type="button"
            className="cinema-intro-enter"
            onClick={enterPortfolio}
            autoFocus
          >
            Enter portfolio
          </button>
        </div>
      )}

      <div className="cinema-intro-flash" aria-hidden="true" />
    </div>
  );
}
