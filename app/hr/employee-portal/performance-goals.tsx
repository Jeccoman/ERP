import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type Goal = {
  id: string
  title: string
  description: string
  targetDate: string
  status: 'Not Started' | 'In Progress' | 'Completed'
}

export function PerformanceGoals() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: '1', title: 'Complete Project X', description: 'Finish all tasks related to Project X', targetDate: '2023-12-31', status: 'In Progress' },
    { id: '2', title: 'Improve Customer Satisfaction', description: 'Increase customer satisfaction score by 10%', targetDate: '2023-09-30', status: 'Not Started' },
  ])

  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newGoal: Goal = {
      id: (goals.length + 1).toString(),
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      targetDate: formData.get('target-date') as string,
      status: 'Not Started',
    }
    setGoals([...goals, newGoal])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Goals</CardTitle>
        <CardDescription>Set and track your performance goals</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="title">Goal Title</Label>
            <Input id="title" name="title" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="target-date">Target Date</Label>
            <Input id="target-date" name="target-date" type="date" required />
          </div>
          <Button type="submit">Add Goal</Button>
        </form>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Target Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {goals.map((goal) => (
              <TableRow key={goal.id}>
                <TableCell>{goal.title}</TableCell>
                <TableCell>{goal.targetDate}</TableCell>
                <TableCell>{goal.status}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedGoal(goal)}>View</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Goal Details</DialogTitle>
                        <DialogDescription>Goal ID: {selectedGoal?.id}</DialogDescription>
                      </DialogHeader>
                      {selectedGoal && (
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold">Title</h4>
                            <p>{selectedGoal.title}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Description</h4>
                            <p>{selectedGoal.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Target Date</h4>
                            <p>{selectedGoal.targetDate}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Status</h4>
                            <p>{selectedGoal.status}</p>
                          </div>
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

