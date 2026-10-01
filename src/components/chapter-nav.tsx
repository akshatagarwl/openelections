"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icon";

export function ChapterNav() {
  const [current, setCurrent] = useState("");
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const chapters = [...document.querySelectorAll<HTMLElement>("section.chapter[id]")];
    let frame = 0;
    function update() {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current)
        progressRef.current.style.transform = `scaleX(${maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0})`;
      let active = "";
      for (const chapter of chapters) {
        if (chapter.getBoundingClientRect().top <= window.innerHeight * 0.45) active = chapter.id;
      }
      setCurrent(active);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <nav className="chapter-nav" aria-label="Explore the story">
      <div ref={progressRef} className="reading-progress" aria-hidden="true"></div>
      <a
        href="#platform"
        className={"chapter-link" + (current === "platform" ? " is-active" : "")}
        aria-current={current === "platform" ? "location" : undefined}
      >
        <span>01</span> Why openness matters
      </a>
      <a
        href="#authority"
        className={"chapter-link" + (current === "authority" ? " is-active" : "")}
        aria-current={current === "authority" ? "location" : undefined}
      >
        <span>02</span> The distinction
      </a>
      <a
        href="#review"
        className={"chapter-link" + (current === "review" ? " is-active" : "")}
        aria-current={current === "review" ? "location" : undefined}
      >
        <span>03</span> The scrutiny gap
      </a>
      <a
        href="#precedents"
        className={"chapter-link" + (current === "precedents" ? " is-active" : "")}
        aria-current={current === "precedents" ? "location" : undefined}
      >
        <span>04</span> The precedents
      </a>
      <a
        href="#essay"
        className={"chapter-link" + (current === "essay" ? " is-active" : "")}
        aria-current={current === "essay" ? "location" : undefined}
      >
        <span>05</span> The argument
      </a>
      <a
        href="#checklist"
        className={"chapter-link" + (current === "checklist" ? " is-active" : "")}
        aria-current={current === "checklist" ? "location" : undefined}
      >
        <span>06</span> Our demand <Icon name="arrow-down-right" />
      </a>
    </nav>
  );
}
