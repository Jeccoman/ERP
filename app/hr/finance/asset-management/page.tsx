import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AssetManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Asset Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Add New Asset</CardTitle>
          <CardDescription>Register a new asset in the system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="asset-name">Asset Name</Label>
            <Input id="asset-name" placeholder="Enter asset name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="asset-type">Asset Type</Label>
            <Select>
              <SelectTrigger id="asset-type">
                <SelectValue placeholder="Select asset type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="equipment">Equipment</SelectItem>
                <SelectItem value="vehicle">Vehicle</SelectItem>
                <SelectItem value="building">Building</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="intangible">Intangible Asset</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="purchase-date">Purchase Date</Label>
            <Input id="purchase-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="purchase-cost">Purchase Cost</Label>
            <Input id="purchase-cost" type="number" placeholder="Enter purchase cost" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expected-life">Expected Life (years)</Label>
            <Input id="expected-life" type="number" placeholder="Enter expected life in years" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="asset-description">Description</Label>
            <Textarea id="asset-description" placeholder="Enter asset description" />
          </div>
          <Button>Add Asset</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Asset Inventory</CardTitle>
          <CardDescription>Overview of company assets</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Purchase Date</TableHead>
                <TableHead>Purchase Cost</TableHead>
                <TableHead>Current Value</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Office Computer</TableCell>
                <TableCell>Equipment</TableCell>
                <TableCell>2022-01-15</TableCell>
                <TableCell>$1,200</TableCell>
                <TableCell>$900</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Company Car</TableCell>
                <TableCell>Vehicle</TableCell>
                <TableCell>2021-06-01</TableCell>
                <TableCell>$25,000</TableCell>
                <TableCell>$20,000</TableCell>
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

