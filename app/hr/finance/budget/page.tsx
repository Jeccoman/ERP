"use client";

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Budget, budgetSchema } from '@/lib/schema';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function BudgetManagement() {
  const [budgets, setBudgets] = useState<Budget[]>([
    { id: "1", name: "Q3 Marketing Campaign", amount: 50000, startDate: "2023-07-01", endDate: "2023-09-30", department: "Marketing" },
    { id: "2", name: "Annual IT Infrastructure", amount: 200000, startDate: "2023-01-01", endDate: "2023-12-31", department: "IT" },
  ]);

  const { register, handleSubmit, formState: { errors } } = useForm<Budget>({
    resolver: zodResolver(budgetSchema),
  });

  const onSubmit = (data: Budget) => {
    setBudgets([...budgets, { ...data, id: (budgets.length + 1).toString() }]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Budget Management</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input {...register("name")} placeholder="Budget Name" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        
        <Input {...register("amount", { valueAsNumber: true })} placeholder="Amount" type="number" />
        {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
        
        <Input {...register("startDate")} placeholder="Start Date" type="date" />
        {errors.startDate && <p className="text-red-500">{errors.startDate.message}</p>}
        
        <Input {...register("endDate")} placeholder="End Date" type="date" />
        {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>}
        
        <Input {...register("department")} placeholder="Department" />
        {errors.department && <p className="text-red-500">{errors.department.message}</p>}
        
        <Button type="submit">Create Budget</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Budget Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {budgets.map((budget) => (
            <TableRow key={budget.id}>
              <TableCell>{budget.name}</TableCell>
              <TableCell>${budget.amount.toLocaleString()}</TableCell>
              <TableCell>{budget.startDate}</TableCell>
              <TableCell>{budget.endDate}</TableCell>
              <TableCell>{budget.department}</TableCell>
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


