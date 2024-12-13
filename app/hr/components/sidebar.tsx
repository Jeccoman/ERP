'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, Users, Calendar, BarChart2, Settings, Briefcase, Clock, UserPlus, UserMinus, Award, FileText, UserCheck, UsersIcon, DollarSign, CreditCard, Truck, PieChart, BookOpen, Banknote, FileSpreadsheet, Building, RefreshCw, Menu, X, GraduationCap, UserPlus2, UserCog } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      <aside className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 overflow-y-auto`}>
        <nav className="space-y-2">
          <Link href="/hr" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Home className="inline-block mr-2 h-5 w-5" /> Dashboard
          </Link>
          <Link href="/hr/employees" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Users className="inline-block mr-2 h-5 w-5" /> Employees
          </Link>
          <Link href="/hr/employee-onboarding" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <UserPlus2 className="inline-block mr-2 h-5 w-5" /> Employees Onboarding
          </Link>
          <Link  href="/hr/employee-portal" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <UserCog className="inline-block mr-2 h-5 w-5" /> Employee Self-service
           </Link>
          <Link href="/hr/hr-configuration" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Settings className="inline-block mr-2 h-5 w-5" /> HR Configuration
          </Link>
          <Link href="/hr/staff-transfer" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Briefcase className="inline-block mr-2 h-5 w-5" /> Staff Transfer
          </Link>
          <Link href="/hr/timesheet-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Clock className="inline-block mr-2 h-5 w-5" /> Timesheet Management
          </Link>
          <Link href="/hr/manage-interns" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <UserPlus className="inline-block mr-2 h-5 w-5" /> Manage Interns
          </Link>
          <Link href="/hr/recruitment-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <UsersIcon className="inline-block mr-2 h-5 w-5" /> Recruitment Management
          </Link>
          <Link href="/hr/separation-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <UserMinus className="inline-block mr-2 h-5 w-5" /> Separation Management
          </Link>
          <Link href="/hr/performance-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Award className="inline-block mr-2 h-5 w-5" /> Performance Management
          </Link>
          <Link href="/hr/leave-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <GraduationCap className="inline-block mr-2 h-5 w-5" /> Training & Development
          </Link>
          <Link href="/hr/leave-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Calendar className="inline-block mr-2 h-5 w-5" /> Leave Management
          </Link>
          <Link href="/hr/delegations" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <UserCheck className="inline-block mr-2 h-5 w-5" /> Delegations
          </Link>
          <Link href="/hr/committee-settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <FileText className="inline-block mr-2 h-5 w-5" /> Committee Settings
          </Link>

          {/* Finance Section */}
          <div className="pt-4">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Finance
            </h3>
          </div>
          <Link href="/finance" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <DollarSign className="inline-block mr-2 h-5 w-5" /> Finance Dashboard
          </Link>
          <Link href="/finance/budget" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <PieChart className="inline-block mr-2 h-5 w-5" /> Budget
          </Link>
          <Link href="/finance/imprest-reimbursement" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <CreditCard className="inline-block mr-2 h-5 w-5" /> Imprest Reimbursement
          </Link>
          <Link href="/finance/payment-lists" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <FileSpreadsheet className="inline-block mr-2 h-5 w-5" /> Payment Lists
          </Link>
          <Link href="/finance/vehicle-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Truck className="inline-block mr-2 h-5 w-5" /> Vehicle Management
          </Link>
          <Link href="/finance/income-capturing" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Banknote className="inline-block mr-2 h-5 w-5" /> Income Capturing
          </Link>
          <Link href="/finance/general-ledger" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <BookOpen className="inline-block mr-2 h-5 w-5" /> General Ledger
          </Link>
          <Link href="/finance/asset-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Building className="inline-block mr-2 h-5 w-5" /> Asset Management
          </Link>
          <Link href="/finance/tax-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <FileText className="inline-block mr-2 h-5 w-5" /> Tax Management
          </Link>
          <Link href="/finance/payment-vouchers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <FileText className="inline-block mr-2 h-5 w-5" /> Payment Vouchers
          </Link>
          <Link href="/finance/petty-cash-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <DollarSign className="inline-block mr-2 h-5 w-5" /> Petty Cash Management
          </Link>
          <Link href="/finance/financial-reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <BarChart2 className="inline-block mr-2 h-5 w-5" /> Financial Reports
          </Link>
          <Link href="/finance/financial-settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Settings className="inline-block mr-2 h-5 w-5" /> Financial Settings
          </Link>
          <Link href="/finance/forex-transfer" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <RefreshCw className="inline-block mr-2 h-5 w-5" /> Forex Transfer
          </Link>
          <Link href="/finance/employee-imprest-balance" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Users className="inline-block mr-2 h-5 w-5" /> Employee Imprest Balance
          </Link>
        </nav>
      </aside>
    </>
  )
}

