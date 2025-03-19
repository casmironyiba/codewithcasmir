'use client'

import React from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/components/Card";
import Image from "next/image";
import { Button } from "@/ui/components/Button";
import { Pencil, Trash2 } from "lucide-react";

const StyledCard = styled(Card)`
  .course-card-teacher__image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .course-card-teacher__title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .course-card-teacher__category {
    color: #888;
  }
  .status {
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
  .status-published {
    background-color: rgba(72, 187, 120, 0.2);
    color: #48bb78;
  }
  .status-unpublished {
    background-color: rgba(244, 67, 54, 0.2);
    color: #f44336;
  }
  .edit-button {
    background-color: #4caf50;
    color: white;
  }
  .delete-button {
    background-color: #f44336;
    color: white;
  }
  .enrollments {
    margin-left: 0.25rem;
    margin-top: 0.25rem;
    display: inline-block;
    color: #a0aec0;
    background-color: rgba(160, 174, 192, 0.1);
    font-size: 0.875rem;
    font-weight: normal;
    padding: 0.25rem 0.5rem;
  }
  .enrollment-count {
    font-weight: bold;
    color: #fff;
  }
  .view-only {
    font-size: 0.875rem;
    color: #718096;
    font-style: italic;
  }
`;

const TeacherCourseCard = ({ course, onEdit, onDelete, isOwner }) => {
  return (
    <StyledCard>
      <CardHeader>
        <Image
          src={course.image || "/placeholder.png"}
          alt={course.title}
          width={370}
          height={150}
          className="course-card-teacher__image"
          priority
        />
      </CardHeader>
      <CardContent>
        <div>
          <CardTitle className="course-card-teacher__title">
            {course.title}
          </CardTitle>
          <CardDescription className="course-card-teacher__category">
            {course.category}
          </CardDescription>
          <p>
            Status: 
            <span className={`status ${course.status === "Published" ? "status-published" : "status-unpublished"}`}>
              {course.status}
            </span>
          </p>
          {course.enrollments && (
            <p className="enrollments">
              <span className="enrollment-count">
                {course.enrollments.length}
              </span>{" "}
              Student{course.enrollments.length > 1 ? "s" : ""} Enrolled
            </p>
          )}
        </div>
        <div>
          {isOwner ? (
            <>
              <Button className="edit-button" onClick={() => onEdit(course)}>
                <Pencil className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button className="delete-button" onClick={() => onDelete(course)}>
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </>
          ) : (
            <p className="view-only">View Only</p>
          )}
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default TeacherCourseCard;

