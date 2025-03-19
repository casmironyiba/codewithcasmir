"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import styled from "styled-components";

const SwitchRoot = styled(SwitchPrimitives.Root)`
  display: inline-flex;
  height: 20px;
  width: 36px;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  border-radius: 9999px;
  border: 2px solid transparent;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;
  outline: none;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--ring), 0 0 0 4px var(--ring-offset);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[data-state="checked"] {
    background-color: var(--primary-700);
  }

  &[data-state="unchecked"] {
    background-color: var(--customgreys-dirtyGrey);
  }
`;

const SwitchThumb = styled(SwitchPrimitives.Thumb)`
  pointer-events: none;
  height: 16px;
  width: 16px;
  border-radius: 9999px;
  background-color: var(--background);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &[data-state="checked"] {
    transform: translateX(16px);
  }

  &[data-state="unchecked"] {
    transform: translateX(0);
  }
`;

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchRoot>,
  React.ComponentPropsWithoutRef<typeof SwitchRoot>
>(({ className, ...props }, ref) => (
  <SwitchRoot {...props} ref={ref}>
    <SwitchThumb />
  </SwitchRoot>
));

Switch.displayName = "Switch";

export { Switch };
