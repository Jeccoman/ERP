'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      {/* SVG Background with Gradient */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF4500" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient1)"
          fillOpacity="1"
          d="M0,320L48,309.3C96,299,192,277,288,240C384,203,480,149,576,122.7C672,96,768,96,864,128C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,224L1440,203L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,32C768,64,672,128,576,160C480,192,384,224,288,213.3C192,203,96,160,48,122.7L0,85L0,320Z"
        ></path>
      </svg>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-300 dark:to-red-500">
            Welcome to <span className="text-neutral-700 dark:text-neutral-300">ekiliFlow</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-700 dark:text-neutral-400">
            Streamline Your Business with Our Powerful ERP Solution
          </p>
          <Button
            size="lg"
            className="bg-neutral-800 dark:bg-neutral-700 text-white hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-all ease-in-out duration-300"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
