'use client'

import { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { useToast } from "@/components/ui/use-toast"
import io from 'socket.io-client'

interface DashboardWidget {
  id: string
  type: 'bar' | 'line' | 'pie' | 'stats'
  title: string
  data: any
}

const initialWidgets: DashboardWidget[] = [
  {
    id: 'widget-1',
    type: 'bar',
    title: 'Monthly Sales',
    data: [
      { name: 'Jan', value: 400 },
      { name: 'Feb', value: 300 },
      { name: 'Mar', value: 200 },
      { name: 'Apr', value: 278 },
      { name: 'May', value: 189 },
    ]
  },
  {
    id: 'widget-2',
    type: 'line',
    title: 'Inventory Levels',
    data: [
      { name: 'Week 1', value: 1000 },
      { name: 'Week 2', value: 1200 },
      { name: 'Week 3', value: 900 },
      { name: 'Week 4', value: 1100 },
    ]
  },
  {
    id: 'widget-3',
    type: 'pie',
    title: 'Order Status',
    data: [
      { name: 'Completed', value: 400 },
      { name: 'In Progress', value: 300 },
      { name: 'Pending', value: 200 },
    ]
  },
  {
    id: 'widget-4',
    type: 'stats',
    title: 'Key Metrics',
    data: {
      totalOrders: 1234,
      revenue: '$56,789',
      onTimeDelivery: '95%'
    }
  }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const socket = io()

export default function CustomDashboardPage() {
  const [widgets, setWidgets] = useState(initialWidgets)
  const { toast } = useToast()

  useEffect(() => {
    socket.on('dashboardUpdated', (updatedWidgets: DashboardWidget[]) => {
      setWidgets(updatedWidgets)
    })

    return () => {
      socket.off('dashboardUpdated')
    }
  }, [])

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const items = Array.from(widgets)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setWidgets(items)
    socket.emit('updateDashboard', items)
  }

  const renderWidget = (widget: DashboardWidget) => {
    switch (widget.type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={widget.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        )
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={widget.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        )
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={widget.data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {widget.data.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )
      case 'stats':
        return (
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(widget.data).map(([key, value]) => (
              <div key={key} className="text-center">
                <h3 className="text-lg font-semibold">{value}</h3>
                <p className="text-sm text-gray-500">{key}</p>
              </div>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  const addWidget = (type: DashboardWidget['type']) => {
    const newWidget: DashboardWidget = {
      id: `widget-${Date.now()}`,
      type,
      title: `New ${type.charAt(0).toUpperCase() + type.slice(1)} Widget`,
      data: type === 'stats' ? { stat1: '0', stat2: '0', stat3: '0' } : []
    }
    const newWidgets = [...widgets, newWidget]
    setWidgets(newWidgets)
    socket.emit('updateDashboard', newWidgets)
    toast({
      title: "Success",
      description: `New ${type} widget added`,
    })
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Custom Dashboard</h1>
      <div className="flex items-center space-x-2 mb-4">
        <Select onValueChange={(value: DashboardWidget['type']) => addWidget(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Add widget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bar">Bar Chart</SelectItem>
            <SelectItem value="line">Line Chart</SelectItem>
            <SelectItem value="pie">Pie Chart</SelectItem>
            <SelectItem value="stats">Stats</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dashboard">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {widgets.map((widget, index) => (
                <Draggable key={widget.id} draggableId={widget.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{widget.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {renderWidget(widget)}
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

