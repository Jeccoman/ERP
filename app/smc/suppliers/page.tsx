import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Suppliers() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Supplier Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Add Supplier</CardTitle>
          <CardDescription>Register a new supplier</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="supplier-name">Supplier Name</Label>
            <Input id="supplier-name" placeholder="Enter supplier name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-info">Contact Info</Label>
            <Input id="contact-info" placeholder="Enter contact information" />
          </div>
          <Button>Add Supplier</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Supplier List</CardTitle>
          <CardDescription>Overview of current suppliers</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier Name</TableHead>
                <TableHead>Contact Info</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>ABC Corp</TableCell>
                <TableCell>contact@abccorp.com</TableCell>
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
