import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  index: number;
}

const TestimonialCard = ({ quote, author, position, company, image, index }: TestimonialProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-soft p-6 md:p-8 border border-gray-100"
    >
      <div className="mb-6">
        <svg className="w-8 h-8 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.722 6.065c-5.357 0-9.7 4.343-9.7 9.7v9.458c0 0.388 0.315 0.703 0.703 0.703h9.458c0.388 0 0.703-0.315 0.703-0.703v-9.458c0-0.388-0.315-0.703-0.703-0.703h-7.386c0.392-3.366 3.247-6 6.722-6 0.388 0 0.703-0.315 0.703-0.703v-1.594c0.2-0.388-0.113-0.7-0.5-0.7zM25.138 6.065c-5.357 0-9.7 4.343-9.7 9.7v9.458c0 0.388 0.315 0.703 0.703 0.703h9.458c0.388 0 0.703-0.315 0.703-0.703v-9.458c0-0.388-0.315-0.703-0.703-0.703h-7.386c0.392-3.366 3.247-6 6.722-6 0.388 0 0.703-0.315 0.703-0.703v-1.594c0.2-0.388-0.113-0.7-0.5-0.7z"></path>
        </svg>
        <p className="text-gray-700 mb-6">{quote}</p>
      </div>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SkillRevelation's School Management System has completely transformed how we handle student data and academic processes. The interface is intuitive and the support team is exceptional.",
      author: "Sarah Johnson",
      position: "Principal",
      company: "Westwood High School",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "The College Management System has streamlined our administration processes and improved communication between faculty and students. It's been a game-changer for our institution.",
      author: "Michael Chen",
      position: "Dean",
      company: "Pacific University",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "As an HR director, I've worked with many employee management systems, but SkillRevelation's solution stands out for its comprehensive features and user-friendly design.",
      author: "Emma Rodriguez",
      position: "HR Director",
      company: "Horizon Enterprises",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary-100 text-primary-800 font-medium text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear what our clients have to say about our ERP solutions.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;