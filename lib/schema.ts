import { z } from "zod";

// Employee Schema
export const employeeSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  department: z.string().min(1, "Department is required"),
  position: z.string().min(1, "Position is required"),
  hireDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  salary: z.number().positive("Salary must be a positive number"),
});

export type Employee = z.infer<typeof employeeSchema>;

// Leave Request Schema
export const leaveRequestSchema = z.object({
  id: z.string().optional(),
  employeeId: z.string(),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  type: z.enum(["Vacation", "Sick", "Personal"]),
  status: z.enum(["Pending", "Approved", "Rejected"]),
  reason: z.string().min(1, "Reason is required"),
});

export type LeaveRequest = z.infer<typeof leaveRequestSchema>;

// Performance Review Schema
export const performanceReviewSchema = z.object({
  id: z.string().optional(),
  employeeId: z.string(),
  reviewerId: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  overallRating: z.enum(["Excellent", "Good", "Satisfactory", "Needs Improvement", "Poor"]),
  comments: z.string().min(1, "Comments are required"),
});

export type PerformanceReview = z.infer<typeof performanceReviewSchema>;

// Budget Schema
export const budgetSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Budget name must be at least 2 characters"),
  amount: z.number().positive("Amount must be a positive number"),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  department: z.string().min(1, "Department is required"),
});

export type Budget = z.infer<typeof budgetSchema>;

