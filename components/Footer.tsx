'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary dark:text-primary-dark">ekiliFlow</h3>
            <p className="text-neutral-400">
              Empowering businesses with cutting-edge ERP solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link href={`#${item.toLowerCase()}`} className="text-neutral-400 hover:text-primary dark:hover:text-primary-dark">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link href="#" className="text-neutral-400 hover:text-primary dark:hover:text-primary-dark">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-neutral-400 mb-4">Stay updated with our latest features and releases.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-neutral-800 dark:bg-neutral-700 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary dark:bg-primary-dark text-white px-4 py-2 rounded-r-md hover:bg-primary-dark dark:hover:bg-primary transition duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-400">
            © {new Date().getFullYear()} ekiliFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

