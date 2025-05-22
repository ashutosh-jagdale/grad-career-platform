// src/pages/career-onboarding.jsx
import { Briefcase, DollarSign, FileText, TrendingUp } from "lucide-react";
import { useState } from "react";

const onboardingItems = [
  {
    title: "Salary Research Tools",
    icon: <DollarSign size={20} className="text-yellow-400" />,
    description:
      "Compare salaries across industries and cities. Tools include Glassdoor, Levels.fyi, and PayScale.",
    link: "https://www.levels.fyi/",
  },
  {
    title: "Negotiation Toolkit",
    icon: <FileText size={20} className="text-green-400" />,
    description:
      "Email templates, response scripts, and real scenarios to boost confidence in offer negotiations.",
    link: "/resources/negotiation-guide.pdf",
  },
  {
    title: "90-Day Success Plan",
    icon: <Briefcase size={20} className="text-blue-400" />,
    description:
      "Checklist of what to do in your first 30/60/90 days to ramp up efficiently.",
    link: "/resources/90day-plan.pdf",
  },
  {
    title: "Career Progress Planner",
    icon: <TrendingUp size={20} className="text-purple-400" />,
    description:
      "Worksheet to plan long-term skills, certifications, and internal mobility.",
    link: "/resources/career-progress-planner.pdf",
  },
];

export default function CareerOnboarding() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">🚀 Salary & Career Onboarding</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {onboardingItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl shadow-md p-4 hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer"
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            <div className="flex items-center gap-3">
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
