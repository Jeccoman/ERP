import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function VehicleManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Vehicle Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Add New Vehicle</CardTitle>
          <CardDescription>Register a new vehicle in the system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="vehicle-make">Make</Label>
            <Input id="vehicle-make" placeholder="Enter vehicle make" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle-model">Model</Label>
            <Input id="vehicle-model" placeholder="Enter vehicle model" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle-year">Year</Label>
            <Input id="vehicle-year" type="number" placeholder="Enter vehicle year" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="license-plate">License Plate</Label>
            <Input id="license-plate" placeholder="Enter license plate number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle-status">Status</Label>
            <Select>
              <SelectTrigger id="vehicle-status">
                <SelectValue placeholder="Select vehicle status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="maintenance">In Maintenance</SelectItem>
                <SelectItem value="retired">Retired</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Add Vehicle</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Vehicle Fleet</CardTitle>
          <CardDescription>Overview of company vehicles</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Make</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>License Plate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Toyota</TableCell>
                <TableCell>Camry</TableCell>
                <TableCell>2022</TableCell>
                <TableCell>ABC 123</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ford</TableCell>
                <TableCell>F-150</TableCell>
                <TableCell>2021</TableCell>
                <TableCell>XYZ 789</TableCell>
                <TableCell>In Maintenance</TableCell>
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

