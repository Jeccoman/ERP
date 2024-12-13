import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PettyCashManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Petty Cash Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Record Petty Cash Transaction</CardTitle>
          <CardDescription>Log a new petty cash transaction</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="transaction-type">Transaction Type</Label>
            <Select>
              <SelectTrigger id="transaction-type">
                <SelectValue placeholder="Select transaction type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="disbursement">Disbursement</SelectItem>
                <SelectItem value="replenishment">Replenishment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" placeholder="Enter transaction amount" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="transaction-date">Transaction Date</Label>
            <Input id="transaction-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="office-supplies">Office Supplies</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="meals">Meals</SelectItem>
                <SelectItem value="miscellaneous">Miscellaneous</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter transaction description" />
          </div>
          <Button>Record Transaction</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Petty Cash Transactions</CardTitle>
          <CardDescription>Recent petty cash transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-07-01</TableCell>
                <TableCell>Disbursement</TableCell>
                <TableCell>$50</TableCell>
                <TableCell>Office Supplies</TableCell>
                <TableCell>Printer paper</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-07-05</TableCell>
                <TableCell>Replenishment</TableCell>
                <TableCell>$500</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Monthly replenishment</TableCell>
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

