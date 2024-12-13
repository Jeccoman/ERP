import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ForexTransfer() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Forex Transfer</h2>
      <Card>
        <CardHeader>
          <CardTitle>New Forex Transfer</CardTitle>
          <CardDescription>Initiate a new foreign exchange transfer</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="from-currency">From Currency</Label>
            <Select>
              <SelectTrigger id="from-currency">
                <SelectValue placeholder="Select source currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
                <SelectItem value="jpy">JPY</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="to-currency">To Currency</Label>
            <Select>
              <SelectTrigger id="to-currency">
                <SelectValue placeholder="Select target currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
                <SelectItem value="jpy">JPY</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" placeholder="Enter amount to transfer" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="exchange-rate">Exchange Rate</Label>
            <Input id="exchange-rate" type="number" placeholder="Enter exchange rate" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="transfer-date">Transfer Date</Label>
            <Input id="transfer-date" type="date" />
          </div>
          <Button>Initiate Transfer</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Forex Transfers</CardTitle>
          <CardDescription>List of recent foreign exchange transfers</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Exchange Rate</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-07-01</TableCell>
                <TableCell>USD</TableCell>
                <TableCell>EUR</TableCell>
                <TableCell>10,000</TableCell>
                <TableCell>0.92</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-07-05</TableCell>
                <TableCell>GBP</TableCell>
                <TableCell>JPY</TableCell>
                <TableCell>5,000</TableCell>
                <TableCell>183.25</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

