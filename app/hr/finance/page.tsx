"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, TrendingUp, TrendingDown, PieChart, BarChart2, CreditCard, Briefcase, AlertCircle } from 'lucide-react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from "recharts"

// Sample data for charts
const revenueData = [
  { month: 'Jan', revenue: 500000 },
  { month: 'Feb', revenue: 550000 },
  { month: 'Mar', revenue: 600000 },
  { month: 'Apr', revenue: 580000 },
  { month: 'May', revenue: 650000 },
  { month: 'Jun', revenue: 700000 },
]

const expenseData = [
  { category: 'Salaries', value: 250000 },
  { category: 'Marketing', value: 100000 },
  { category: 'Operations', value: 150000 },
  { category: 'IT', value: 80000 },
  { category: 'Other', value: 70000 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function FinanceDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Finance Dashboard</h2>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="budgeting">Budgeting</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,650,000</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,800,000</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$850,000</div>
                <p className="text-xs text-muted-foreground">+20% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cash Flow</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$500,000</div>
                <p className="text-xs text-muted-foreground">-2% from last month</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    revenue: {
                      label: "Revenue",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    expenses: {
                      label: "Expenses",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analysis</CardTitle>
              <CardDescription>Breakdown of revenue sources and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Label htmlFor="period">Select Period:</Label>
                  <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                    <SelectTrigger id="period" className="w-[180px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <ChartContainer
                  config={{
                    revenue: {
                      label: "Revenue",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="revenue" fill="var(--color-revenue)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Revenue Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span>Product Sales</span>
                    <span className="font-semibold">$1,500,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Services</span>
                    <span className="font-semibold">$1,200,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Subscriptions</span>
                    <span className="font-semibold">$800,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Licensing</span>
                    <span className="font-semibold">$150,000</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                    <span>Expand product line to new markets</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                    <span>Increase marketing efforts for services</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                    <span>Introduce tiered subscription plans</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                    <span>Explore new licensing partnerships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expense Analysis</CardTitle>
              <CardDescription>Detailed breakdown of company expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  expenses: {
                    label: "Expenses",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={expenseData} layout="vertical">
                    <XAxis type="number" />
                    <YAxis dataKey="category" type="category" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="var(--color-expenses)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Expense Reduction Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
                    <span>Optimize IT infrastructure costs</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
                    <span>Renegotiate supplier contracts</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
                    <span>Implement energy-saving measures</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
                    <span>Review and optimize marketing spend</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Large Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span>New Equipment Purchase</span>
                    <span className="font-semibold">$150,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Office Renovation</span>
                    <span className="font-semibold">$80,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Software Licenses</span>
                    <span className="font-semibold">$60,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Employee Training Program</span>
                    <span className="font-semibold">$40,000</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="budgeting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Budget Overview</CardTitle>
              <CardDescription>Comparison of budgeted vs actual expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  budgeted: {
                    label: "Budgeted",
                    color: "hsl(var(--chart-1))",
                  },
                  actual: {
                    label: "Actual",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { category: 'Salaries', budgeted: 260000, actual: 250000 },
                    { category: 'Marketing', budgeted: 90000, actual: 100000 },
                    { category: 'Operations', budgeted: 140000, actual: 150000 },
                    { category: 'IT', budgeted: 85000, actual: 80000 },
                    { category: 'Other', budgeted: 75000, actual: 70000 },
                  ]}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="budgeted" fill="var(--color-budgeted)" />
                    <Bar dataKey="actual" fill="var(--color-actual)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Budget Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <AlertCircle className="mr-2 h-4 w-4 text-yellow-500" />
                    <span>Marketing expenses over budget by 11%</span>
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="mr-2 h-4 w-4 text-yellow-500" />
                    <span>Operations costs exceeded by 7%</span>
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>IT expenses under budget by 6%</span>
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>Other expenses reduced by 7%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Budget Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Adjust Department Budgets
                  </Button>
                  <Button className="w-full" variant="outline">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    Generate Budget Report
                  </Button>
                  <Button className="w-full" variant="outline">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Review Expense Policies
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
