'use client';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions built to meet your specific business needs and challenges. We create scalable, secure, and efficient applications.",
      icon: "💻"
    },
    {
      title: "Cloud Solutions",
      description: "Comprehensive cloud infrastructure and migration services. We help you leverage the power of cloud computing for better scalability and efficiency.",
      icon: "☁️"
    },
    {
      title: "Digital Transformation",
      description: "Strategic consulting to modernize your business processes. We help you embrace digital innovation and stay ahead of the competition.",
      icon: "🚀"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices and platforms.",
      icon: "📱"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive software solutions to help your business thrive in the digital age
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
