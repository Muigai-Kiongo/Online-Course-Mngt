
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Jane Doe",
    title: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "John Smith",
    title: "Backend Engineer",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Alice Johnson",
    title: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Michael Brown",
    title: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

export default function Team() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </motion.div>
          ))}
        </div>


      </div>
        <div className="bg-blue-800 text-white py-12 text-center m-14">
        <h2 className="text-3xl font-bold">Ready to start your coding journey?</h2>
        <p className="mt-2">Apply now and join the next cohort at School of Code.</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-800 font-semibold rounded hover:bg-gray-100 transition">
            Apply Now
        </button>
        </div>

        <form className="bg-gray-100 p-8 rounded-md max-w-md mx-auto mt-12 text-center">
        <h3 className="text-lg font-semibold">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">Get notified about new cohorts and events.</p>
        <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded mb-2 border" />
        <button className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700 transition">Subscribe</button>
        </form>
      
    </section>
  );
}
