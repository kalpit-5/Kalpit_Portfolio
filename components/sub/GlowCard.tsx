"use client";

import { useRef } from "react";
import Image from "next/image";

type CardProps = {
  card: {
    review: string;
  };
  index: number;
  children: React.ReactNode;
};

const GlowCard: React.FC<CardProps> = ({ card, index, children }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", `${angle + 60}`);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column relative"
    >
      <div className="glow absolute inset-0 z-0"></div>

      <div className="flex items-center gap-1 mb-5 z-10 relative">
        {Array.from({ length: 5 }, (_, i) => (
          <Image key={i} src="/images/star.png" alt="star" width={20} height={20} />
        ))}
      </div>

      <div className="mb-5 z-10 relative">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      <div className="z-10 relative">{children}</div>
    </div>
  );
};

export default GlowCard;
