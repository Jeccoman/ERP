"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Printer, FileDown, Pencil, Trash2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import type { WorkflowDetails, WorkflowStep } from "./workflow"

interface WorkflowDetailsProps {
  workflowId: string
  details: WorkflowDetails
}

export function WorkflowDetails({ workflowId, details: initialDetails }: WorkflowDetailsProps) {
  const [details, setDetails] = useState(initialDetails)
  const [editingStep, setEditingStep] = useState<WorkflowStep | null>(null)

  const handleDeleteStep = (stepId: string) => {
    setDetails(prev => ({
      ...prev,
      steps: prev.steps.filter(step => step.id !== stepId)
    }))
  }

  const handleEditStep = (step: WorkflowStep) => {
    setDetails(prev => ({
      ...prev,
      steps: prev.steps.map(s => s.id === step.id ? step : s)
    }))
    setEditingStep(null)
  }

  return (
    <div className="rounded-lg border bg-white">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">
          Workflow Details in <span className="text-emerald-500">{workflowId}</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Make sure the first entry (With order 0) is the initiator of the process (CREATE)
        </p>
      </div>
      
      <div className="p-4">
        {/* Previous form fields remain unchanged */}
        
        <div className="flex items-center justify-between mb-4">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button variant="outline">
              <FileDown className="w-4 h-4 mr-2" />
              Export into CSV
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">#</TableHead>
                <TableHead>Workflow Id</TableHead>
                <TableHead>Workflow Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>User Group</TableHead>
                <TableHead>User Group Keyword</TableHead>
                <TableHead>Alternative Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Action</TableHead>
                <TableHead className="w-24">Manage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {details.steps.map((step, index) => (
                <TableRow key={step.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{step.workflowId}</TableCell>
                  <TableCell>{step.workflowOrder}</TableCell>
                  <TableCell>{step.status}</TableCell>
                  <TableCell>{step.userGroup}</TableCell>
                  <TableCell>{step.userGroupKeyword}</TableCell>
                  <TableCell>{step.alternativeName}</TableCell>
                  <TableCell>{step.description}</TableCell>
                  <TableCell>{step.action}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setEditingStep(step)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Workflow Step</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Status</label>
                              <Select
                                defaultValue={step.status}
                                onValueChange={(value) => 
                                  setEditingStep(prev => prev ? {...prev, status: value as 'ACTIVE' | 'INACTIVE'} : null)
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                                  <SelectItem value="INACTIVE">INACTIVE</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">User Group</label>
                              <Select
                                defaultValue={step.userGroupKeyword}
                                onValueChange={(value) => {
                                  const groups: Record<string, string> = {
                                    'FA': 'Project Accountant',
                                    'FM': 'Finance Manager',
                                    'CEO': 'Chief Executive Officer'
                                  }
                                  setEditingStep(prev => prev ? {
                                    ...prev,
                                    userGroupKeyword: value,
                                    userGroup: groups[value] || ''
                                  } : null)
                                }}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="FA">Project Accountant (FA)</SelectItem>
                                  <SelectItem value="FM">Finance Manager (FM)</SelectItem>
                                  <SelectItem value="CEO">Chief Executive Officer (CEO)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Description</label>
                              <Textarea
                                defaultValue={step.description}
                                onChange={(e) => 
                                  setEditingStep(prev => prev ? {...prev, description: e.target.value} : null)
                                }
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button 
                                onClick={() => editingStep && handleEditStep(editingStep)}
                              >
                                Save Changes
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Workflow Step</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this workflow step? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteStep(step.id)}
                              className="bg-red-500 hover:bg-red-600"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

