use client

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io()

const [orderData, setOrderData] = useState([
  { id: 1, customer: 'Company A', status: 'Shipped', total: 1000 },
  { id: 2, customer: 'Company B', status: 'Processing', total: 1500 },
  { id: 3, customer: 'Company C', status: 'Delivered', total: 750 },
])

export default function OrdersPage() {
  useEffect(() => {
    const updatedMetrics = {
      orders: orderData.length
    }
    socket.emit('updateMetrics', updatedMetrics)
  }, [orderData])
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Order Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>${order.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

