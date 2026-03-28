import { useEffect, useRef } from "react";

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const children = el.querySelectorAll(".fade-in-up");
    children.forEach((child) => observer.observe(child));
    if (el.classList.contains("fade-in-up")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
