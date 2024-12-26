
export interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Progress {
  courseId: string;
  completedLessons: string[]; // Array of completed lesson IDs
}
