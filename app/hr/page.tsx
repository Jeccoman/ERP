"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Users, UserPlus, DollarSign, Briefcase, Calendar, Award, PieChart, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts"

// Sample data for charts
const employeeGrowthData = [
  { month: 'Jan', employees: 100 },
  { month: 'Feb', employees: 120 },
  { month: 'Mar', employees: 130 },
  { month: 'Apr', employees: 140 },
  { month: 'May', employees: 155 },
  { month: 'Jun', employees: 170 },
]

const financialPerformanceData = [
  { month: 'Jan', revenue: 50000, expenses: 40000 },
  { month: 'Feb', revenue: 55000, expenses: 42000 },
  { month: 'Mar', revenue: 60000, expenses: 45000 },
  { month: 'Apr', revenue: 58000, expenses: 44000 },
  { month: 'May', revenue: 65000, expenses: 48000 },
  { month: 'Jun', revenue: 70000, expenses: 50000 },
]

export default function Dashboard() {
  const [] = useState("all")

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Executive Dashboard</h2>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="hr">HR</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+10% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Hires</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$850,000</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$650,000</div>
                <p className="text-xs text-muted-foreground">+3% from last month</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Employee Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    employees: {
                      label: "Employees",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={employeeGrowthData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="employees" stroke="var(--color-employees)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Financial Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    revenue: {
                      label: "Revenue",
                      color: "hsl(var(--chart-1))",
                    },
                    expenses: {
                      label: "Expenses",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={financialPerformanceData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="revenue" fill="var(--color-revenue)" />
                      <Bar dataKey="expenses" fill="var(--color-expenses)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="hr" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>HR Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Employee
                </Button>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Manage Leave
                </Button>
                <Button variant="outline">
                  <Award className="mr-2 h-4 w-4" />
                  Performance Reviews
                </Button>
                <Button variant="outline">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Job Postings
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Department Breakdown</CardTitle>
                <CardDescription>Employee distribution across departments</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    employees: {
                      label: "Employees",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { department: 'IT', employees: 50 },
                      { department: 'HR', employees: 30 },
                      { department: 'Finance', employees: 40 },
                      { department: 'Marketing', employees: 35 },
                      { department: 'Operations', employees: 60 },
                    ]}>
                      <XAxis dataKey="department" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="employees" fill="var(--color-employees)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent HR Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <UserPlus className="mr-2 h-4 w-4 text-green-500" />
                    <span>New employee John Doe onboarded</span>
                  </li>
                  <li className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Leave request approved for Jane Smith</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="mr-2 h-4 w-4 text-yellow-500" />
                    <span>Performance review completed for IT Department</span>
                  </li>
                  <li className="flex items-center">
                    <Briefcase className="mr-2 h-4 w-4 text-purple-500" />
                    <span>New job posting: Senior Software Engineer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="finance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <DollarSign className="h-8 w-8 text-green-500" />
                  <h3 className="text-lg font-semibold">Total Revenue</h3>
                  <p className="text-2xl font-bold">$5,230,000</p>
                  <span className="text-sm text-green-500 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" /> +8% YoY
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <PieChart className="h-8 w-8 text-red-500" />
                  <h3 className="text-lg font-semibold">Total Expenses</h3>
                  <p className="text-2xl font-bold">$4,120,000</p>
                  <span className="text-sm text-red-500 flex items-center">
                    <TrendingDown className="h-4 w-4 mr-1" /> +5% YoY
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <AlertCircle className="h-8 w-8 text-yellow-500" />
                  <h3 className="text-lg font-semibold">Net Profit</h3>
                  <p className="text-2xl font-bold">$1,110,000</p>
                  <span className="text-sm text-yellow-500 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" /> +12% YoY
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Budget vs Actual</CardTitle>
                <CardDescription>Comparison of budgeted and actual expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    budget: {
                      label: "Budget",
                      color: "hsl(var(--chart-1))",
                    },
                    actual: {
                      label: "Actual",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { department: 'IT', budget: 500000, actual: 480000 },
                      { department: 'HR', budget: 300000, actual: 310000 },
                      { department: 'Marketing', budget: 400000, actual: 420000 },
                      { department: 'Operations', budget: 600000, actual: 580000 },
                    ]}>
                      <XAxis dataKey="department" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="budget" fill="var(--color-budget)" />
                      <Bar dataKey="actual" fill="var(--color-actual)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Financial Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-green-500" />
                    <span>Major client payment received: $250,000</span>
                  </li>
                  <li className="flex items-center">
                    <PieChart className="mr-2 h-4 w-4 text-red-500" />
                    <span>Quarterly budget review completed</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-blue-500" />
                    <span>New investment opportunity identified</span>
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="mr-2 h-4 w-4 text-yellow-500" />
                    <span>Tax audit scheduled for next month</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

