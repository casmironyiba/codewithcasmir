
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";

// Styled components
const StyledNavigationMenu = styled(NavigationMenuPrimitive.Root)`
  position: relative;
  z-index: 10;
  display: flex;
  max-width: max-content;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledNavigationMenuList = styled(NavigationMenuPrimitive.List)`
  display: flex;
  flex: 1;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

const StyledNavigationMenuTrigger = styled(NavigationMenuPrimitive.Trigger)`
  display: inline-flex;
  height: 2.25rem;
  width: max-content;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  background-color: var(--background);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;

  &:hover,
  &:focus {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-active],
  &[data-state="open"] {
    background-color: var(--accent-light);
  }
`;

const StyledChevron = styled(ChevronDown)`
  position: relative;
  top: 1px;
  margin-left: 0.25rem;
  height: 0.75rem;
  width: 0.75rem;
  transition: transform 0.3s;

  [data-state="open"] & {
    transform: rotate(180deg);
  }
`;

const StyledNavigationMenuContent = styled(NavigationMenuPrimitive.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledNavigationMenuViewportWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  justify-content: center;
`;

const StyledNavigationMenuViewport = styled(NavigationMenuPrimitive.Viewport)`
  position: relative;
  margin-top: 0.375rem;
  height: var(--radix-navigation-menu-viewport-height);
  width: 100%;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid var(--border);
  background-color: var(--popover);
  color: var(--popover-foreground);
  box-shadow: var(--shadow);

  &[data-state="open"] {
    animation: zoomIn 0.2s ease-in-out;
  }

  &[data-state="closed"] {
    animation: zoomOut 0.2s ease-in-out;
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes zoomOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.9);
    }
  }
`;

const StyledNavigationMenuIndicator = styled(NavigationMenuPrimitive.Indicator)`
  position: absolute;
  top: 100%;
  z-index: 1;
  display: flex;
  height: 6px;
  align-items: end;
  justify-content: center;
  overflow: hidden;

  &[data-state="visible"] {
    animation: fadeIn 0.2s ease-in-out;
  }

  &[data-state="hidden"] {
    animation: fadeOut 0.2s ease-in-out;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const StyledIndicator = styled.div`
  position: relative;
  top: 60%;
  height: 8px;
  width: 8px;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
  background-color: var(--border);
  box-shadow: var(--shadow-md);
`;

// Components
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, ...props }, ref) => (
  <StyledNavigationMenu ref={ref} {...props}>
    {children}
    <NavigationMenuViewport />
  </StyledNavigationMenu>
));

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>((props, ref) => <StyledNavigationMenuList ref={ref} {...props} />);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <StyledNavigationMenuTrigger ref={ref} {...props}>
    {children} <StyledChevron aria-hidden="true" />
  </StyledNavigationMenuTrigger>
));

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>((props, ref) => <StyledNavigationMenuContent ref={ref} {...props} />);

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>((props, ref) => (
  <StyledNavigationMenuViewportWrapper>
    <StyledNavigationMenuViewport ref={ref} {...props} />
  </StyledNavigationMenuViewportWrapper>
));

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>((props, ref) => (
  <StyledNavigationMenuIndicator ref={ref} {...props}>
    <StyledIndicator />
  </StyledNavigationMenuIndicator>
));

const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuLink = NavigationMenuPrimitive.Link;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
