
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import styled from "styled-components";

// Styled Components
const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.2s ease-in-out;

  &[data-state="closed"] {
    animation: fadeOut 0.2s ease-in-out;
  }
`;

const StyledDialogContent = styled(DialogPrimitive.Content)`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 50;
  display: grid;
  width: 100%;
  max-width: 32rem;
  transform: translate(-50%, -50%);
  gap: 1rem;
  background: var(--background, white);
  padding: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  animation: zoomIn 0.2s ease-in-out;

  &[data-state="closed"] {
    animation: zoomOut 0.2s ease-in-out;
  }
`;

const CloseButton = styled(DialogPrimitive.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 4px;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--ring, #3b82f6);
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
`;

const StyledDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const StyledDialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

const StyledDialogTitle = styled(DialogPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5;
`;

const StyledDialogDescription = styled(DialogPrimitive.Description)`
  font-size: 0.875rem;
  color: var(--text-muted, #6b7280);
`;

// Dialog Components
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ ...props }, ref) => <StyledDialogOverlay ref={ref} {...props} />);
DialogOverlay.displayName = "DialogOverlay";

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <StyledDialogContent ref={ref} {...props}>
      {children}
      <CloseButton>
        <X />
        <span className="sr-only">Close</span>
      </CloseButton>
    </StyledDialogContent>
  </DialogPortal>
));
DialogContent.displayName = "DialogContent";

const DialogHeader = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogHeader {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogFooter {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ ...props }, ref) => <StyledDialogTitle ref={ref} {...props} />);
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ ...props }, ref) => <StyledDialogDescription ref={ref} {...props} />);
DialogDescription.displayName = "DialogDescription";

// Export Components
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
