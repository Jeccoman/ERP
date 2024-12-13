"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

type OnboardingTask = {
  id: string;
  task: string;
  assignee: string;
  dueDate: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}

type NewHire = {
  id: string;
  name: string;
  position: string;
  department: string;
  startDate: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
}

export default function EmployeeOnboarding() {
  const [newHires, setNewHires] = useState<NewHire[]>([
    { id: '1', name: 'John Doe', position: 'Software Engineer', department: 'IT', startDate: '2023-07-15', status: 'In Progress' },
    { id: '2', name: 'Jane Smith', position: 'HR Manager', department: 'Human Resources', startDate: '2023-07-20', status: 'Not Started' },
  ])

  const [onboardingTasks, setOnboardingTasks] = useState<OnboardingTask[]>([
    { id: '1', task: 'Prepare workstation', assignee: 'IT Department', dueDate: '2023-07-14', status: 'Completed' },
    { id: '2', task: 'Schedule orientation', assignee: 'HR Department', dueDate: '2023-07-15', status: 'In Progress' },
    { id: '3', task: 'Provide employee handbook', assignee: 'HR Department', dueDate: '2023-07-15', status: 'Pending' },
  ])

  const [newHire, setNewHire] = useState<Partial<NewHire>>({
    name: '',
    position: '',
    department: '',
    startDate: '',
  })

  const [newTask, setNewTask] = useState<Partial<OnboardingTask>>({
    task: '',
    assignee: '',
    dueDate: '',
  })

  const handleNewHireChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHire({ ...newHire, [e.target.name]: e.target.value })
  }

  const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value })
  }

  const handleNewHireSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newHire.name && newHire.position && newHire.department && newHire.startDate) {
      setNewHires([...newHires, { ...newHire, id: (newHires.length + 1).toString(), status: 'Not Started' } as NewHire])
      setNewHire({ name: '', position: '', department: '', startDate: '' })
    }
  }

  const handleNewTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.task && newTask.assignee && newTask.dueDate) {
      setOnboardingTasks([...onboardingTasks, { ...newTask, id: (onboardingTasks.length + 1).toString(), status: 'Pending' } as OnboardingTask])
      setNewTask({ task: '', assignee: '', dueDate: '' })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Employee Onboarding</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Add New Hire</CardTitle>
          <CardDescription>Enter details for a new employee</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewHireSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={newHire.name} onChange={handleNewHireChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input id="position" name="position" value={newHire.position} onChange={handleNewHireChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" name="department" value={newHire.department} onChange={handleNewHireChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" name="startDate" type="date" value={newHire.startDate} onChange={handleNewHireChange} required />
              </div>
            </div>
            <Button type="submit">Add New Hire</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>New Hires</CardTitle>
          <CardDescription>Overview of employees in the onboarding process</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {newHires.map((hire) => (
                <TableRow key={hire.id}>
                  <TableCell>{hire.name}</TableCell>
                  <TableCell>{hire.position}</TableCell>
                  <TableCell>{hire.department}</TableCell>
                  <TableCell>{hire.startDate}</TableCell>
                  <TableCell>{hire.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add Onboarding Task</CardTitle>
          <CardDescription>Create a new task for the onboarding process</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewTaskSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="task">Task</Label>
                <Input id="task" name="task" value={newTask.task} onChange={handleNewTaskChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="assignee">Assignee</Label>
                <Input id="assignee" name="assignee" value={newTask.assignee} onChange={handleNewTaskChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" name="dueDate" type="date" value={newTask.dueDate} onChange={handleNewTaskChange} required />
              </div>
            </div>
            <Button type="submit">Add Task</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Onboarding Tasks</CardTitle>
          <CardDescription>List of tasks in the onboarding process</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {onboardingTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.task}</TableCell>
                  <TableCell>{task.assignee}</TableCell>
                  <TableCell>{task.dueDate}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>
                    <Checkbox checked={task.status === 'Completed'} onCheckedChange={() => {
                      setOnboardingTasks(onboardingTasks.map(t => 
                        t.id === task.id ? {...t, status: t.status === 'Completed' ? 'Pending' : 'Completed'} : t
                      ))
                    }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

