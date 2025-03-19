
import * as React from "react";
import styled from "styled-components";

// Styled Textarea Component
const StyledTextarea = styled.textarea`
  display: flex;
  min-height: 60px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--input-border, #ccc);
  background: transparent;
  padding: 8px 12px;
  font-size: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  color: var(--foreground);
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: var(--muted-foreground);
  }

  &:focus-visible {
    outline: none;
    border-color: var(--ring-color, #4a90e2);
    box-shadow: 0 0 0 2px var(--ring-color, #4a90e2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>((props, ref) => {
  return <StyledTextarea ref={ref} {...props} />;
});

Textarea.displayName = "Textarea";

export { Textarea };
