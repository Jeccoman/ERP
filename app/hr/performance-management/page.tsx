"use client";

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PerformanceReview, performanceReviewSchema } from '@/lib/schema';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PerformanceManagement() {
  const [reviews, setReviews] = useState<PerformanceReview[]>([
    { id: "1", employeeId: "1", reviewerId: "2", date: "2023-06-15", overallRating: "Excellent", comments: "Outstanding performance" },
    { id: "2", employeeId: "2", reviewerId: "1", date: "2023-06-10", overallRating: "Good", comments: "Meets expectations" },
  ]);

  const { register, handleSubmit, formState: { errors } } = useForm<PerformanceReview>({
    resolver: zodResolver(performanceReviewSchema),
  });

  const onSubmit = (data: PerformanceReview) => {
    setReviews([...reviews, { ...data, id: (reviews.length + 1).toString() }]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Performance Management</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input {...register("employeeId")} placeholder="Employee ID" />
        {errors.employeeId && <p className="text-red-500">{errors.employeeId.message}</p>}
        
        <Input {...register("reviewerId")} placeholder="Reviewer ID" />
        {errors.reviewerId && <p className="text-red-500">{errors.reviewerId.message}</p>}
        
        <Input {...register("date")} placeholder="Review Date" type="date" />
        {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        
        <Select onValueChange={(value) => register("overallRating").onChange({ target: { value } })}>
          <SelectTrigger>
            <SelectValue placeholder="Select overall rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Excellent">Excellent</SelectItem>
            <SelectItem value="Good">Good</SelectItem>
            <SelectItem value="Satisfactory">Satisfactory</SelectItem>
            <SelectItem value="Needs Improvement">Needs Improvement</SelectItem>
            <SelectItem value="Poor">Poor</SelectItem>
          </SelectContent>
        </Select>
        {errors.overallRating && <p className="text-red-500">{errors.overallRating.message}</p>}
        
        <Textarea {...register("comments")} placeholder="Comments" />
        {errors.comments && <p className="text-red-500">{errors.comments.message}</p>}
        
        <Button type="submit">Submit Review</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee ID</TableHead>
            <TableHead>Reviewer ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Overall Rating</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell>{review.employeeId}</TableCell>
              <TableCell>{review.reviewerId}</TableCell>
              <TableCell>{review.date}</TableCell>
              <TableCell>{review.overallRating}</TableCell>
              <TableCell>{review.comments}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

