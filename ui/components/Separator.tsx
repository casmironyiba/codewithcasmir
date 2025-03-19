"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import styled from "styled-components";

const StyledSeparator = styled(SeparatorPrimitive.Root)<{
  orientation?: "horizontal" | "vertical";
}>`
  shrink: 0;
  background-color: var(--border-color);

  ${({ orientation }) =>
    orientation === "horizontal"
      ? "height: 1px; width: 100%;"
      : "height: 100%; width: 1px;"}
`;

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ orientation = "horizontal", decorative = true, ...props }, ref) => (
  <StyledSeparator ref={ref} decorative={decorative} orientation={orientation} {...props} />
));

Separator.displayName = "Separator";

export { Separator };
