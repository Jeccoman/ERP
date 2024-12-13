import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CommitteeSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Committee Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>Create New Committee</CardTitle>
          <CardDescription>Set up a new committee in the organization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="committee-name">Committee Name</Label>
            <Input id="committee-name" placeholder="Enter committee name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="committee-purpose">Purpose</Label>
            <Textarea id="committee-purpose" placeholder="Enter committee purpose" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="committee-chair">Committee Chair</Label>
            <Select>
              <SelectTrigger id="committee-chair">
                <SelectValue placeholder="Select committee chair" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john-doe">John Doe</SelectItem>
                <SelectItem value="jane-smith">Jane Smith</SelectItem>
                <SelectItem value="mike-johnson">Mike Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Create Committee</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Existing Committees</CardTitle>
          <CardDescription>List of current committees</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Committee Name</TableHead>
                <TableHead>Chair</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Ethics Committee</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>5</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Safety Committee</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>7</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

