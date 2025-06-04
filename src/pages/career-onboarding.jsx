import {
    Briefcase,
    DollarSign,
    FileText,
    TrendingUp,
    ExternalLink,
  } from "lucide-react";
  
  const onboardingItems = [
    {
      title: "Salary Research Tools",
      icon: <DollarSign size={20} className="text-yellow-400" />,
      description:
        "Compare salaries across industries and cities. Tools include Glassdoor, Levels.fyi, and PayScale.",
      links: [
        { name: "Levels.fyi", url: "https://www.levels.fyi/" },
        { name: "Glassdoor", url: "https://www.glassdoor.com/" },
        { name: "PayScale", url: "https://www.payscale.com/" },
      ],
    },
    {
      title: "Negotiation Toolkit",
      icon: <FileText size={20} className="text-green-400" />,
      description:
        "Email templates, scripts, and real scenarios to help you confidently handle offer negotiations.",
      links: [
        { name: "Negotiation Guide (PDF)", url: "/resources/negotiation-guide.pdf" },
        { name: "Ask For More – Book Summary", url: "https://www.amazon.com/dp/1984858253" },
      ],
    },
    {
      title: "90-Day Success Plan",
      icon: <Briefcase size={20} className="text-blue-400" />,
      description:
        "A practical checklist for your first 30/60/90 days at a new job to ensure a strong start.",
      links: [
        { name: "Download Plan (PDF)", url: "/resources/90day-plan.pdf" },
        { name: "Harvard Onboarding Guide", url: "https://hbr.org/2015/05/onboarding-is-a-make-or-break-moment-for-new-hires" },
      ],
    },
    {
      title: "Career Progress Planner",
      icon: <TrendingUp size={20} className="text-purple-400" />,
      description:
        "Plan skills, certifications, and internal moves with this long-term career progression worksheet.",
      links: [
        { name: "Progress Planner (PDF)", url: "/resources/career-progress-planner.pdf" },
        { name: "Skill Tracker (Google Sheet)", url: "https://docs.google.com/spreadsheets/d/skill-tracker" },
      ],
    },
  ];
  
  export default function CareerOnboarding() {
    return (
      <div className="p-6 text-white max-w-6xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold mb-2">🚀 Salary & Career Onboarding</h1>
        <p className="text-gray-400 max-w-2xl">
          Navigate salary research, negotiation tactics, workplace transitions, and long-term growth with tools tailored for graduate career launches.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {onboardingItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl shadow-md p-5 border border-gray-700 hover:ring-2 hover:ring-blue-500 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </div>
              <p className="text-sm text-gray-300 mb-3">{item.description}</p>
              <ul className="space-y-2 text-sm">
                {item.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 underline"
                    >
                      {link.name}
                      <ExternalLink size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        {/* Optional Add-on: Insight Box */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mt-6 shadow-inner">
          <blockquote className="text-sm italic text-gray-300 max-w-2xl mx-auto text-center">
            “During my first job, the 90-day plan helped me set weekly goals, impress my manager, and land a full-time conversion offer.”
          </blockquote>
          <p className="text-xs text-gray-500 mt-2 text-right pr-4">— Former Grad Intern, Salesforce</p>
        </div>
      </div>
    );
  }
  