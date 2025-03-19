import styled from "styled-components";
import {
  Card as BaseCard,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/ui/components/Card";
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/components/Avatar";
import Image from "next/image";
import { formatPrice } from "@/lib/utilities";

const CourseCard = ({ course, onGoToCourse }) => {
  return (
    <StyledCard onClick={() => onGoToCourse(course)}>
      <CardHeader>
        <StyledImage
          src={course.image || "/placeholder.png"}
          alt={course.title}
          width={400}
          height={350}
          priority
        />
      </CardHeader>
      <CardContent>
        <StyledTitle>
          {course.title}: {course.description}
        </StyledTitle>
        <StyledInstructor>
          <Avatar>
            <AvatarImage alt={course.teacherName} />
            <AvatarFallback>{course.teacherName[0]}</AvatarFallback>
          </Avatar>
          <p>{course.teacherName}</p>
        </StyledInstructor>
        <CardFooter>
          <StyledCategory>{course.category}</StyledCategory>
          <StyledPrice>{formatPrice(course.price)}</StyledPrice>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default CourseCard;

// Styled Components
const StyledCard = styled(BaseCard)`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

const StyledTitle = styled(CardTitle)`
  font-size: 1.2rem;
  font-weight: bold;
`;

const StyledInstructor = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    font-size: 0.9rem;
    color: #6b7280;
  }
`;

const StyledCategory = styled.div`
  font-size: 0.9rem;
  color: #4b5563;
`;

const StyledPrice = styled.span`
  font-weight: bold;
  color: #1e40af;
`;
