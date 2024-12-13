import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function StaffTransfer() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Staff Transfer</h2>
      <Card>
        <CardHeader>
          <CardTitle>Initiate Transfer</CardTitle>
          <CardDescription>Transfer an employee to a new department or position</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="employee">Employee</Label>
            <Select>
              <SelectTrigger id="employee">
                <SelectValue placeholder="Select employee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john-doe">John Doe</SelectItem>
                <SelectItem value="jane-smith">Jane Smith</SelectItem>
                <SelectItem value="mike-johnson">Mike Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-department">New Department</Label>
            <Select>
              <SelectTrigger id="new-department">
                <SelectValue placeholder="Select new department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-position">New Position</Label>
            <Select>
              <SelectTrigger id="new-position">
                <SelectValue placeholder="Select new position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="supervisor">Supervisor</SelectItem>
                <SelectItem value="associate">Associate</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="transfer-date">Transfer Date</Label>
            <Input id="transfer-date" type="date" />
          </div>
          <Button>Initiate Transfer</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transfers</CardTitle>
          <CardDescription>List of recent staff transfers</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>From Department</TableHead>
                <TableHead>To Department</TableHead>
                <TableHead>From Position</TableHead>
                <TableHead>To Position</TableHead>
                <TableHead>Transfer Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>IT</TableCell>
                <TableCell>HR</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>HR Specialist</TableCell>
                <TableCell>2023-06-15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Finance</TableCell>
                <TableCell>IT</TableCell>
                <TableCell>Accountant</TableCell>
                <TableCell>IT Manager</TableCell>
                <TableCell>2023-06-01</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

