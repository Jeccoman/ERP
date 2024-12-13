"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Employee, employeeSchema } from '@/lib/schema';
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

export default function EmployeesList() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: "1", name: "John Doe", email: "john@example.com", department: "IT", position: "Software Engineer", hireDate: "2023-01-15", salary: 75000 },
    { id: "2", name: "Jane Smith", email: "jane@example.com", department: "HR", position: "HR Manager", hireDate: "2022-11-01", salary: 80000 },
  ]);

  const { register, handleSubmit, formState: { errors } } = useForm<Employee>({
    resolver: zodResolver(employeeSchema),
  });

  const onSubmit = (data: Employee) => {
    setEmployees([...employees, { ...data, id: (employees.length + 1).toString() }]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Employees</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input {...register("name")} placeholder="Name" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        
        <Input {...register("email")} placeholder="Email" type="email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        
        <Input {...register("department")} placeholder="Department" />
        {errors.department && <p className="text-red-500">{errors.department.message}</p>}
        
        <Input {...register("position")} placeholder="Position" />
        {errors.position && <p className="text-red-500">{errors.position.message}</p>}
        
        <Input {...register("hireDate")} placeholder="Hire Date" type="date" />
        {errors.hireDate && <p className="text-red-500">{errors.hireDate.message}</p>}
        
        <Input {...register("salary", { valueAsNumber: true })} placeholder="Salary" type="number" />
        {errors.salary && <p className="text-red-500">{errors.salary.message}</p>}
        
        <Button type="submit">Add Employee</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Hire Date</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.hireDate}</TableCell>
              <TableCell>${employee.salary.toLocaleString()}</TableCell>
              <TableCell>
                <Link href={`/employees/${employee.id}`}>
                  <Button variant="outline" size="sm">View</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

