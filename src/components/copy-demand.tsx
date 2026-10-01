"use client";

import { useState } from "react";
import { Button } from "@base-ui/react/button";
import { checklist } from "../content";
import { useHydrated } from "./use-hydrated";
import { Icon } from "./icon";

export function CopyDemand() {
  const hydrated = useHydrated();
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(checklist);
      setStatus("Demand copied. Ready to share.");
    } catch {
      const url = URL.createObjectURL(new Blob([checklist], { type: "text/plain;charset=utf-8" }));
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "openelections-open-code-demand.txt";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setStatus("Clipboard unavailable. Demand downloaded instead.");
    }
  }

  return (
    <>
      <Button
        disabled={!hydrated}
        id="copy-checklist"
        className="copy-button"
        aria-describedby="copy-status"
        onClick={copy}
      >
        <Icon name="copy" /> Copy the demand
      </Button>
      <span id="copy-status" className="copy-status" role="status">
        {status}
      </span>
    </>
  );
}
