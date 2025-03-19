"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import styled from "styled-components";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;

const StyledPopoverContent = styled(PopoverPrimitive.Content)`
  z-index: 50;
  width: 18rem; /* 72px */
  border-radius: 0.375rem;
  border: 1px solid var(--border-color);
  background: var(--popover-bg);
  padding: 1rem;
  color: var(--popover-foreground);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  outline: none;

  &[data-state="open"] {
    animation: fadeIn 150ms ease-out, zoomIn 150ms ease-out;
  }

  &[data-state="closed"] {
    animation: fadeOut 150ms ease-out, zoomOut 150ms ease-out;
  }

  &[data-side="bottom"] {
    animation: slideInFromTop 150ms ease-out;
  }
  &[data-side="top"] {
    animation: slideInFromBottom 150ms ease-out;
  }
  &[data-side="left"] {
    animation: slideInFromRight 150ms ease-out;
  }
  &[data-side="right"] {
    animation: slideInFromLeft 150ms ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes zoomOut {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.95);
    }
  }

  @keyframes slideInFromTop {
    from {
      transform: translateY(-5px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideInFromBottom {
    from {
      transform: translateY(5px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      transform: translateX(-5px);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      transform: translateX(5px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <StyledPopoverContent ref={ref} align={align} sideOffset={sideOffset} {...props} />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
