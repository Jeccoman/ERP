import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Orders() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Order Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Create Order</CardTitle>
          <CardDescription>Place a new order</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="order-id">Order ID</Label>
            <Input id="order-id" placeholder="Enter order ID" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="customer-name">Customer Name</Label>
            <Input id="customer-name" placeholder="Enter customer name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="order-date">Order Date</Label>
            <Input id="order-date" type="date" />
          </div>
          <Button>Create Order</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Order List</CardTitle>
          <CardDescription>Overview of current orders</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>ORD-001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>2023-07-01</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
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
