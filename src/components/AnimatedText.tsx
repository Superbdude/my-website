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
    let timer: ReturnType<typeof setTimeout>;
    setVisible("");

    const tick = () => {
      if (!mounted) return;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setVisible((_s) => text.slice(0, i + 1));
      i += 1;
      if (i < text.length) {
        timer = setTimeout(tick, speed);
      }
    };

    timer = setTimeout(tick, speed);

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
