import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function EmployeeImprestBalance() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Employee Imprest Balance</h2>
      <Card>
        <CardHeader>
          <CardTitle>Update Imprest Balance</CardTitle>
          <CardDescription>Adjust an employee&apos;s imprest balance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="employee">Employee</Label>
            <Select>
              <SelectTrigger id="employee">
                <SelectValue placeholder="Select employee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john-doe">John Doe</SelectItem>
                <SelectItem value="jane-smith">Jane Smith</SelectItem>
                <SelectItem value="mike-johnson">Mike Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="transaction-type">Transaction Type</Label>
            <Select>
              <SelectTrigger id="transaction-type">
                <SelectValue placeholder="Select transaction type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="advance">Advance</SelectItem>
                <SelectItem value="settlement">Settlement</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" placeholder="Enter amount" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="transaction-date">Transaction Date</Label>
            <Input id="transaction-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Enter transaction description" />
          </div>
          <Button>Update Balance</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Employee Imprest Balances</CardTitle>
          <CardDescription>Current imprest balances for employees</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Current Balance</TableHead>
                <TableHead>Last Transaction Date</TableHead>
                <TableHead>Last Transaction Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>$500</TableCell>
                <TableCell>2023-07-01</TableCell>
                <TableCell>Advance</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View History</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>$250</TableCell>
                <TableCell>2023-06-28</TableCell>
                <TableCell>Settlement</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View History</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

