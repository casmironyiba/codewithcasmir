"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import styled from "styled-components";

// Styled Components
const StyledAvatar = styled(AvatarPrimitive.Root)`
  position: relative;
  display: flex;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
`;

const StyledAvatarImage = styled(AvatarPrimitive.Image)`
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-muted, #e0e0e0);
`;

// Avatar Component
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <StyledAvatar ref={ref} className={className} {...props} />
));
Avatar.displayName = "Avatar";

// Avatar Image Component
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <StyledAvatarImage ref={ref} className={className} {...props} />
));
AvatarImage.displayName = "AvatarImage";

// Avatar Fallback Component
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <StyledAvatarFallback ref={ref} className={className} {...props} />
));
AvatarFallback.displayName = "AvatarFallback";

// Export Components
export { Avatar, AvatarImage, AvatarFallback };
