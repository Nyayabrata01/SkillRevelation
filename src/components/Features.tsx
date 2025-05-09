import { Shield, Clock, BarChart, Globe, Users, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
    >
      <div className="p-3 mb-4 bg-primary-50 rounded-lg w-14 h-14 flex items-center justify-center text-primary-700">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption and compliance with industry standards to protect sensitive information.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Real-time Updates',
      description: 'Get instant updates and notifications for critical activities and changes across your organization.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting tools with visualizations to track performance and make data-driven decisions.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Cloud-based Access',
      description: 'Access your management system from anywhere, on any device with our cloud-based infrastructure.',
    },
    {
      icon: <Users size={24} />,
      title: 'Multi-user Support',
      description: 'Role-based access control for different users with customizable permissions and workflows.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Customizable',
      description: 'Tailor the system to your specific needs with customizable fields, forms, and workflow processes.',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary-100 text-primary-800 font-medium text-sm"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful Features to Transform Your Operations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our ERP solutions come packed with features designed to streamline processes, boost productivity, and drive growth.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;