"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styled, { keyframes } from "styled-components";

// Animations
const fadeInZoom = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOutZoom = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

// Styled Tooltip Content
const StyledTooltipContent = styled(TooltipPrimitive.Content)`
  z-index: 50;
  overflow: hidden;
  border-radius: 6px;
  background: var(--primary, #333);
  color: var(--primary-foreground, #fff);
  padding: 6px 12px;
  font-size: 12px;
  animation: ${fadeInZoom} 0.15s ease-out;
  
  &[data-state="closed"] {
    animation: ${fadeOutZoom} 0.15s ease-in;
  }

  &[data-side="top"] {
    transform-origin: bottom;
  }
  &[data-side="bottom"] {
    transform-origin: top;
  }
  &[data-side="left"] {
    transform-origin: right;
  }
  &[data-side="right"] {
    transform-origin: left;
  }
`;

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <StyledTooltipContent ref={ref} sideOffset={sideOffset} {...props} />
  </TooltipPrimitive.Portal>
));

TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
