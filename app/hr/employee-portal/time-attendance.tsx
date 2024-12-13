import { useState, useEffect, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { addDays, format, isAfter, isBefore, isSameDay, parseISO } from 'date-fns'

type WorkSchedule = {
  id: string
  day: string
  startTime: string
  endTime: string
}

type ClockEvent = {
  id: string
  type: 'in' | 'out'
  timestamp: Date
}

type LeaveRequest = {
  id: string
  startDate: Date
  endDate: Date
  type: string
  status: string
}

type Shift = {
  id: string
  date: Date
  startTime: string
  endTime: string
  actualStart?: Date
  actualEnd?: Date
  isOvertime: boolean
}

export function TimeAndAttendance() {
  const [workSchedule] = useState<WorkSchedule[]>([
    { id: '1', day: 'Monday', startTime: '09:00', endTime: '17:00' },
    { id: '2', day: 'Tuesday', startTime: '09:00', endTime: '17:00' },
    { id: '3', day: 'Wednesday', startTime: '09:00', endTime: '17:00' },
    { id: '4', day: 'Thursday', startTime: '09:00', endTime: '17:00' },
    { id: '5', day: 'Friday', startTime: '09:00', endTime: '17:00' },
  ])

  const [clockEvents, setClockEvents] = useState<ClockEvent[]>([])
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([])
  const [shifts, setShifts] = useState<Shift[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  useEffect(() => {
    // Generate shifts for the next 30 days based on work schedule
    const newShifts: Shift[] = []
    for (let i = 0; i < 30; i++) {
      const date = addDays(new Date(), i)
      const dayOfWeek = format(date, 'EEEE')
      const scheduleForDay = workSchedule.find(s => s.day === dayOfWeek)
      if (scheduleForDay) {
        newShifts.push({
          id: `shift-${i}`,
          date: date,
          startTime: scheduleForDay.startTime,
          endTime: scheduleForDay.endTime,
          isOvertime: false
        })
      }
    }
    setShifts(newShifts)
  }, [workSchedule])

  const handleClockInOut = () => {
    const now = new Date()
    const lastEvent = clockEvents[clockEvents.length - 1]
    
    if (lastEvent && lastEvent.type === 'in' && isSameDay(lastEvent.timestamp, now)) {
      // Clock out
      const newEvent: ClockEvent = {
        id: (clockEvents.length + 1).toString(),
        type: 'out',
        timestamp: now,
      }
      setClockEvents([...clockEvents, newEvent])
      
      // Update shift with actual end time and calculate overtime
      const todayShift = shifts.find(s => isSameDay(s.date, now))
      if (todayShift) {
        const scheduledEndTime = parseISO(`${format(now, 'yyyy-MM-dd')}T${todayShift.endTime}:00`)
        const updatedShift = {
          ...todayShift,
          actualEnd: now,
          isOvertime: isAfter(now, scheduledEndTime)
        }
        setShifts(shifts.map(s => s.id === updatedShift.id ? updatedShift : s))
      }
    } else if (!lastEvent || (lastEvent.type === 'out' && !isSameDay(lastEvent.timestamp, now))) {
      // Clock in
      const newEvent: ClockEvent = {
        id: (clockEvents.length + 1).toString(),
        type: 'in',
        timestamp: now,
      }
      setClockEvents([...clockEvents, newEvent])
      
      // Update shift with actual start time
      const todayShift = shifts.find(s => isSameDay(s.date, now))
      if (todayShift) {
        const updatedShift = {
          ...todayShift,
          actualStart: now
        }
        setShifts(shifts.map(s => s.id === updatedShift.id ? updatedShift : s))
      }
    } else {
      alert("You've already clocked in/out for today.")
    }
  }

  const handleAddLeaveRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const startDate = parseISO(formData.get('start-date') as string)
    const endDate = parseISO(formData.get('end-date') as string)
    const leaveType = formData.get('leave-type') as string

    // Validate dates
    if (isBefore(endDate, startDate)) {
      alert("End date cannot be before start date")
      return
    }

    // Check for conflicts with existing leave requests
    const hasConflict = leaveRequests.some(request => 
      (isSameDay(startDate, request.startDate) || isAfter(startDate, request.startDate)) &&
      (isSameDay(endDate, request.endDate) || isBefore(endDate, request.endDate))
    )

    if (hasConflict) {
      alert("This leave request conflicts with an existing request")
      return
    }

    const newRequest: LeaveRequest = {
      id: (leaveRequests.length + 1).toString(),
      startDate,
      endDate,
      type: leaveType,
      status: 'Pending',
    }
    setLeaveRequests([...leaveRequests, newRequest])
  }

  const getDateContent = (date: Date) => {
    const shift = shifts.find(s => isSameDay(s.date, date))
    const leaveRequest = leaveRequests.find(l => 
      (isSameDay(date, l.startDate) || isAfter(date, l.startDate)) &&
      (isSameDay(date, l.endDate) || isBefore(date, l.endDate))
    )

    if (leaveRequest) {
      return <div className="w-full h-full bg-blue-200 rounded-full"></div>
    } else if (shift) {
      return <div className="w-full h-full bg-green-200 rounded-full"></div>
    }

    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Time and Attendance</CardTitle>
        <CardDescription>Manage your work schedule, time tracking, and leave requests</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="schedule">
          <TabsList>
            <TabsTrigger value="schedule">Work Schedule</TabsTrigger>
            <TabsTrigger value="clock">Clock In/Out</TabsTrigger>
            <TabsTrigger value="leave">Leave Requests</TabsTrigger>
            <TabsTrigger value="shifts">Shifts & Overtime</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Day</TableHead>
                  <TableHead>Start Time</TableHead>
                  <TableHead>End Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workSchedule.map((schedule) => (
                  <TableRow key={schedule.id}>
                    <TableCell>{schedule.day}</TableCell>
                    <TableCell>{schedule.startTime}</TableCell>
                    <TableCell>{schedule.endTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="clock">
            <div className="space-y-4">
              <Button onClick={handleClockInOut}>
                {clockEvents[clockEvents.length - 1]?.type === 'in' ? 'Clock Out' : 'Clock In'}
              </Button>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clockEvents.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell>{event.type === 'in' ? 'Clock In' : 'Clock Out'}</TableCell>
                      <TableCell>{format(event.timestamp, 'yyyy-MM-dd HH:mm:ss')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="leave">
            <form onSubmit={handleAddLeaveRequest} className="space-y-4 mb-6">
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaveRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{format(request.startDate, 'yyyy-MM-dd')}</TableCell>
                    <TableCell>{format(request.endDate, 'yyyy-MM-dd')}</TableCell>
                    <TableCell>{request.type}</TableCell>
                    <TableCell>{request.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="shifts">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Scheduled Start</TableHead>
                  <TableHead>Scheduled End</TableHead>
                  <TableHead>Actual Start</TableHead>
                  <TableHead>Actual End</TableHead>
                  <TableHead>Overtime</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shifts.map((shift) => (
                  <TableRow key={shift.id}>
                    <TableCell>{format(shift.date, 'yyyy-MM-dd')}</TableCell>
                    <TableCell>{shift.startTime}</TableCell>
                    <TableCell>{shift.endTime}</TableCell>
                    <TableCell>{shift.actualStart ? format(shift.actualStart, 'HH:mm:ss') : '-'}</TableCell>
                    <TableCell>{shift.actualEnd ? format(shift.actualEnd, 'HH:mm:ss') : '-'}</TableCell>
                    <TableCell>{shift.isOvertime ? 'Yes' : 'No'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="calendar">
            <div className="flex flex-col items-center space-y-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                components={{
                  DayContent: (props: { children: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; date: Date }) => (
                    <div className="relative w-full h-full">
                      {props.children}
                      {getDateContent(props.date)}
                    </div>
                  ),
                }}
              />
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-200 rounded-full mr-2"></div>
                  <span>Scheduled Shift</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-200 rounded-full mr-2"></div>
                  <span>Leave</span>
                </div>
              </div>
              {selectedDate && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>View Details</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{format(selectedDate, 'MMMM d, yyyy')}</DialogTitle>
                      <DialogDescription>
                        Details for the selected date
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      {shifts.find(s => isSameDay(s.date, selectedDate)) && (
                        <div>
                          <h4 className="font-semibold">Scheduled Shift</h4>
                          <p>Start: {shifts.find(s => isSameDay(s.date, selectedDate))?.startTime}</p>
                          <p>End: {shifts.find(s => isSameDay(s.date, selectedDate))?.endTime}</p>
                        </div>
                      )}
                      {leaveRequests.find(l => 
                        (isSameDay(selectedDate, l.startDate) || isAfter(selectedDate, l.startDate)) &&
                        (isSameDay(selectedDate, l.endDate) || isBefore(selectedDate, l.endDate))
                      ) && (
                        <div>
                          <h4 className="font-semibold">Leave Request</h4>
                          <p>Type: {leaveRequests.find(l => 
                            (isSameDay(selectedDate, l.startDate) || isAfter(selectedDate, l.startDate)) &&
                            (isSameDay(selectedDate, l.endDate) || isBefore(selectedDate, l.endDate))
                          )?.type}</p>
                          <p>Status: {leaveRequests.find(l => 
                            (isSameDay(selectedDate, l.startDate) || isAfter(selectedDate, l.startDate)) &&
                            (isSameDay(selectedDate, l.endDate) || isBefore(selectedDate, l.endDate))
                          )?.status}</p>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

