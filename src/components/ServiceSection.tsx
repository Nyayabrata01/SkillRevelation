import { BookOpen, GraduationCap, Users, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  features: string[];
  index: number;
}

const ServiceCard = ({ id, title, description, image, icon, features, index }: ServiceCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-soft overflow-hidden"
    >
      <div className="w-full md:w-2/5 h-64 md:h-auto">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-3/5 p-6 md:p-8">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-primary-100 text-primary-700 mr-3">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg className="w-5 h-5 text-success-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact"
          className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

const ServiceSection = () => {
  const services: Omit<ServiceCardProps, 'index'>[] = [
    {
      id: 'school',
      title: 'School Management System',
      description: 'Comprehensive solution for managing school operations, student records, and academic activities.',
      image: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <BookOpen size={24} />,
      features: [
        'Student Information Management',
        'Attendance Tracking',
        'Grade Management',
        'Parent Communication Portal',
        'Timetable Scheduling',
      ],
    },
    {
      id: 'college',
      title: 'College Management System',
      description: 'Advanced platform for higher education institutions to streamline administration and enhance learning.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <GraduationCap size={24} />,
      features: [
        'Course Management',
        'Faculty Information System',
        'Examination Management',
        'Library Management',
        'Alumni Network Portal',
      ],
    },
    {
      id: 'employee',
      title: 'Employee Management System',
      description: 'Complete solution for HR departments to manage employee information, attendance, and performance.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Users size={24} />,
      features: [
        'Employee Onboarding',
        'Time & Attendance Tracking',
        'Performance Evaluation',
        'Leave Management',
        'Payroll Integration',
      ],
    },
    {
      id: 'skills',
      title: 'Skill Development Training System',
      description: 'Interactive platform for delivering skill-based training programs and tracking learner progress.',
      image: 'https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Laptop size={24} />,
      features: [
        'Course Content Management',
        'Interactive Learning Modules',
        'Progress Tracking',
        'Certification Generation',
        'Skill Assessment Tools',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Management Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our comprehensive suite of ERP solutions designed to transform your operations and drive efficiency.
          </motion.p>
        </div>
        
        <div className="space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;