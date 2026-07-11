"use client";

import { useEffect, useRef } from 'react';

export function useScrollReveal(delay = 0) {
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const element = ref.current;
      if (!element) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("visible");
              observer.unobserve(element);
            }, delay);
          }
        },
        { threshold: 0.12 }
      );
  
      observer.observe(element);
      return () => observer.disconnect();
    }, [delay]);
  
    return ref;
  }