import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const riskData = [
  { id: 1, category: 'Supply Chain Disruption', probability: 'High', impact: 'Severe', mitigationStrategy: 'Diversify suppliers' },
  { id: 2, category: 'Quality Issues', probability: 'Medium', impact: 'Moderate', mitigationStrategy: 'Enhance quality control processes' },
  { id: 3, category: 'Regulatory Changes', probability: 'Low', impact: 'High', mitigationStrategy: 'Monitor regulatory landscape' },
]

export default function RiskManagementPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Risk Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Risk Category</TableHead>
                <TableHead>Probability</TableHead>
                <TableHead>Impact</TableHead>
                <TableHead>Mitigation Strategy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {riskData.map((risk) => (
                <TableRow key={risk.id}>
                  <TableCell>{risk.id}</TableCell>
                  <TableCell>{risk.category}</TableCell>
                  <TableCell>
                    <Badge variant={risk.probability === 'High' ? 'destructive' : risk.probability === 'Medium' ? 'warning' : 'default'}>
                      {risk.probability}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={risk.impact === 'Severe' ? 'destructive' : risk.impact === 'Moderate' ? 'warning' : 'default'}>
                      {risk.impact}
                    </Badge>
                  </TableCell>
                  <TableCell>{risk.mitigationStrategy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

