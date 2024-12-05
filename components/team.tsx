import React from "react";

const teamMembers = [
  {
    name: "Yogabalajee V",
    role: "Graphic Designer",
    email: "yogabalajee@gmail.com",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFbq6CaQrb4Bw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707798549337?e=1738800000&v=beta&t=OpSrX9qk1P6Oj-FLi_cVjIB1J1ZUkitqwxR6l_4axrQ",
    linkedInUrl: "https://www.linkedin.com/in/yogabalajee",
    description:
      "Creates visually compelling designs, combining creativity and technical expertise to communicate ideas effectively and enhance brand identity.",
  },
  {
    name: "Santheesh A",
    role: "Full Stack Developer",
    email: "santheesh16@gmail.com",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEkGIy1jnaKXg/profile-displayphoto-shrink_800_800/B56ZNpOcgbGkAs-/0/1732637216286?e=1738800000&v=beta&t=X9rNXoxcei5uG3oxZ49nn88_GmG0apjrGTEdE_-itaU",
    linkedInUrl: "https://linkedin.com/in/santheesh16",
    description:
      "A dedicated full-stack developer with 2 years of experience, skilled in modern technologies, backend systems, and AI integrations, with a strong focus on continuous learning.",
  },
  {
    name: "Tamilvanan Gowran",
    role: "Cloud and DevOps Engineer",
    email: "tamilbecse139@gmail.com",
    image:
      "https://media.licdn.com/dms/image/v2/D5635AQHKHHtdw7g9sQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1730511954319?e=1733853600&v=beta&t=AsDcedyKMld2zTktICCvMfiPLyTZa6WG2uK6cicVpyM",
    linkedInUrl: "https://linkedin.com/in/gtamilvanan17",
    description:
      "Works closely with architecting application deployments and automations.",
  },
  {
    name: "Saran Kiruthic",
    role: "AI Developer",
    email: "saranabcd465@gmail.com",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGeRtaMug37Qw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732357990386?e=1738800000&v=beta&t=HYK4YiVwtbl1mAYrhMFSBoMYWzy_DGLgTJh29Qopa2U",
    linkedInUrl: "https://www.linkedin.com/in/saran-kirthic-490377191/",
    description:
      "Designs and implements intelligent systems, leveraging machine learning and AI technologies to solve complex problems and enhance user experiences.",
  },
  // Add more team members as needed
];

const TeamMemberCard = ({
  name,
  role,
  email,
  image,
  linkedInUrl,
  description,
}) => (
  <div className="flex items-center justify-center">
  <div className="relative w-[250px] h-[350px] bg-[#07182E] flex items-center justify-center overflow-hidden rounded-xl group">
    {/* Rotating Gradient Background */}
    <div className="absolute w-[100px] h-[130%] bg-gradient-to-b from-blue-500 to-pink-500 animate-spin-slow"></div>

    {/* Inner Overlay */}
    <div className="absolute inset-1 bg-[#07182E] rounded-[15px]"></div>

    {/* Profile Info */}
    <div className="relative z-10 flex flex-col items-center p-4">
      {/* Profile Image */}
      <div className="relative w-24 h-24 mb-4">
        <img
          className="w-full h-full rounded-full mx-auto transform transition-transform duration-300 hover:scale-110"
          src={image}
          alt={`Profile picture of ${name}`}
        />
      </div>

      {/* Name and Role */}
      <h3 className="text-xl font-medium text-white">{name}</h3>
      <p className="text-sm font-semibold text-gray-400">{role}</p>

      {/* Description on Hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 bg-opacity-95 opacity-0 group-hover:opacity-90 transition-opacity duration-500">
        <p className="text-2xl font-extrabold text-white drop-shadow-lg">
          About
        </p>
        <p className="text-sm text-center text-white leading-relaxed">
          {description || "Description not available."}
        </p>
        <a
          className="mt-3 text-sm font-semibold italic text-indigo-400 transition-colors duration-300 hover:underline"
          href={`${linkedInUrl}`}
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
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our Team
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We offer a comprehensive range of services to meet your needs and
          exceed your expectations.
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
