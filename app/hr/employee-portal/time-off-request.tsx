import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type TimeOffRequest = {
  id: string
  startDate: string
  endDate: string
  type: string
  status: string
  reason?: string
}

const sampleTimeOffRequests: TimeOffRequest[] = [
  { id: "1", startDate: "2023-07-01", endDate: "2023-07-05", type: "Vacation", status: "Approved", reason: "Summer vacation" },
  { id: "2", startDate: "2023-08-15", endDate: "2023-08-16", type: "Personal Leave", status: "Pending", reason: "Family event" },
]

export function TimeOffRequestDetails() {
  const [requests, setRequests] = useState<TimeOffRequest[]>(sampleTimeOffRequests)
  const [selectedRequest, setSelectedRequest] = useState<TimeOffRequest | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newRequest: TimeOffRequest = {
      id: (requests.length + 1).toString(),
      startDate: formData.get('start-date') as string,
      endDate: formData.get('end-date') as string,
      type: formData.get('leave-type') as string,
      status: "Pending",
      reason: formData.get('reason') as string,
    }
    setRequests([...requests, newRequest])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Time Off Requests</CardTitle>
        <CardDescription>Submit and view your time off requests</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-date">Start Date</Label>
              <Input id="start-date" name="start-date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date">End Date</Label>
              <Input id="end-date" name="end-date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="leave-type">Leave Type</Label>
              <Select name="leave-type" required>
                <SelectTrigger id="leave-type">
                  <SelectValue placeholder="Select leave type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vacation">Vacation</SelectItem>
                  <SelectItem value="sick">Sick Leave</SelectItem>
                  <SelectItem value="personal">Personal Leave</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Reason (Optional)</Label>
              <Input id="reason" name="reason" />
            </div>
          </div>
          <Button type="submit">Submit Request</Button>
        </form>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.startDate}</TableCell>
                <TableCell>{request.endDate}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedRequest(request)}>View</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Time Off Request Details</DialogTitle>
                        <DialogDescription>Request ID: {selectedRequest?.id}</DialogDescription>
                      </DialogHeader>
                      {selectedRequest && (
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold">Date Range</h4>
                            <p>{selectedRequest.startDate} to {selectedRequest.endDate}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Type</h4>
                            <p>{selectedRequest.type}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Status</h4>
                            <p>{selectedRequest.status}</p>
                          </div>
                          {selectedRequest.reason && (
                            <div>
                              <h4 className="font-semibold">Reason</h4>
                              <p>{selectedRequest.reason}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

