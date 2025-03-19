
import { formatPrice } from "@/lib/utilities";
import Image from "next/image";
import React from "react";
import AccordionSections from "./AccordionSections";
import styled from "styled-components";

const CoursePreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CoursePreviewContainer = styled.div`
  background-color: #1e1e1e;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
  width: 100%;
  img {
    border-radius: 8px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: white;
`;

const Teacher = styled.p`
  color: #b0b0b0;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #999;
  font-size: 0.875rem;
`;

const SectionTitle = styled.h4`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const PriceDetails = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: white;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #999;
  margin-bottom: 1rem;
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.125rem;
  padding-top: 1rem;
  border-top: 1px solid #666;
`;

const CoursePreview = ({ course }) => {
  const price = formatPrice(course.price);
  return (
    <CoursePreviewWrapper>
      <CoursePreviewContainer>
        <ImageWrapper>
          <Image
            src={course.image || "/placeholder.png"}
            alt="Course Preview"
            width={640}
            height={360}
          />
        </ImageWrapper>
        <div>
          <Title>{course.title}</Title>
          <Teacher>by {course.teacherName}</Teacher>
          <Description>{course.description}</Description>
        </div>
        <div>
          <SectionTitle>Course Content</SectionTitle>
          <AccordionSections sections={course.sections} />
        </div>
      </CoursePreviewContainer>

      <CoursePreviewContainer>
        <PriceDetails>Price Details (1 item)</PriceDetails>
        <PriceRow>
          <span>1x {course.title}</span>
          <span>{price}</span>
        </PriceRow>
        <TotalAmount>
          <span>Total Amount</span>
          <span>{price}</span>
        </TotalAmount>
      </CoursePreviewContainer>
    </CoursePreviewWrapper>
  );
};

export default CoursePreview;
