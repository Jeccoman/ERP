import { motion } from 'framer-motion'
import { BarChartIcon as ChartBar, CreditCard, Users, Cog } from 'lucide-react'

const features = [
  {
    icon: ChartBar,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our powerful analytics tools.',
  },
  {
    icon: CreditCard,
    title: 'Seamless Transactions',
    description: 'Process payments and manage finances with ease.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Foster teamwork with our collaborative features.',
  },
  {
    icon: Cog,
    title: 'Customizable Workflows',
    description: 'Tailor processes to fit your unique business needs.',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-white">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary dark:text-primary-dark mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

