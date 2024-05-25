// controllers/courseOfferingController.ts
import { Request, Response } from "express";
import fs from "fs";
import { CourseOffering } from "../interface";

const courseOfferingsFile = "courseOfferings.json";

// Load course offerings or initialize an empty array
let courseOfferings: CourseOffering[] = [];
try {
  const fileData = fs.readFileSync(courseOfferingsFile, "utf8");
  courseOfferings = JSON.parse(fileData);
} catch (error) {
  console.error(
    "Failed to read or parse course offerings file, starting with an empty array."
  );
}

export const addCourseOffering = (req: Request, res: Response) => {
  const { courseName, instructorName, startDate, minEmployees, maxEmployees } =
    req.body;

  // Validate input fields
  let errors = [];
  if (!courseName) errors.push("courseName cannot be empty");
  if (!instructorName) errors.push("instructorName cannot be empty");
  if (!startDate || !/^\d{2}\d{2}\d{4}$/.test(startDate))
    errors.push("startDate must be in ddmmyyyy format");
  if (minEmployees === undefined || typeof minEmployees !== "number")
    errors.push("minEmployees must be a number");
  if (maxEmployees === undefined || typeof maxEmployees !== "number")
    errors.push("maxEmployees must be a number");

  if (errors.length > 0) {
    return res.status(400).json({
      status: 400,
      message: "INPUT_DATA_ERROR",
      data: { failure: errors.join(", ") },
    });
  }

  // Create a unique course ID
  const courseId = `OFFERING-${courseName.toUpperCase()}-${instructorName.toUpperCase()}`;
  const newCourseOffering: CourseOffering = {
    courseId,
    courseName,
    instructorName,
    startDate,
    minEmployees,
    maxEmployees,
    registrations: [],
  };

  // Add the new course offering to the array and write to file
  courseOfferings.push(newCourseOffering);
  fs.writeFileSync(
    courseOfferingsFile,
    JSON.stringify(courseOfferings, null, 2)
  );

  return res.status(200).json({
    status: 200,
    message: "Course added successfully",
    data: { success: { courseId } },
  });
};
