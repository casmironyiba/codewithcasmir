import * as React from "react";
import styled from "styled-components";

// Styled Components for Table
const TableWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  caption-side: bottom;
  font-size: 0.875rem; /* Equivalent to text-sm */
`;

const TableHeader = styled.thead`
  & tr {
    border-bottom: 1px solid var(--border-color);
  }
`;

const TableBody = styled.tbody`
  & tr:last-child {
    border-bottom: 0;
  }
`;

const TableFooter = styled.tfoot`
  border-top: 1px solid var(--border-color);
  background-color: var(--muted-bg);
  font-weight: 500;

  & > tr:last-child {
    border-bottom: 0;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--muted-bg);
  }

  &[data-state="selected"] {
    background-color: var(--muted);
  }
`;

const TableHead = styled.th`
  height: 40px;
  padding: 8px;
  text-align: left;
  vertical-align: middle;
  font-weight: 500;
  color: var(--muted-foreground);
`;

const TableCell = styled.td`
  padding: 8px;
  vertical-align: middle;
`;

const TableCaption = styled.caption`
  margin-top: 16px;
  font-size: 0.875rem;
  color: var(--muted-foreground);
`;

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <TableWrapper>
    <StyledTable ref={ref} {...props} />
  </TableWrapper>
));
Table.displayName = "Table";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
