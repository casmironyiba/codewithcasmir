"use client";

import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  height: 2.25rem; /* h-9 */
  width: 100%;
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid var(--input-border, #ccc);
  background: transparent;
  padding: 0.25rem 0.75rem; /* px-3 py-1 */
  font-size: 1rem; /* text-base */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;

  &::file-selector-button {
    border: 0;
    background: transparent;
    font-size: 0.875rem; /* text-sm */
    font-weight: 500;
    color: var(--foreground, #000);
  }

  &::placeholder {
    color: var(--muted-foreground, #777);
  }

  &:focus-visible {
    outline: none;
    ring: 1px solid var(--ring, #007aff);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    font-size: 0.875rem; /* md:text-sm */
  }
`;

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ ...props }, ref) => {
    return <StyledInput ref={ref} {...props} />;
  }
);
Input.displayName = "Input";

export { Input };
