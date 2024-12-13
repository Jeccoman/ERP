import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type PayStub = {
  id: string
  payPeriod: string
  netPay: number
  payDate: string
  grossPay: number
  deductions: {
    type: string
    amount: number
  }[]
  taxes: {
    type: string
    amount: number
  }[]
}

const samplePayStubs: PayStub[] = [
  {
    id: "1",
    payPeriod: "June 1-15, 2023",
    netPay: 2500.00,
    payDate: "June 20, 2023",
    grossPay: 3000.00,
    deductions: [
      { type: "Health Insurance", amount: 150.00 },
      { type: "401(k)", amount: 150.00 },
    ],
    taxes: [
      { type: "Federal Income Tax", amount: 150.00 },
      { type: "State Income Tax", amount: 50.00 },
    ],
  },
  {
    id: "2",
    payPeriod: "May 16-31, 2023",
    netPay: 2500.00,
    payDate: "June 5, 2023",
    grossPay: 3000.00,
    deductions: [
      { type: "Health Insurance", amount: 150.00 },
      { type: "401(k)", amount: 150.00 },
    ],
    taxes: [
      { type: "Federal Income Tax", amount: 150.00 },
      { type: "State Income Tax", amount: 50.00 },
    ],
  },
]

export function PayStubDetails() {
  const [selectedPayStub, setSelectedPayStub] = useState<PayStub | null>(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pay Stubs</CardTitle>
        <CardDescription>View and download your pay stubs</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pay Period</TableHead>
              <TableHead>Net Pay</TableHead>
              <TableHead>Pay Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {samplePayStubs.map((payStub) => (
              <TableRow key={payStub.id}>
                <TableCell>{payStub.payPeriod}</TableCell>
                <TableCell>${payStub.netPay.toFixed(2)}</TableCell>
                <TableCell>{payStub.payDate}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedPayStub(payStub)}>View</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Pay Stub Details</DialogTitle>
                        <DialogDescription>Pay period: {selectedPayStub?.payPeriod}</DialogDescription>
                      </DialogHeader>
                      {selectedPayStub && (
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold">Earnings</h4>
                            <p>Gross Pay: ${selectedPayStub.grossPay.toFixed(2)}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Deductions</h4>
                            {selectedPayStub.deductions.map((deduction, index) => (
                              <p key={index}>{deduction.type}: ${deduction.amount.toFixed(2)}</p>
                            ))}
                          </div>
                          <div>
                            <h4 className="font-semibold">Taxes</h4>
                            {selectedPayStub.taxes.map((tax, index) => (
                              <p key={index}>{tax.type}: ${tax.amount.toFixed(2)}</p>
                            ))}
                          </div>
                          <div>
                            <h4 className="font-semibold">Net Pay</h4>
                            <p>${selectedPayStub.netPay.toFixed(2)}</p>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="sm" className="ml-2">Download</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

