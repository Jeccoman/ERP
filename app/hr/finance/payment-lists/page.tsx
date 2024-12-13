import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PaymentLists() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Payment Lists</h2>
      <Card>
        <CardHeader>
          <CardTitle>Create Payment List</CardTitle>
          <CardDescription>Generate a new payment list</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="list-name">List Name</Label>
            <Input id="list-name" placeholder="Enter payment list name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="payment-date">Payment Date</Label>
            <Input id="payment-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="payment-type">Payment Type</Label>
            <Select>
              <SelectTrigger id="payment-type">
                <SelectValue placeholder="Select payment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salary">Salary</SelectItem>
                <SelectItem value="bonus">Bonus</SelectItem>
                <SelectItem value="reimbursement">Reimbursement</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Generate Payment List</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Payment Lists</CardTitle>
          <CardDescription>Overview of recent payment lists</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>List Name</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Payment Type</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>June 2023 Salaries</TableCell>
                <TableCell>2023-06-30</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>$125,000</TableCell>
                <TableCell>Processed</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Q2 2023 Bonuses</TableCell>
                <TableCell>2023-07-15</TableCell>
                <TableCell>Bonus</TableCell>
                <TableCell>$50,000</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

