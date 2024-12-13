"use client";

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeaveRequest, leaveRequestSchema } from '@/lib/schema';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function LeaveManagement() {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    { id: "1", employeeId: "1", startDate: "2023-07-01", endDate: "2023-07-05", type: "Vacation", status: "Pending", reason: "Summer vacation" },
    { id: "2", employeeId: "2", startDate: "2023-06-28", endDate: "2023-06-30", type: "Sick", status: "Approved", reason: "Flu" },
  ]);

  const { register, handleSubmit, formState: { errors } } = useForm<LeaveRequest>({
    resolver: zodResolver(leaveRequestSchema),
  });

  const onSubmit = (data: LeaveRequest) => {
    setLeaveRequests([...leaveRequests, { ...data, id: (leaveRequests.length + 1).toString(), status: "Pending" }]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Leave Management</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input {...register("employeeId")} placeholder="Employee ID" />
        {errors.employeeId && <p className="text-red-500">{errors.employeeId.message}</p>}
        
        <Input {...register("startDate")} placeholder="Start Date" type="date" />
        {errors.startDate && <p className="text-red-500">{errors.startDate.message}</p>}
        
        <Input {...register("endDate")} placeholder="End Date" type="date" />
        {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>}
        
        <Select onValueChange={(value) => register("type").onChange({ target: { value } })}>
          <SelectTrigger>
            <SelectValue placeholder="Select leave type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Vacation">Vacation</SelectItem>
            <SelectItem value="Sick">Sick</SelectItem>
            <SelectItem value="Personal">Personal</SelectItem>
          </SelectContent>
        </Select>
        {errors.type && <p className="text-red-500">{errors.type.message}</p>}
        
        <Input {...register("reason")} placeholder="Reason" />
        {errors.reason && <p className="text-red-500">{errors.reason.message}</p>}
        
        <Button type="submit">Request Leave</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee ID</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaveRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.employeeId}</TableCell>
              <TableCell>{request.startDate}</TableCell>
              <TableCell>{request.endDate}</TableCell>
              <TableCell>{request.type}</TableCell>
              <TableCell>{request.status}</TableCell>
              <TableCell>{request.reason}</TableCell>
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

