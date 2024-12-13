import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function FinancialReports() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Financial Reports</h2>
      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
          <CardDescription>Select a report type to generate</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income-statement">Income Statement</SelectItem>
                <SelectItem value="balance-sheet">Balance Sheet</SelectItem>
                <SelectItem value="cash-flow">Cash Flow Statement</SelectItem>
                <SelectItem value="budget-variance">Budget Variance Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Generate Report</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>List of recently generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Type</TableHead>
                <TableHead>Generated Date</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Income Statement</TableCell>
                <TableCell>2023-07-01</TableCell>
                <TableCell>Q2 2023</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                  <Button variant="outline" size="sm" className="ml-2">Download</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Balance Sheet</TableCell>
                <TableCell>2023-07-01</TableCell>
                <TableCell>As of June 30, 2023</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                  <Button variant="outline" size="sm" className="ml-2">Download</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

