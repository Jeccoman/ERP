"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PayStubDetails } from './pay-stub-details'
import { TimeOffRequestDetails } from './time-off-request'
import { BenefitsEnrollment } from './benefits-enrollment'
import { PerformanceGoals } from './performance-goals'
import { TimeAndAttendance } from './time-attendance'

export default function EmployeeSelfService() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
  })

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Employee Self-Service Portal</h2>
      
      <Tabs defaultValue="personal-info">
        <TabsList>
          <TabsTrigger value="personal-info">Personal Information</TabsTrigger>
          <TabsTrigger value="pay-stubs">Pay Stubs</TabsTrigger>
          <TabsTrigger value="time-off">Time Off Requests</TabsTrigger>
          <TabsTrigger value="benefits">Benefits Enrollment</TabsTrigger>
          <TabsTrigger value="goals">Performance Goals</TabsTrigger>
          <TabsTrigger value="time-attendance">Time & Attendance</TabsTrigger>
        </TabsList>

        <TabsContent value="personal-info">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>View and update your personal details</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={personalInfo.name} onChange={handlePersonalInfoChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" value={personalInfo.phone} onChange={handlePersonalInfoChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" name="address" value={personalInfo.address} onChange={handlePersonalInfoChange} />
                  </div>
                </div>
                <Button type="submit">Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pay-stubs">
          <PayStubDetails />
        </TabsContent>

        <TabsContent value="time-off">
          <TimeOffRequestDetails />
        </TabsContent>

        <TabsContent value="benefits">
          <BenefitsEnrollment />
        </TabsContent>

        <TabsContent value="goals">
          <PerformanceGoals />
        </TabsContent>
        <TabsContent value="time-attendance">
          <TimeAndAttendance />
        </TabsContent>
      </Tabs>
    </div>
  )
}

