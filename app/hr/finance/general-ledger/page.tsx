import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function GeneralLedger() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">General Ledger</h2>
      <Card>
        <CardHeader>
          <CardTitle>Add Journal Entry</CardTitle>
          <CardDescription>Record a new journal entry in the general ledger</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="entry-date">Date</Label>
            <Input id="entry-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="account">Account</Label>
            <Select>
              <SelectTrigger id="account">
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="accounts-receivable">Accounts Receivable</SelectItem>
                <SelectItem value="inventory">Inventory</SelectItem>
                <SelectItem value="accounts-payable">Accounts Payable</SelectItem>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="expenses">Expenses</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="debit">Debit Amount</Label>
            <Input id="debit" type="number" placeholder="Enter debit amount" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="credit">Credit Amount</Label>
            <Input id="credit" type="number" placeholder="Enter credit amount" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Enter description" />
          </div>
          <Button>Add Journal Entry</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Journal Entries</CardTitle>
          <CardDescription>Overview of recent general ledger entries</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Account</TableHead>
                <TableHead>Debit</TableHead>
                <TableHead>Credit</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-06-30</TableCell>
                <TableCell>Cash</TableCell>
                <TableCell>$5,000</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Client payment received</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-30</TableCell>
                <TableCell>Accounts Receivable</TableCell>
                <TableCell>-</TableCell>
                <TableCell>$5,000</TableCell>
                <TableCell>Client payment received</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

