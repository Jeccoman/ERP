'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen"
    >
      <Card className="w-full max-w-md bg-white dark:bg-neutral-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-neutral-900 dark:text-white">Login to ekiliFlow</CardTitle>
          <CardDescription className="text-sm text-neutral-700 dark:text-neutral-400">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-neutral-800 dark:text-neutral-300">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-neutral-800 dark:text-neutral-300">Password</Label>
                <Input id="password" type="password" required className="border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400" />
              </div>
            </div>
            <Button
              className="w-full mt-6 bg-neutral-800 dark:bg-neutral-700 text-white hover:bg-neutral-700 dark:hover:bg-neutral-600"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/auth/register" className="text-sm text-primary hover:underline dark:text-neutral-300">
            Don't have an account? Sign up
          </Link>
          <Link href="/auth/reset-password" className="text-sm text-primary hover:underline dark:text-neutral-300">
            Forgot password?
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
