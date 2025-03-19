import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styled, { css } from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

// Styled Components for Button Variants
const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  focus-visible: {
    outline: none;
    ring: 1px solid var(--ring);
  }
  disabled: {
    pointer-events: none;
    opacity: 0.5;
  }

  ${({ variant }) =>
    variant === "default" &&
    css`
      background: var(--primary);
      color: var(--primary-foreground);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      &:hover {
        background: rgba(var(--primary-rgb), 0.9);
      }
    `}

  ${({ variant }) =>
    variant === "destructive" &&
    css`
      background: var(--destructive);
      color: var(--destructive-foreground);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
      &:hover {
        background: rgba(var(--destructive-rgb), 0.9);
      }
    `}

  ${({ variant }) =>
    variant === "outline" &&
    css`
      border: 1px solid var(--input);
      background: var(--background);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      &:hover {
        background: var(--accent);
        color: var(--accent-foreground);
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: var(--secondary);
      color: var(--secondary-foreground);
      &:hover {
        background: rgba(var(--secondary-rgb), 0.8);
      }
    `}

  ${({ variant }) =>
    variant === "ghost" &&
    css`
      background: transparent;
      &:hover {
        background: var(--accent);
        color: var(--accent-foreground);
      }
    `}

  ${({ variant }) =>
    variant === "link" &&
    css`
      color: var(--primary);
      text-decoration: underline;
      &:hover {
        text-decoration: underline;
      }
    `}

  ${({ size }) =>
    size === "default" &&
    css`
      height: 2.25rem;
      padding: 0.5rem 1rem;
    `}

  ${({ size }) =>
    size === "sm" &&
    css`
      height: 2rem;
      border-radius: 4px;
      padding: 0.5rem;
      font-size: 0.75rem;
    `}

  ${({ size }) =>
    size === "lg" &&
    css`
      height: 2.5rem;
      border-radius: 4px;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    `}

  ${({ size }) =>
    size === "icon" &&
    css`
      width: 2.25rem;
      height: 2.25rem;
      padding: 0;
    `}
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : StyledButton;
    return <Comp ref={ref} variant={variant} size={size} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
