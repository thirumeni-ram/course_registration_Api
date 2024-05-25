// import mongoose from 'mongoose';

// const courseSchema = new mongoose.Schema({
//   courseName: { type: String, required: true },
//   instructorName: { type: String, required: true },
//   startDate: { type: Date, required: true },
//   minEmployees: { type: Number, required: true },
//   maxEmployees: { type: Number, required: true },
//   courseID: {
//     type: String,
//     required: true,
//     unique: true,
//     default: function() {
//       return `OFFERING-${this.courseName.toUpperCase()}-${this.instructorName.toUpperCase().replace(/\s/g, '-')}`;
//     }
//   },
//   employees: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Employee'
//   }]
// });

// export default mongoose.model('Course', courseSchema);

import mongoose, { Schema, Document } from "mongoose";

interface CourseDocument extends Document {
  courseName: string;
  instructorName: string;
  startDate: Date;
  minEmployees: number;
  maxEmployees: number;
  courseID: string;
  employees: mongoose.Types.ObjectId[];
}

const courseSchema = new mongoose.Schema<CourseDocument>({
  courseName: { type: String, required: true },
  instructorName: { type: String, required: true },
  startDate: { type: Date, required: true },
  minEmployees: { type: Number, required: true },
  maxEmployees: { type: Number, required: true },
  courseID: {
    type: String,
    required: true,
    unique: true,
    default: function (this: CourseDocument) {
      return `OFFERING-${this.courseName.toUpperCase()}-${this.instructorName
        .toUpperCase()
        .replace(/\s/g, "-")}`;
    },
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
});

export default mongoose.model<CourseDocument>("Course", courseSchema);
