import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Code, 
  Smartphone, 
  Search, 
  TrendingUp, 
  Zap,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that create memorable user experiences and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Fast, scalable websites built with modern technologies and best practices.",
      features: ["React/Next.js", "Node.js", "Database Design", "API Integration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that users love to use.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that grow your business and reach your audience.",
      features: ["Social Media", "PPC Campaigns", "Email Marketing", "Analytics"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Brand Strategy",
      description: "Comprehensive branding solutions that make your business stand out from the competition.",
      features: ["Brand Identity", "Logo Design", "Brand Guidelines", "Marketing Materials"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital services to help your business 
            thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;