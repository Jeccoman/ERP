'use client'

import { Menu } from 'lucide-react'
import { useSidebar } from '../contexts/sidebarContexts'
import { Button } from "@/components/ui/button"

const Header = () => {
  const { toggle } = useSidebar()

  return (
    <header className="bg-white shadow-md h-16 flex items-center justify-between px-4">
      <Button variant="ghost" size="icon" onClick={toggle} className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
      <div className="flex items-center">
        <span className="text-xl font-semibold text-gray-800">Axirz ERP</span>
      </div>
      <div className="flex items-center">
        {/* Add user profile, notifications, etc. here */}
      </div>
    </header>
  )
}

export default Header

