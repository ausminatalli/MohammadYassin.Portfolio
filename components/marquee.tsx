"use client";

export default function Marquee() {
  const items =
    "REACT · NEXT.JS · LARAVEL · NODE.JS · TYPESCRIPT · PHP · MYSQL · AWS · REACT NATIVE · DOCKER · ";
  const repeated = items.repeat(4);

  return (
    <div className="marquee-container py-4 mt-8">
      <div className="marquee-track">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="text-mono text-text-muted px-2 whitespace-nowrap"
          >
            {items}
          </span>
        ))}
      </div>
    </div>
  );
}
