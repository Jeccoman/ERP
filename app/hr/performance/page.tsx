import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const performanceReviews = [
  { id: 1, employee: "John Doe", reviewer: "Jane Smith", date: "2023-06-15", overallRating: "Excellent" },
  { id: 2, employee: "Jane Smith", reviewer: "Mike Johnson", date: "2023-06-10", overallRating: "Good" },
  { id: 3, employee: "Mike Johnson", reviewer: "John Doe", date: "2023-06-05", overallRating: "Meets Expectations" },
  // Add more performance review data as needed
]

export default function PerformanceReviews() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Performance Reviews</h2>
        <Button>Create New Review</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Reviewer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Overall Rating</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {performanceReviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell>{review.employee}</TableCell>
              <TableCell>{review.reviewer}</TableCell>
              <TableCell>{review.date}</TableCell>
              <TableCell>{review.overallRating}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

