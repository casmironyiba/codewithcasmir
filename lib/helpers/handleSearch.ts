'use client'
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function handleSearch(
  courses: any[],
  e: ChangeEvent<HTMLInputElement>,
  setFilteredCourses: Dispatch<SetStateAction<any[]>>
) {
  const query = e.target.value.toLowerCase();

  const filteredCourses = courses.filter((course) =>
    [course?.title, String(course?.price), course?.category]
      .filter(Boolean) // Remove null or undefined values
      .some((field) => field.toLowerCase().includes(query))
  );

  setFilteredCourses(filteredCourses);
}
