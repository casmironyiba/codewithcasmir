"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import styled from "styled-components";

// Styled Components for Tabs
const TabsListStyled = styled(TabsPrimitive.List)`
  display: inline-flex;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--muted-bg);
  padding: 4px;
  color: var(--muted-foreground);
`;

const TabsTriggerStyled = styled(TabsPrimitive.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  background: transparent;
  color: var(--foreground);
  border: none;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--ring-color);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-state="active"] {
    background: var(--background);
    color: var(--foreground);
    box-shadow: var(--shadow);
  }
`;

const TabsContentStyled = styled(TabsPrimitive.Content)`
  margin-top: 8px;
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--ring-color);
  }
`;

const Tabs = TabsPrimitive.Root;

export { Tabs, TabsListStyled as TabsList, TabsTriggerStyled as TabsTrigger, TabsContentStyled as TabsContent };
