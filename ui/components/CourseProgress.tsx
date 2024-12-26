
import React, { useEffect, useState } from "react";
import { fetchCourseData, fetchUserProgress } from "@/helpers/fetchCourseData";

import { Progress,Course} from "@/ui/interface/CourseProgress"; // Replace with your API path
interface CourseProgressProps {
  userId: string;
  courseId: string;
}

const CourseProgress: React.FC<CourseProgressProps> = ({ userId, courseId }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [progress, setProgress] = useState<Progress | null>(null);
  const [completionRate, setCompletionRate] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      const courseData = await fetchCourseData(courseId);
      const userProgress = await fetchUserProgress(userId, courseId);

      setCourse(courseData);
      setProgress(userProgress);

      if (courseData && userProgress) {
        const totalLessons = courseData.lessons.length;
        const completedLessons = userProgress.completedLessons.length;
        setCompletionRate((completedLessons / totalLessons) * 100);
      }
    };

    loadData();
  }, [courseId, userId]);

  return (
    <div>
      <h2>{course?.title || "Loading Course..."}</h2>
      {course && (
        <>
          <p>
            Progress: {completionRate.toFixed(2)}%
          </p>
          <div style={{ width: "100%", backgroundColor: "#ddd" }}>
            <div
              style={{
                width: `${completionRate}%`,
                backgroundColor: "#4caf50",
                height: "20px",
              }}
            />
          </div>
          <ul>
            {course.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title} - {progress?.completedLessons.includes(lesson.id) ? "✅ Completed" : "❌ Not Completed"}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CourseProgress;
