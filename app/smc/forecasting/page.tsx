import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const forecastData = [
  { month: 'Jan', actual: 4000, forecast: 4200 },{ month: 'Jan', actual: 4000, forecast: 4200 },
  { month: 'Feb', actual: 3000, forecast: 3200 },
  { month: 'Mar', actual: 2000, forecast: 2100 },
  { month: 'Apr', actual: 2780, forecast: 2900 },
  { month: 'May', actual: 1890, forecast: 2000 },
  { month: 'Jun', actual: 2390, forecast: 2500 },
]

export default function ForecastingPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Demand Forecasting</h1>
      <Card>
        <CardHeader>
          <CardTitle>Sales Forecast vs Actual</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="actual" stroke="#8884d8" />
              <Line type="monotone" dataKey="forecast" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

