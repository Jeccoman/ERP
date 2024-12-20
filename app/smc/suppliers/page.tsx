import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const supplierData = [
  { id: 1, name: 'Supplier A', rating: 4.5, category: 'Electronics' },
  { id: 2, name: 'Supplier B', rating: 4.2, category: 'Textiles' },
  { id: 3, name: 'Supplier C', rating: 4.8, category: 'Raw Materials' },
]

export default function SuppliersPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Supplier Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Supplier List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {supplierData.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell>{supplier.id}</TableCell>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>{supplier.rating}</TableCell>
                  <TableCell>{supplier.category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}


