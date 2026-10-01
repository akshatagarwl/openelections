"use client";
import { useEffect, useState } from "react";
import { Progress } from "@base-ui/react/progress";
import { ScrollArea } from "@base-ui/react/scroll-area";
import { Icon } from "./icon";

export function ChapterNav() {
  const [current, setCurrent] = useState("");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const chapters = [...document.querySelectorAll<HTMLElement>("section.chapter[id]")];
    let frame = 0;
    function update() {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        maxScroll > 0 ? Math.round(Math.min(1, Math.max(0, window.scrollY / maxScroll)) * 100) : 0,
      );
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
      <Progress.Root
        className="reading-progress"
        aria-label="Reading progress"
        value={progress}
        getAriaValueText={(_, value) => `${value}% read`}
      >
        <Progress.Track className="reading-progress-track">
          <Progress.Indicator className="reading-progress-indicator" />
        </Progress.Track>
      </Progress.Root>
      <ScrollArea.Root>
        <ScrollArea.Viewport role="region" aria-label="Chapter navigation">
          <ScrollArea.Content className="chapter-links" style={{ minWidth: 0 }}>
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
          </ScrollArea.Content>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </nav>
  );
}
