import React, { useState } from "react";
import styled from "styled-components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/components/Select";
import  courseCategories  from "@/lib/utilities/courseCategories";

const ToolbarContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  flex-grow: 1;
`;

const StyledSelectContent = styled(SelectContent)`
  background-color: #f5f5f5;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const StyledSelectItem = styled(SelectItem)`
  padding: 0.5rem;
  &:hover {
    background-color: #d1d1d1;
  }
`;

const Toolbar = ({ onSearch, onCategoryChange }:any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value:any) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <ToolbarContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search courses"
      />
      <Select onValueChange={onCategoryChange}>
        <SelectTrigger>
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <StyledSelectContent>
          <StyledSelectItem value="all">All Categories</StyledSelectItem>
          {courseCategories.map((category) => (
            <StyledSelectItem key={category.value} value={category.value}>
              {category.label}
            </StyledSelectItem>
          ))}
        </StyledSelectContent>
      </Select>
    </ToolbarContainer>
  );
};

export default Toolbar;
