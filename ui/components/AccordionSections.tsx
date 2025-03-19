"use client";

import React from "react";
import {
  Accordion as RadixAccordion,
  AccordionContent as RadixAccordionContent,
  AccordionItem as RadixAccordionItem,
  AccordionTrigger as RadixAccordionTrigger,
} from "@radix-ui/react-accordion";
import { FileText } from "lucide-react";
import styled from "styled-components";

// Styled Components
const Accordion = styled(RadixAccordion)`
  width: 100%;
`;

const AccordionItem = styled(RadixAccordionItem)`
  border-bottom: 1px solid #e2e8f0;
  padding: 8px 0;
`;

const AccordionTrigger = styled(RadixAccordionTrigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background: #f1f5f9;
  }
`;

const AccordionTitle = styled.h5`
  font-size: 16px;
  margin: 0;
`;

const AccordionContent = styled(RadixAccordionContent)`
  padding: 10px;
  background: #f9fafb;
`;

const ChapterList = styled.ul`
  padding-left: 20px;
`;

const ChapterItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 0;
  font-size: 14px;
  
  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`;

// Props Interface
interface AccordionSectionsProps {
  sections: {
    sectionId: string;
    sectionTitle: string;
    chapters: { chapterId: string; title: string }[];
  }[];
}

const AccordionSections: React.FC<AccordionSectionsProps> = ({ sections }) => {
  return (
    <Accordion type="multiple">
      {sections.map((section) => (
        <AccordionItem key={section.sectionId} value={section.sectionTitle}>
          <AccordionTrigger>
            <AccordionTitle>{section.sectionTitle}</AccordionTitle>
          </AccordionTrigger>
          <AccordionContent>
            <ChapterList>
              {section.chapters.map((chapter) => (
                <ChapterItem key={chapter.chapterId}>
                  <FileText />
                  <span>{chapter.title}</span>
                </ChapterItem>
              ))}
            </ChapterList>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionSections;
