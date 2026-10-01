"use client";
import { useEffect, useState } from "react";
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { Icon } from "./icon";
import { workflows, type Workflow } from "../content";
import { useHydrated } from "./use-hydrated";
import { useMediaQuery } from "@base-ui/react/unstable-use-media-query";

export function CodeExplorer() {
  const hydrated = useHydrated();
  const [selected, setSelected] = useState<Workflow>("validation");
  const [userPaused, setUserPaused] = useState(false);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)", {});
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
      <ToggleGroup
        className="network"
        aria-label="Code to examine"
        disabled={!hydrated}
        value={[selected]}
        onValueChange={(values) => {
          if (values[0]) setSelected(values[0]);
        }}
      >
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
        <Toggle className="workflow-node node-rolls" value="validation">
          <Icon name="list-checks" />
          <span>Form 6 checks</span>
        </Toggle>
        <Toggle className="workflow-node node-voters" value="permissions">
          <Icon name="users-round" />
          <span>Officer permissions</span>
        </Toggle>
        <Toggle className="workflow-node node-candidates" value="restoration">
          <Icon name="contact-round" />
          <span>Voter restoration</span>
        </Toggle>
        <Toggle className="workflow-node node-officials" value="audit">
          <Icon name="network" />
          <span>Audit trails</span>
        </Toggle>
        <Toggle className="workflow-node node-turnout" value="history">
          <Icon name="chart-no-axes-column-increasing" />
          <span>Change history</span>
        </Toggle>
        <Toggle className="workflow-node node-results" value="builds">
          <Icon name="file-chart-column-increasing" />
          <span>Build inputs</span>
        </Toggle>
      </ToggleGroup>
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
