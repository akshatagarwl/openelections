"use client";

import type { ReactNode } from "react";
import { Collapsible } from "@base-ui/react/collapsible";
import { Icon } from "./icon";
import { useHydrated } from "./use-hydrated";

export function Methodology({ children }: { children: ReactNode }) {
  const hydrated = useHydrated();
  return (
    <Collapsible.Root className="methodology" disabled={!hydrated}>
      <Collapsible.Trigger className="methodology-trigger">
        The evidence behind this demand <Icon name="plus" />
      </Collapsible.Trigger>
      <Collapsible.Panel className="methodology-body" hiddenUntilFound>
        {children}
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
