// src/pages/international.jsx
import { Globe, Users, Landmark, Gavel, BookOpen } from "lucide-react";
import { useState } from "react";

const supportItems = [
  {
    title: "OPT/CPT & Visa Info",
    icon: <Globe size={20} className="text-blue-400" />,
    description: "Breakdown of timelines, renewal tips, FAQs with USCIS/DSO links.",
    link: "https://studyinthestates.dhs.gov/",
  },
  {
    title: "Alumni Experiences",
    icon: <Users size={20} className="text-green-400" />,
    description: "Stories of how international students navigated job hunts, interviews, and visas.",
    link: "/resources/alumni-stories.pdf",
  },
  {
    title: "Cultural Adjustment Resources",
    icon: <BookOpen size={20} className="text-yellow-400" />,
    description: "Guides for adapting to workplace norms, networking, and communication in the U.S.",
    link: "/resources/cultural-guide.pdf",
  },
  {
    title: "Campus & Legal Support",
    icon: <Gavel size={20} className="text-red-400" />,
    description: "Contacts for legal clinics, ISS, and tax help portals like Sprintax.",
    link: "https://ois.indiana.edu/",
  },
];

export default function InternationalSupport() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">🌍 International Student Support</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {supportItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl shadow-md p-4 hover:ring-2 hover:ring-blue-500 transition-all"
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            <div className="flex items-center gap-3 cursor-pointer">
              {item.icon}
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            {expanded === idx && (
              <div className="mt-3 text-gray-300 text-sm">
                <p className="mb-2">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  Learn more
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
