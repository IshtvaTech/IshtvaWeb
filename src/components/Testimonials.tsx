'use client';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, Tech Innovations",
      content: "Working with this team has transformed our business. Their expertise in software development and commitment to quality is truly exceptional.",
      image: "/testimonial1.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO, Digital Solutions",
      content: "The level of professionalism and technical expertise they bring to the table is outstanding. They've helped us modernize our entire infrastructure.",
      image: "/testimonial2.jpg"
    },
    {
      name: "Michael Brown",
      role: "Director, Future Systems",
      content: "They delivered our project on time and exceeded all our expectations. Their innovative approach to problem-solving sets them apart from others.",
      image: "/testimonial3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-blue-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
