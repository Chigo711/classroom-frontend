import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "An overview of computer science concepts, programming fundamentals, and problem-solving techniques.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus I",
    department: "Math",
    description: "Limits, derivatives, and integrals of functions of a single variable with applications.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PHY105",
    name: "General Physics",
    department: "Physics",
    description: "Classical mechanics, thermodynamics, and waves for science and engineering majors.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];
