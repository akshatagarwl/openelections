"use client";

import type { ReactNode } from "react";
import { Accordion } from "@base-ui/react/accordion";
import { Icon } from "./icon";
import { useHydrated } from "./use-hydrated";

export function PublicationChecklist({ children }: { children: ReactNode }) {
  const hydrated = useHydrated();
  return (
    <Accordion.Root
      className="checklist-items"
      role="group"
      aria-label="Publication requirements"
      defaultValue={["source"]}
      hiddenUntilFound
      disabled={!hydrated}
    >
      {children}
    </Accordion.Root>
  );
}

export function PublicationRequirement({
  value,
  number,
  title,
  children,
}: {
  value: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Accordion.Item className="checklist-item" value={value}>
      <Accordion.Header className="checklist-heading">
        <Accordion.Trigger className="checklist-trigger">
          <span className="checklist-number">{number}</span>
          <span>{title}</span>
          <Icon name="plus" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel className="checklist-body">{children}</Accordion.Panel>
    </Accordion.Item>
  );
}
