"use client";

import type { ComponentPropsWithoutRef } from "react";
import { Button } from "@base-ui/react/button";

type ActionLinkProps = Pick<
  ComponentPropsWithoutRef<"a">,
  "children" | "className" | "target" | "rel" | "aria-label"
> & { href: string };

// These are navigation actions, not buttons: Space must retain native scrolling.
const preserveSpace: Button.Props["onKeyDown"] = (event) => {
  if (event.key === " ") event.preventBaseUIHandler();
};

export function ActionLink({
  href,
  children,
  className,
  target,
  rel,
  "aria-label": label,
}: ActionLinkProps) {
  return (
    <Button
      render={<a href={href} target={target} rel={rel} />}
      nativeButton={false}
      role="link"
      className={className}
      aria-label={label}
      onKeyDown={preserveSpace}
      onKeyUp={preserveSpace}
    >
      {children}
    </Button>
  );
}
