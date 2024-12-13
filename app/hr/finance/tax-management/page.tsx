import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TaxManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Tax Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Record Tax Payment</CardTitle>
          <CardDescription>Log a new tax payment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tax-type">Tax Type</Label>
            <Select>
              <SelectTrigger id="tax-type">
                <SelectValue placeholder="Select tax type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income-tax">Income Tax</SelectItem>
                <SelectItem value="payroll-tax">Payroll Tax</SelectItem>
                <SelectItem value="sales-tax">Sales Tax</SelectItem>
                <SelectItem value="property-tax">Property Tax</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="payment-date">Payment Date</Label>
            <Input id="payment-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" placeholder="Enter payment amount" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tax-period">Tax Period</Label>
            <Input id="tax-period" placeholder="Enter tax period (e.g., Q2 2023)" />
          </div>
          <Button>Record Payment</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tax Payment History</CardTitle>
          <CardDescription>Overview of recent tax payments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tax Type</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Tax Period</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Income Tax</TableCell>
                <TableCell>2023-04-15</TableCell>
                <TableCell>$50,000</TableCell>
                <TableCell>Q1 2023</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Payroll Tax</TableCell>
                <TableCell>2023-06-30</TableCell>
                <TableCell>$25,000</TableCell>
                <TableCell>Q2 2023</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

