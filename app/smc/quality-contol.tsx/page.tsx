import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const qualityControlData = [
  { id: 1, product: 'Product A', batchNumber: 'BA001', inspectionDate: '2023-06-15', status: 'Passed' },
  { id: 2, product: 'Product B', batchNumber: 'BB002', inspectionDate: '2023-06-14', status: 'Failed' },
  { id: 3, product: 'Product C', batchNumber: 'BC003', inspectionDate: '2023-06-13', status: 'Pending' },
]

export default function QualityControlPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Quality Control</h1>
      <Card>
        <CardHeader>
          <CardTitle>Quality Inspection Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Batch Number</TableHead>
                <TableHead>Inspection Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {qualityControlData.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.id}</TableCell>
                  <TableCell>{report.product}</TableCell>
                  <TableCell>{report.batchNumber}</TableCell>
                  <TableCell>{report.inspectionDate}</TableCell>
                  <TableCell>
                    <Badge variant={report.status === 'Passed' ? 'success' : report.status === 'Failed' ? 'destructive' : 'default'}>
                      {report.status}
                    </Badge>
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

