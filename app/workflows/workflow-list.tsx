import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Workflow } from "./workflow"

interface WorkflowListProps {
  workflows: Workflow[]
  onViewDetails: (workflow: Workflow) => void
}

export function WorkflowList({ workflows, onViewDetails }: WorkflowListProps) {
  return (
    <div className="rounded-lg border bg-white">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">List of Workflows</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">#</TableHead>
            <TableHead>Keyword</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="w-32">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workflows.map((workflow) => (
            <TableRow key={workflow.id}>
              <TableCell>{workflow.id}</TableCell>
              <TableCell className="font-mono">{workflow.keyword}</TableCell>
              <TableCell>{workflow.name}</TableCell>
              <TableCell>
                <Button
                  variant="default"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white w-full"
                  onClick={() => onViewDetails(workflow)}
                >
                  Workflow Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

