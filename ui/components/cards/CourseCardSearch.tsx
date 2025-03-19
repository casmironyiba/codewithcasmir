import { formatPrice } from "@/lib/utilities";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  cursor: pointer;
  padding: 1rem;
  border-radius: 8px;
  transition: background 0.3s ease;
  background: ${({ isSelected }) => (isSelected ? "#f5f5f5" : "#fff")};
  &:hover {
    background: #f0f0f0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #444;
`;

const CourseCardSearch = ({ course, isSelected, onClick }) => {
  return (
    <Card onClick={onClick} isSelected={isSelected}>
      <ImageContainer>
        <Image
          src={course.image || "/placeholder.png"}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </ImageContainer>
      <Content>
        <div>
          <Title>{course.title}</Title>
          <Description>{course.description}</Description>
        </div>
        <div>
          <p>By {course.teacherName}</p>
          <Footer>
            <span>{formatPrice(course.price)}</span>
            <span>{course.enrollments?.length} Enrolled</span>
          </Footer>
        </div>
      </Content>
    </Card>
  );
};

export default CourseCardSearch;
