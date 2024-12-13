import { Bell, User, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-800 hidden md:block">HR Management System</h1>
        <h1 className="text-lg font-bold text-gray-800 md:hidden">HR System</h1>
        <div className="flex items-center bg-gray-100 rounded-md">
          <Input type="text" placeholder="Search..." className="border-none bg-transparent" />
          <Search className="h-5 w-5 text-gray-500 mr-2" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}


