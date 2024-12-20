import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const procurementData = [
  { id: 1, item: 'Raw Material A', supplier: 'Supplier X', quantity: 1000, status: 'Pending' },
  { id: 2, item: 'Component B', supplier: 'Supplier Y', quantity: 500, status: 'Ordered' },
  { id: 3, item: 'Packaging C', supplier: 'Supplier Z', quantity: 2000, status: 'Received' },
]

export default function ProcurementPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Procurement Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Purchase Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {procurementData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.item}</TableCell>
                  <TableCell>{order.supplier}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

