"use client";
import { useEffect, useRef, useState } from "react";
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { useHydrated } from "./use-hydrated";
import { Icon } from "./icon";

export function AuthoritySection() {
  const hydrated = useHydrated();
  const [software, setSoftware] = useState(false);
  const figureRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            animation = figure.animate(
              [
                { transform: "translateY(16px)", opacity: 0.65 },
                { transform: "translateY(0)", opacity: 1 },
              ],
              { duration: 750, easing: "cubic-bezier(.16,1,.3,1)" },
            );
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(figure);
    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, []);
  return (
    <section id="authority" className="chapter authority-section" aria-labelledby="authority-title">
      <div className="authority-intro">
        <span className="chapter-number">02 / THE DISTINCTION</span>
        <h2 id="authority-title">
          Can officers use
          <br />
          the powers law gives them?
        </h2>
        <p>
          ECI says field officers’ access is role-based and aligned with their statutory powers.
          <a className="citation" href="#source-3" aria-label="Source 3">
            [3]
          </a>
        </p>
        <p>
          That is a claim about the software. To test it independently, we need to see how the
          software implements it.
        </p>
        <ToggleGroup
          className="view-toggle"
          aria-label="Diagram perspective"
          disabled={!hydrated}
          value={[software ? "software" : "authority"]}
          onValueChange={(values) => {
            if (values[0]) setSoftware(values[0] === "software");
          }}
        >
          <Toggle value="authority">Statutory authority</Toggle>
          <Toggle value="software">Software implementation</Toggle>
        </ToggleGroup>
        <p className="interaction-hint">
          <Icon name="mouse-pointer-2" /> Switch views. Same officials. A different question.
        </p>
      </div>
      <div
        ref={figureRef}
        className="authority-figure"
        data-perspective={software ? "software" : "authority"}
      >
        <div className="figure-heading">
          <span id="perspective-label">
            {software ? "THE IMPLEMENTATION LAYER" : "THE LEGAL LAYER"}
          </span>
          <span id="perspective-status">
            {software ? (
              "WHAT NEEDS PUBLIC EVIDENCE"
            ) : (
              <>
                ECI’S STATED POSITION{" "}
                <a className="citation" href="#source-3" aria-label="Source 3">
                  [3]
                </a>
              </>
            )}
          </span>
        </div>
        <div className="authority-map">
          <div className="authority-actors">
            <div>
              <Icon name="landmark" />
              <strong>State CEO</strong>
              <span>Chief Electoral Officer</span>
            </div>
            <div>
              <Icon name="building-2" />
              <strong>District DEO</strong>
              <span>District Election Officer</span>
            </div>
            <div>
              <Icon name="user-round-check" />
              <strong>Local ERO</strong>
              <span>Electoral Registration Officer</span>
            </div>
          </div>
          <svg viewBox="0 0 540 95" className="authority-connections" aria-hidden="true">
            <path d="M90 0V40H270V95M270 0V95M450 0V40H270"></path>
          </svg>
          <div className="implementation-box">
            <Icon name="code-xml" />
            <div>
              <strong id="implementation-title">
                {software
                  ? "ECINet: permissions, rules and overrides"
                  : "Powers remain with designated officers"}
              </strong>
              <span id="implementation-subtitle">
                {software
                  ? "Who can act? Who can block? Who can change the rules?"
                  : "Software should reflect—not redefine—the law."}
              </span>
            </div>
            <Icon name={software ? "scan-search" : "check"} id="implementation-icon" />
          </div>
        </div>
        <div className="figure-caption" aria-live="polite">
          <span className="caption-symbol" aria-hidden="true">
            <Icon name="corner-down-right" />
          </span>
          <p id="authority-caption">
            {software
              ? "Shared code mediates access. Public source, permission mappings and deployment evidence would let others test whether every role can exercise its lawful powers."
              : "A unified platform does not, by itself, transfer statutory authority. The question is whether its permissions preserve that authority in practice."}
          </p>
        </div>
        <span className="figure-disclaimer">
          Illustrative roles and relationships, not a disclosed ECINet architecture.
        </span>
      </div>
    </section>
  );
}
