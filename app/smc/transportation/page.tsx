import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const shipmentData = [
  { id: 1, origin: 'Warehouse A', destination: 'Customer X', status: 'In Transit' },
  { id: 2, origin: 'Supplier B', destination: 'Warehouse C', status: 'Delivered' },
  { id: 3, origin: 'Warehouse B', destination: 'Customer Y', status: 'Scheduled' },
]

export default function TransportationPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Transportation Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Active Shipments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shipment ID</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipmentData.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell>{shipment.id}</TableCell>
                  <TableCell>{shipment.origin}</TableCell>
                  <TableCell>{shipment.destination}</TableCell>
                  <TableCell>{shipment.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

