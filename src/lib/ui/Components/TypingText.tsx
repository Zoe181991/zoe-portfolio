"use client";
import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  pauseAfterPeriod?: number;
  className?: string;
}

export function TypingText({
  text,
  speed = 55,
  pauseAfterPeriod = 1500,
  className,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        setDone(true);
        return;
      }
      const justTypedPeriod = text[i - 1] === ".";
      timeoutId = setTimeout(typeNext, justTypedPeriod ? pauseAfterPeriod : speed);
    };

    timeoutId = setTimeout(typeNext, speed);
    return () => clearTimeout(timeoutId);
  }, [text, speed, pauseAfterPeriod]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="typing-cursor">|</span>}
    </span>
  );
}
