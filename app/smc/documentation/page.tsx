import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const documentationData = [
  { id: 1, title: 'Supply Chain Process Manual', lastUpdated: '2023-05-15', department: 'Operations' },
  { id: 2, title: 'Quality Control Guidelines', lastUpdated: '2023-04-20', department: 'Quality Assurance' },
  { id: 3, title: 'Supplier Onboarding Procedure', lastUpdated: '2023-06-01', department: 'Procurement' },
]

export default function DocumentationPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Documentation Center</h1>
      <Card>
        <CardHeader>
          <CardTitle>Supply Chain Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentationData.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>{doc.id}</TableCell>
                  <TableCell>{doc.title}</TableCell>
                  <TableCell>{doc.lastUpdated}</TableCell>
                  <TableCell>{doc.department}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View Document</Button>
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

