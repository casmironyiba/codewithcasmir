"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import styled from "styled-components";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const StyledTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  height: 36px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background: transparent;
  padding: 8px 12px;
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.5);
  }
`;

const StyledContent = styled(SelectPrimitive.Content)`
  position: relative;
  z-index: 50;
  max-height: 240px;
  min-width: 128px;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledItem = styled(SelectPrimitive.Item)`
  display: flex;
  width: 100%;
  cursor: default;
  align-items: center;
  padding: 8px 12px;
  font-size: 14px;
  &:focus {
    background: #e0e7ff;
    color: #4338ca;
  }
`;

const SelectTrigger = React.forwardRef(
  ({ children, ...props }, ref) => (
    <StyledTrigger ref={ref} {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown size={16} />
      </SelectPrimitive.Icon>
    </StyledTrigger>
  )
);
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef(({ children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <StyledContent ref={ref} {...props}>{children}</StyledContent>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef(({ children, ...props }, ref) => (
  <StyledItem ref={ref} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator>
      <Check size={16} />
    </SelectPrimitive.ItemIndicator>
  </StyledItem>
));
SelectItem.displayName = "SelectItem";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
};
