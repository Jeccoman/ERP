'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import io from 'socket.io-client'

const socket = io()

interface ModuleMetrics {
  [key: string]: number
}

const initialMetrics: ModuleMetrics = {
  inventory: 1000,
  orders: 50,
  suppliers: 25,
  warehouses: 5,
  shipments: 30,
  qualityIssues: 3,
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#FF6B6B']

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState(initialMetrics)

  useEffect(() => {
    socket.on('metricsUpdated', (updatedMetrics: ModuleMetrics) => {
      setMetrics(updatedMetrics)
    })

    return () => {
      socket.off('metricsUpdated')
    }
  }, [])

  const modules = [
    { name: 'Inventory', path: '/inventory' },
    { name: 'Orders', path: '/orders' },
    { name: 'Suppliers', path: '/suppliers' },
    { name: 'Warehouse', path: '/warehouse' },
    { name: 'Transportation', path: '/transportation' },
    { name: 'Forecasting', path: '/forecasting' },
    { name: 'Production', path: '/production' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Procurement', path: '/procurement' },
    { name: 'Quality Control', path: '/quality-control' },
    { name: 'Risk Management', path: '/risk-management' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'Kanban', path: '/kanban' },
    { name: 'Custom Dashboard', path: '/custom-dashboard' },
  ]

  const overviewData = [
    { name: 'Inventory', value: metrics.inventory },
    { name: 'Orders', value: metrics.orders },
    { name: 'Suppliers', value: metrics.suppliers },
    { name: 'Warehouses', value: metrics.warehouses },
    { name: 'Shipments', value: metrics.shipments },
    { name: 'Quality Issues', value: metrics.qualityIssues },
  ]

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Card key={module.name}>
            <CardHeader>
              <CardTitle>{module.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href={module.path}>
                <Button>
                  View {module.name} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={overviewData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {overviewData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Real-time Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <h3 className="text-lg font-semibold">{value}</h3>
                <p className="text-sm text-gray-500">{key}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

