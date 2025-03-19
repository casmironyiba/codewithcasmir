"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import styled, { css } from "styled-components";
import { X } from "lucide-react";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = styled(SheetPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fade-in 0.3s ease-in-out;

  &[data-state="closed"] {
    animation: fade-out 0.3s ease-in-out;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const SheetContentWrapper = styled(SheetPrimitive.Content)<{ side?: "top" | "bottom" | "left" | "right" }>`
  position: fixed;
  z-index: 50;
  background-color: var(--background);
  padding: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  ${({ side }) =>
    side === "top" &&
    css`
      inset: 0 auto auto 0;
      border-bottom: 1px solid var(--border);
      transform: translateY(-100%);
      &[data-state="open"] {
        transform: translateY(0);
      }
    `}

  ${({ side }) =>
    side === "bottom" &&
    css`
      inset: auto 0 0 0;
      border-top: 1px solid var(--border);
      transform: translateY(100%);
      &[data-state="open"] {
        transform: translateY(0);
      }
    `}

  ${({ side }) =>
    side === "left" &&
    css`
      inset: 0 auto 0 0;
      width: 75%;
      max-width: 400px;
      height: 100%;
      border-right: 1px solid var(--border);
      transform: translateX(-100%);
      &[data-state="open"] {
        transform: translateX(0);
      }
    `}

  ${({ side }) =>
    side === "right" &&
    css`
      inset: 0 0 0 auto;
      width: 75%;
      max-width: 400px;
      height: 100%;
      border-left: 1px solid var(--border);
      transform: translateX(100%);
      &[data-state="open"] {
        transform: translateX(0);
      }
    `}
`;

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  side?: "top" | "bottom" | "left" | "right";
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetContentWrapper ref={ref} side={side} {...props}>
      <SheetPrimitive.Close asChild>
        <CloseButton>
          <X size={16} />
          <span className="sr-only">Close</span>
        </CloseButton>
      </SheetPrimitive.Close>
      {children}
    </SheetContentWrapper>
  </SheetPortal>
));

SheetContent.displayName = "SheetContent";

const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const SheetHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  @media (min-width: 640px) {
    text-align: left;
  }
`;

const SheetFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const SheetTitle = styled(SheetPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
`;

const SheetDescription = styled(SheetPrimitive.Description)`
  font-size: 0.875rem;
  color: var(--muted-foreground);
`;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
