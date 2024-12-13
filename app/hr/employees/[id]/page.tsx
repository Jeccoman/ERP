'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'

export default function EmployeeForm() {
  const params = useParams()
  const isEditing = params.id !== 'add'
  const [employee, setEmployee] = useState({
    name: '',
    birthdate: undefined as Date | undefined,
    nida: '',
    email: '',
    phone: '',
    gender: '',
    tin: '',
    userClass: '',
    userType: '',
    division: '',
    residenceLocation: '',
    dutyStation: '',
    reportingTo: '',
    department: '',
    position: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setEmployee({ ...employee, [name]: value })
  }

  const handleDateChange = (date: Date | undefined) => {
    setEmployee({ ...employee, birthdate: date })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Employee data:', employee)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">
        {isEditing ? 'Edit Employee' : 'Add New Employee'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={employee.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="birthdate">Birthdate</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {employee.birthdate ? format(employee.birthdate, 'PPP') : <span>Pick a date</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={employee.birthdate}
                  onSelect={handleDateChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date('1900-01-01')
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nida">NIDA</Label>
            <Input id="nida" name="nida" value={employee.nida} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={employee.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" value={employee.phone} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select name="gender" value={employee.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tin">TIN</Label>
            <Input id="tin" name="tin" value={employee.tin} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userClass">User Class</Label>
            <Select name="userClass" value={employee.userClass} onValueChange={(value) => handleSelectChange('userClass', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select user class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="class1">Class 1</SelectItem>
                <SelectItem value="class2">Class 2</SelectItem>
                <SelectItem value="class3">Class 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="userType">User Type</Label>
            <Select name="userType" value={employee.userType} onValueChange={(value) => handleSelectChange('userType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fullTime">Full Time</SelectItem>
                <SelectItem value="partTime">Part Time</SelectItem>
                <SelectItem value="contractor">Contractor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="division">Division</Label>
            <Select name="division" value={employee.division} onValueChange={(value) => handleSelectChange('division', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select division" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="division1">Division 1</SelectItem>
                <SelectItem value="division2">Division 2</SelectItem>
                <SelectItem value="division3">Division 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="residenceLocation">Residence Location</Label>
            <Select name="residenceLocation" value={employee.residenceLocation} onValueChange={(value) => handleSelectChange('residenceLocation', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select residence location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="location1">Location 1</SelectItem>
                <SelectItem value="location2">Location 2</SelectItem>
                <SelectItem value="location3">Location 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dutyStation">Duty Station</Label>
            <Input id="dutyStation" name="dutyStation" value={employee.dutyStation} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reportingTo">Reporting To</Label>
            <Input id="reportingTo" name="reportingTo" value={employee.reportingTo} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select name="department" value={employee.department} onValueChange={(value) => handleSelectChange('department', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Select name="position" value={employee.position} onValueChange={(value) => handleSelectChange('position', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="supervisor">Supervisor</SelectItem>
                <SelectItem value="associate">Associate</SelectItem>
                <SelectItem value="intern">Intern</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="profilePicture">Profile Picture</Label>
          <Input id="profilePicture" name="profilePicture" type="file" accept="image/*" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signature">Signature</Label>
          <Input id="signature" name="signature" type="file" accept="image/*" />
        </div>
        <Button type="submit">{isEditing ? 'Update Employee' : 'Add Employee'}</Button>
      </form>
    </div>
  )
}

