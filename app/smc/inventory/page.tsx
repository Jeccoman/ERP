import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Inventory() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Inventory Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Add Inventory Item</CardTitle>
          <CardDescription>Register a new inventory item</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="item-name">Item Name</Label>
            <Input id="item-name" placeholder="Enter item name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" type="number" placeholder="Enter quantity" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter storage location" />
          </div>
          <Button>Add Item</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Inventory List</CardTitle>
          <CardDescription>Overview of current inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Item A</TableCell>
                <TableCell>100</TableCell>
                <TableCell>Warehouse 1</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
