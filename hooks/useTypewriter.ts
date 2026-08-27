"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  words: string[]; // list of words/phrases to cycle through
  typeSpeed?: number; // ms per character when typing
  deleteSpeed?: number; // ms per character when deleting
  pauseDuration?: number; // ms to pause after fully typed
  loop?: boolean; // loop through words indefinitely
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
  loop = true,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isTyping) {
      if (displayText.length < currentWord.length) {
        // Still typing
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing — pause before deleting
        if (words.length === 1 && !loop) return; // single word, no loop
        setIsPaused(true);
      }
    } else {
      if (displayText.length > 0) {
        // Still deleting
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting — move to next word
        const nextIndex = (wordIndex + 1) % words.length;
        if (!loop && nextIndex === 0) return; // stop if no loop
        setWordIndex(nextIndex);
        setIsTyping(true);
      }
    }
  }, [
    displayText,
    isTyping,
    isPaused,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
    loop,
  ]);

  return { displayText, isTyping: isTyping && !isPaused };
}
