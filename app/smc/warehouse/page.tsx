import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const warehouseData = [
  { id: 1, name: 'Warehouse A', location: 'New York', capacity: '10,000 sqft' },
  { id: 2, name: 'Warehouse B', location: 'Los Angeles', capacity: '15,000 sqft' },
  { id: 3, name: 'Warehouse C', location: 'Chicago', capacity: '8,000 sqft' },
]

export default function WarehousePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Warehouse Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Warehouse List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Capacity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {warehouseData.map((warehouse) => (
                <TableRow key={warehouse.id}>
                  <TableCell>{warehouse.id}</TableCell>
                  <TableCell>{warehouse.name}</TableCell>
                  <TableCell>{warehouse.location}</TableCell>
                  <TableCell>{warehouse.capacity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

