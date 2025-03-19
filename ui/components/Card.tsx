import * as React from "react";
import styled from "styled-components";

// Card Container
const StyledCard = styled.div`
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--card-foreground);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Card Header
const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
`;

// Card Title
const StyledCardTitle = styled.h2`
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

// Card Description
const StyledCardDescription = styled.p`
  font-size: 0.875rem;
  color: var(--muted-foreground);
`;

// Card Content
const StyledCardContent = styled.div`
  padding: 24px;
  padding-top: 0;
`;

// Card Footer
const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  padding-top: 0;
`;

// ForwardRef Components
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledCard ref={ref} {...props} />
);
Card.displayName = "Card";


const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledCardHeader ref={ref} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledCardTitle ref={ref} {...props} />
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledCardDescription ref={ref} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledCardContent ref={ref} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledCardFooter ref={ref} {...props} />
);
CardFooter.displayName = "CardFooter";

// Export components
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
