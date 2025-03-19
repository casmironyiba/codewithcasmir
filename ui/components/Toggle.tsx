"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import styled, { css } from "styled-components";

// Toggle Variants
const variants = {
  default: css`
    background: transparent;
  `,
  outline: css`
    border: 1px solid var(--input-border, #ccc);
    background: transparent;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    &:hover {
      background: var(--accent, #f0f0f0);
      color: var(--accent-foreground, #333);
    }
  `,
};

// Toggle Sizes
const sizes = {
  default: css`
    height: 36px;
    padding: 0 8px;
    min-width: 36px;
  `,
  sm: css`
    height: 32px;
    padding: 0 6px;
    min-width: 32px;
  `,
  lg: css`
    height: 40px;
    padding: 0 10px;
    min-width: 40px;
  `,
};

// Styled Toggle Component
const StyledToggle = styled(TogglePrimitive.Root)<{
  $variant?: keyof typeof variants;
  $size?: keyof typeof sizes;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
  outline: none;

  &:hover {
    background: var(--muted, #f5f5f5);
    color: var(--muted-foreground, #666);
  }

  &:focus-visible {
    outline: none;
    border-color: var(--ring, #4a90e2);
    box-shadow: 0 0 0 2px var(--ring, #4a90e2);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-state="on"] {
    background: var(--accent, #ddd);
    color: var(--accent-foreground, #222);
  }

  svg {
    pointer-events: none;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  ${({ $variant }) => $variant && variants[$variant]};
  ${({ $size }) => $size && sizes[$size]};
`;

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => (
  <StyledToggle ref={ref} $variant={variant} $size={size} {...props} />
));

Toggle.displayName = "Toggle";

export { Toggle };
