import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'CEO, TechCorp',
    content: 'ekiliFlow has revolutionized our business processes. It\'s an indispensable tool for our company.',
    avatar: '/placeholder.svg',
  },
  {
    name: 'Bob Smith',
    role: 'CFO, InnovateCo',
    content: 'The financial insights provided by ekiliFlow have been game-changing for our decision-making process.',
    avatar: '/placeholder.svg',
  },
  {
    name: 'Carol Davis',
    role: 'Operations Manager, GlobalTech',
    content: 'ekiliFlow\'s customizable workflows have significantly improved our operational efficiency.',
    avatar: '/placeholder.svg',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-white">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

