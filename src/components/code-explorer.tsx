"use client";
import { useEffect, useState } from "react";
import { Toggle } from "@base-ui/react/toggle";
import { Icon } from "./icon";
import { workflows, type Workflow } from "../content";
import { useHydrated } from "./use-hydrated";
import { useReducedMotion } from "./use-reduced-motion";

export function CodeExplorer() {
  const hydrated = useHydrated();
  const [selected, setSelected] = useState<Workflow>("validation");
  const [userPaused, setUserPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const paused = userPaused || reducedMotion;
  const item = workflows[selected];
  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused);
    return () => document.documentElement.classList.remove("motion-paused");
  }, [paused]);
  return (
    <div
      className="system-exhibit"
      aria-label="Current examples and the ongoing audit evidence we demand"
    >
      <div className="exhibit-topline">
        <span>
          <span className="small-cross">+</span> THE CODE THAT NEEDS SCRUTINY
        </span>
        <Toggle
          id="motion-toggle"
          className="motion-toggle"
          pressed={paused}
          disabled={!hydrated || reducedMotion}
          onPressedChange={setUserPaused}
          aria-label={
            reducedMotion
              ? "Animation disabled by reduced-motion preference"
              : `${paused ? "Play" : "Pause"} diagram animation`
          }
        >
          <Icon name={paused ? "play" : "pause"} />
        </Toggle>
      </div>
      <div className="network">
        <svg className="network-lines" viewBox="0 0 560 390" fill="none" aria-hidden="true">
          <circle className="orbit" cx="280" cy="195" r="104"></circle>
          <circle className="orbit orbit-outer" cx="280" cy="195" r="162"></circle>
          <path
            className="network-route"
            d="M280 195H111V75M280 195H449V75M280 195H72M280 195H488M280 195H111V315M280 195H449V315"
          ></path>
          <path className="network-flow" d="M111 75V195H449V315M449 75V195H111V315"></path>
          <path className="diagram-ticks" d="M280 22V35M280 355V368M107 195H120M440 195H453"></path>
          <circle className="hub-boundary" cx="280" cy="195" r="62"></circle>
        </svg>
        <div className="network-hub">
          <div className="hub-mark" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <strong>ECINet</strong>
          <span>ELECTORAL ROLLS</span>
        </div>
        <Toggle
          disabled={!hydrated}
          className={"workflow-node node-rolls" + (selected === "validation" ? " is-selected" : "")}
          pressed={selected === "validation"}
          onPressedChange={() => setSelected("validation")}
          data-workflow="validation"
        >
          <Icon name="list-checks" />
          <span>Form 6 checks</span>
        </Toggle>
        <Toggle
          disabled={!hydrated}
          className={
            "workflow-node node-voters" + (selected === "permissions" ? " is-selected" : "")
          }
          pressed={selected === "permissions"}
          onPressedChange={() => setSelected("permissions")}
          data-workflow="permissions"
        >
          <Icon name="users-round" />
          <span>Officer permissions</span>
        </Toggle>
        <Toggle
          disabled={!hydrated}
          className={
            "workflow-node node-candidates" + (selected === "restoration" ? " is-selected" : "")
          }
          pressed={selected === "restoration"}
          onPressedChange={() => setSelected("restoration")}
          data-workflow="restoration"
        >
          <Icon name="contact-round" />
          <span>Voter restoration</span>
        </Toggle>
        <Toggle
          disabled={!hydrated}
          className={"workflow-node node-officials" + (selected === "audit" ? " is-selected" : "")}
          pressed={selected === "audit"}
          onPressedChange={() => setSelected("audit")}
          data-workflow="audit"
        >
          <Icon name="network" />
          <span>Audit trails</span>
        </Toggle>
        <Toggle
          disabled={!hydrated}
          className={"workflow-node node-turnout" + (selected === "history" ? " is-selected" : "")}
          pressed={selected === "history"}
          onPressedChange={() => setSelected("history")}
          data-workflow="history"
        >
          <Icon name="chart-no-axes-column-increasing" />
          <span>Change history</span>
        </Toggle>
        <Toggle
          disabled={!hydrated}
          className={"workflow-node node-results" + (selected === "builds" ? " is-selected" : "")}
          pressed={selected === "builds"}
          onPressedChange={() => setSelected("builds")}
          data-workflow="builds"
        >
          <Icon name="file-chart-column-increasing" />
          <span>Build inputs</span>
        </Toggle>
      </div>
      <div className="network-detail" aria-live="polite" aria-atomic="true">
        <span className="detail-index" id="workflow-index">
          {item.index} / 06
        </span>
        <p id="workflow-detail">
          {item.text}{" "}
          {item.source && (
            <a
              href={`#source-${item.source}`}
              className="citation"
              aria-label={`Source ${item.source}`}
            >
              [{item.source}]
            </a>
          )}
        </p>
      </div>
      <div className="exhibit-bottomline">
        <span>SELECT A PART TO EXAMINE</span>
        <span>Current examples, not the limit of our demand</span>
      </div>
    </div>
  );
}
