// interfaces.ts
export interface CourseOffering {
  courseId: string;
  courseName: string;
  instructorName: string;
  startDate: string;
  minEmployees: number;
  maxEmployees: number;
  registrations: Registration[];
}

export interface Registration {
  registrationId: string;
  employeeName: string;
  email: string;
  status: string;
}
