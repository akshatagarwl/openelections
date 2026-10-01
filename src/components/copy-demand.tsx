"use client";

import { useState } from "react";
import { Button } from "@base-ui/react/button";
import { Toast } from "@base-ui/react/toast";
import { checklist } from "../content";
import { useHydrated } from "./use-hydrated";
import { Icon } from "./icon";

export function CopyDemand() {
  return (
    <Toast.Provider timeout={0} limit={1}>
      <CopyDemandAction />
    </Toast.Provider>
  );
}

function CopyDemandAction() {
  const hydrated = useHydrated();
  const [copying, setCopying] = useState(false);
  const copyNotifications = Toast.useToastManager();

  async function copy() {
    setCopying(true);
    try {
      await navigator.clipboard.writeText(checklist);
      copyNotifications.add({
        id: "copy-demand",
        title: "Copy status",
        description: "Demand copied. Ready to share.",
        type: "success",
      });
    } catch {
      copyNotifications.add({
        id: "copy-demand",
        title: "Copy status",
        description:
          "Could not copy the demand. Check your browser’s clipboard permissions and try again.",
        type: "error",
      });
    } finally {
      setCopying(false);
    }
  }

  return (
    <>
      <Button
        disabled={!hydrated || copying}
        id="copy-checklist"
        className="copy-button"
        aria-describedby="copy-status"
        onClick={copy}
      >
        <Icon name="copy" /> Copy the demand
      </Button>
      <Toast.Viewport id="copy-status" className="copy-status" aria-label="Copy feedback">
        {copyNotifications.toasts.map((toast) => (
          <Toast.Root key={toast.id} toast={toast} swipeDirection={[]}>
            <Toast.Title className="sr-only" />
            <Toast.Description />
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </>
  );
}
