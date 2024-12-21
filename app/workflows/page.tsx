"use client"

import { useState } from "react"
import { WorkflowList } from "./workflow-list"
import { WorkflowDetails } from "./workflow-details"
import type { Workflow, WorkflowDetails as WorkflowDetailsType } from "./workflow"

// Sample data
const sampleWorkflows: Workflow[] = [
  { id: 1, keyword: "LEAVE_PLAN", name: "Annual Leave Plan" },
  { id: 2, keyword: "ANNUAL_PERFORMANCE_REVIEW", name: "Annual Performance Review" },
  { id: 3, keyword: "ANNUAL_TRAINING_CALENDAR", name: "Annual Training Calendar" },
  // ... more workflows
]

const sampleWorkflowDetails: WorkflowDetailsType = {
  id: "WHT_PAYMENT",
  workflowOrder: "1",
  status: "ACTIVE",
  userGroup: "Finance Manager",
  userGroupKeyword: "FM",
  action: "APPROVE",
  steps: [
    {
      id: "1",
      workflowId: "WHT_PAYMENT",
      workflowOrder: 0,
      status: "ACTIVE",
      userGroup: "Project Accountant",
      userGroupKeyword: "FA",
      action: "CREATE",
      description: "FA initiates the request"
    },
    {
      id: "2",
      workflowId: "WHT_PAYMENT",
      workflowOrder: 1,
      status: "ACTIVE",
      userGroup: "Finance Manager",
      userGroupKeyword: "FM",
      action: "VERIFY",
      description: "FAM approve the request"
    },
    {
      id: "3",
      workflowId: "WHT_PAYMENT",
      workflowOrder: 2,
      status: "ACTIVE",
      userGroup: "Chief Executive Officer",
      userGroupKeyword: "CEO",
      action: "AUTHORIZE",
      description: "CO approves the request"
    }
  ]
}

export default function Page() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-6">SYSTEM WORKFLOW</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        <WorkflowList
          workflows={sampleWorkflows}
          onViewDetails={setSelectedWorkflow}
        />
        {selectedWorkflow && (
          <WorkflowDetails
            workflowId={selectedWorkflow.keyword}
            details={sampleWorkflowDetails}
          />
        )}
      </div>
    </div>
  )
}

