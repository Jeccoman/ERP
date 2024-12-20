import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const performanceData = [
  { metric: 'On-Time Delivery', value: 95 },
  { metric: 'Inventory Turnover', value: 12 },
  { metric: 'Order Accuracy', value: 98 },
  { metric: 'Supplier Performance', value: 88 },
  { metric: 'Cost Reduction', value: 10 },
]

export default function AnalyticsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Analytics and Reporting</h1>
      <Card>
        <CardHeader>
          <CardTitle>Supply Chain Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

