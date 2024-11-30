import React from "react";

const teamMembers = [
  {
    name: "Yogabalaji",
    role: "UI/UX Designer",
    address: "Chatakpur-3, Dhangadhi Kailali",
    phone: "+91 7904188021",
    email: "santheesh16@gmail.com",
    image: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
  },
  {
    name: "Santheesh A",
    role: "Full Stack Developer",
    address: "Chatakpur-3, Dhangadhi Kailali",
    phone: "+91 7904188021",
    email: "santheesh16@gmail.com",
    image: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
  },
  {
    name: "Tamilvanan",
    role: "DevOps Engineer",
    address: "Chatakpur-3, Dhangadhi Kailali",
    phone: "+91 7904188021",
    email: "santheesh16@gmail.com",
    image: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
  },
  {
    name: "Saran Kiruthic",
    role: "Data Scentiest",
    address: "Kathmandu, Nepal",
    phone: "+977 1234567890",
    email: "jane@example.com",
    image: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
  },
  // Add more team members as needed
];

const TeamMemberCard = ({ name, role, address, phone, email, image }) => (
  <div className="max-w-xs mx-auto">
    <div className="bg-white shadow-xl rounded-lg py-5">
      <div className="photo-wrapper p-10">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={image}
          alt={`Profile picture of ${name}`}
        />
      </div>
      
      <div className="p-2">
        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
        <div className="text-center text-gray-400 text-xs font-semibold">
          <p>{role}</p>
        </div>
        {/* <table className="text-xs my-3 mx-auto">
          <tbody>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
              <td className="px-2 py-2">{address || "Address not provided"}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
              <td className="px-2 py-2">{phone || "Phone not available"}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td className="px-2 py-2">{email || "Email not available"}</td>
            </tr>
          </tbody>
        </table> */}
        <div className="text-center my-3">
          <a
            className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
            href={`mailto:${email}`}
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  </div>
);

const TeamSection = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Team</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We offer a comprehensive range of services to meet your needs and exceed your expectations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;