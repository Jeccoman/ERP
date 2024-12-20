'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Truck, ShoppingCart, Users, Warehouse, TrendingUp, BarChart2, Settings, DollarSign, Clipboard, AlertTriangle, Zap, FileText, Trello, LayoutDashboard, Shield } from 'lucide-react'
import { useSidebar } from '../contexts/sidebarContexts'

const menuItems = [
  { name: 'Dashboard', icon: Box, href: '/' },
  { name: 'Inventory', icon: Box, href: '/inventory' },
  { name: 'Orders', icon: ShoppingCart, href: '/orders' },
  { name: 'Suppliers', icon: Users, href: '/suppliers' },
  { name: 'Warehouse', icon: Warehouse, href: '/warehouse' },
  { name: 'Transportation', icon: Truck, href: '/transportation' },
  { name: 'Forecasting', icon: TrendingUp, href: '/forecasting' },
  { name: 'Production', icon: Settings, href: '/production' },
  { name: 'Analytics', icon: BarChart2, href: '/analytics' },
  { name: 'Procurement', icon: DollarSign, href: '/procurement' },
  { name: 'Quality Control', icon: Clipboard, href: '/quality-control' },
  { name: 'Risk Management', icon: AlertTriangle, href: '/risk-management' },
  { name: 'Sustainability', icon: Zap, href: '/sustainability' },
  { name: 'Documentation', icon: FileText, href: '/documentation' },
  { name: 'Kanban', icon: Trello, href: '/kanban' },
  { name: 'Custom Dashboard', icon: LayoutDashboard, href: '/custom-dashboard' },
  { name: 'Admin Dashboard', icon: Shield, href: '/admin' },
]

const Sidebar = () => {
  const { isOpen } = useSidebar()
  const pathname = usePathname()

  return (
    <div className={`bg-gray-800 text-white h-screen ${isOpen ? 'w-64' : 'w-0 md:w-16'} transition-all duration-300 ease-in-out overflow-hidden flex flex-col`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className={`text-3xl uppercase ${isOpen ? 'block' : 'hidden md:block'}`}>
            {isOpen ? 'Axirz SCM' : 'A'}
          </h1>
        </div>
        <div className="flex-grow overflow-y-auto">
          <ul className="flex flex-col py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} 
                  className={`flex items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                    pathname === item.href ? 'text-white bg-gray-700' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className={`text-sm font-medium ${isOpen ? 'block' : 'hidden'}`}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

