"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number; // ms per character
  className?: string;
};

export default function AnimatedText({ text, speed = 60, className = "" }: Props) {
  const [visible, setVisible] = useState("");

  useEffect(() => {
    let i = 0;
    let mounted = true;
    setVisible("");

    const tick = () => {
      if (!mounted) return;
      setVisible((s) => text.slice(0, i + 1));
      i += 1;
      if (i < text.length) {
        timer = setTimeout(tick, speed);
      }
    };

    let timer: ReturnType<typeof setTimeout> = setTimeout(tick, speed);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [text, speed]);

  return (
    <span aria-label={text} className={className}>
      {visible}
      <span className="typewriter-cursor" aria-hidden>
        &nbsp;
      </span>
    </span>
  );
}
