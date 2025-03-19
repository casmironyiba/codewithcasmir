"use client";

import React from "react";
import styled from "styled-components";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { ChevronDown } from "lucide-react";
Accoun

// Styled Components
const StyledAccordionItem = styled(AccordionPrimitive.Item)`
  border-bottom: 1px solid var(--border-color, #ccc);
`;

const StyledAccordionTrigger = styled(AccordionPrimitive.Trigger)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &[data-state="open"] svg {
    transform: rotate(180deg);
  }
`;

const StyledChevron = styled(ChevronDown)`
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  color: var(--muted-foreground, #777);
  transition: transform 0.2s ease-in-out;
`;

const StyledAccordionContent = styled(AccordionPrimitive.Content)`
  overflow: hidden;
  font-size: 0.875rem;
  animation: var(--accordion-animation);

  div {
    padding-bottom: 1rem;
  }
`;

// Component Wrappers
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ ...props }, ref) => <StyledAccordionItem ref={ref} {...props} />);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <StyledAccordionTrigger ref={ref} {...props}>
      {children}
      <StyledChevron />
    </StyledAccordionTrigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, ...props }, ref) => (
  <StyledAccordionContent ref={ref} {...props}>
    <div>{children}</div>
  </StyledAccordionContent>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
