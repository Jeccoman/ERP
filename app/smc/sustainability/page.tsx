import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const sustainabilityData = [
  { category: 'Carbon Emissions', value: 75, target: 100 },
  { category: 'Water Usage', value: 60, target: 80 },
  { category: 'Waste Reduction', value: 85, target: 90 },
  { category: 'Renewable Energy', value: 40, target: 50 },
  { category: 'Sustainable Sourcing', value: 70, target: 75 },
]

export default function SustainabilityPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Sustainability Metrics</h1>
      <Card>
        <CardHeader>
          <CardTitle>Environmental Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sustainabilityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name="Current Value" />
              <Bar dataKey="target" fill="#82ca9d" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

