"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  HiChevronRight,
  HiPlay,
  HiVolumeOff,
  HiVolumeUp,
} from "react-icons/hi";

const INTRO_SESSION_KEY = "portfolio-cinematic-intro-v1";
const EXIT_DURATION_MS = 1100;

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const completionRef = useRef(false);
  const exitTimerRef = useRef<number | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [needsPlay, setNeedsPlay] = useState(false);
  const [progress, setProgress] = useState(0);

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

    const failsafeId = window.setTimeout(beginExit, 15000);

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

  const tryPlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setNeedsPlay(false);
    } catch {
      setNeedsPlay(true);
    }
  };

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextSoundState = !soundOn;
    video.muted = !nextSoundState;
    video.volume = 0.72;
    setSoundOn(nextSoundState);
    await tryPlay();
  };

  const updateProgress = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
    setProgress(Math.min(100, (video.currentTime / video.duration) * 100));
  };

  return (
    <div
      className={`cinema-intro${isExiting ? " is-exiting" : ""}`}
      role="dialog"
      aria-label="Mohammad Yassine animated website introduction"
      aria-modal="true"
      onKeyDown={(event) => {
        if (event.key === "Escape") beginExit();
      }}
    >
      <div className="cinema-intro-ambient" aria-hidden="true" />
      <div className="cinema-intro-stars" aria-hidden="true" />

      <div className="cinema-intro-frame">
        <video
          ref={videoRef}
          className="cinema-intro-video"
          src="/media/yassine-pixar-intro.mp4"
          poster="/media/yassine-pixar-intro-poster.jpg"
          autoPlay
          muted={!soundOn}
          playsInline
          preload="auto"
          onCanPlay={tryPlay}
          onTimeUpdate={updateProgress}
          onEnded={beginExit}
          onError={beginExit}
        />
        <div className="cinema-intro-vignette" aria-hidden="true" />
      </div>

      <div className="cinema-intro-brand" aria-hidden="true">
        <span>Mohammad Yassine</span>
        <small>Portfolio presentation</small>
      </div>

      <div className="cinema-intro-controls">
        <button
          type="button"
          className="cinema-intro-control"
          onClick={toggleSound}
          aria-label={soundOn ? "Mute introduction" : "Play introduction with sound"}
        >
          {soundOn ? <HiVolumeUp aria-hidden="true" /> : <HiVolumeOff aria-hidden="true" />}
          <span>{soundOn ? "Sound on" : "Sound off"}</span>
        </button>

        <button
          type="button"
          className="cinema-intro-control cinema-intro-skip"
          onClick={beginExit}
          aria-label="Skip introduction"
          autoFocus
        >
          <span>Skip intro</span>
          <HiChevronRight aria-hidden="true" />
        </button>
      </div>

      {needsPlay && (
        <button type="button" className="cinema-intro-play" onClick={tryPlay}>
          <HiPlay aria-hidden="true" />
          <span>Play intro</span>
        </button>
      )}

      <div className="cinema-intro-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      <div className="cinema-intro-flash" aria-hidden="true" />
    </div>
  );
}
