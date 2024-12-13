'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white bg-opacity-90 dark:bg-neutral-900 dark:bg-opacity-90 backdrop-blur-sm transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-2xl font-bold text-neutral-900 dark:text-neutral-300">
            ekiliFlow
          </Link>
        </motion.div>
        <nav className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} className="transition-transform duration-300">
                <Link href={`#${item.toLowerCase()}`} className="text-neutral-600 hover:text-orange-500 dark:text-neutral-300 dark:hover:text-orange-500 transition-colors duration-300">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
          <Link href="/auth/login">
            <Button variant="outline" className="border-neutral-600 text-neutral-900 hover:bg-neutral-200 dark:border-neutral-300 dark:text-neutral-300 dark:hover:bg-neutral-700 transition-colors duration-300">
              Login
            </Button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors duration-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </nav>
      </div>
    </motion.header>
  )
}
