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
      "Compare salaries across industries and cities using free online calculators.",
    links: [
      {
        name: "Glassdoor Salaries",
        url: "https://www.glassdoor.com/Salaries/index.htm",
      },
      { name: "Payscale", url: "https://www.payscale.com/" },
      {
        name: "Robert Half Salary Calculator",
        url: "https://www.roberthalf.com/us/en/insights/salary-guide/calculator",
      },
    ],
  },
  {
    title: "Negotiation Toolkit",
    icon: <FileText size={20} className="text-green-400" />,
    description:
      "Free negotiation checklists and frameworks adapted from trusted sources.",
    links: [
      {
        name: "Harvard PON Prep Guide",
        url:
          "https://www.pon.harvard.edu/daily/negotiation-skills-daily/negotiation-preparation-checklist/",
      },
      {
        name: "Black Swan One‑Sheet",
        url:
          "https://www.blackswanltd.com/download-the-negotiation-one-sheet",
      },
    ],
  },
  {
    title: "30–60–90 Day Success Plan",
    icon: <Briefcase size={20} className="text-blue-400" />,
    description:
      "Use structured templates to guide your first three months on the job.",
    links: [
      {
        name: "Indeed 30–60–90 Day Guide",
        url: "https://www.indeed.com/career-advice/starting-new-job/30-60-90-day-plan",
      },
      {
        name: "Michael Page 90‑Day Template (PDF)",
        url:
          "https://www.getcrg.com/wp-content/uploads/2021/01/90-Day-Plan-to-a-New-Job.pdf",
      },
    ],
  },
  {
    title: "Career Progress Planner",
    icon: <TrendingUp size={20} className="text-purple-400" />,
    description:
      "Templates to map your long-term growth, track progress and set next steps.",
    links: [
      {
        name: "Notion Career Development Templates",
        url:
          "https://www.notion.com/templates/category/free-career-development-plans-templates",
      },
      {
        name: "Smartsheet Career Development Plans",
        url:
          "https://www.smartsheet.com/content/employee-development-plan-templates",
      },
    ],
  },
];

export default function CareerOnboarding() {
  return (
    <div className="p-6 text-white max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold mb-2">🚀 Salary & Career Onboarding</h1>
      <p className="text-gray-400 max-w-2xl">
        Navigate salary research, negotiation tactics, workplace transitions,
        and long‑term growth with tools tailored for graduate career launches.
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

      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mt-6 shadow-inner">
        <blockquote className="text-sm italic text-gray-300 max-w-2xl mx-auto text-center">
          “I used the 30–60–90 plan template during my internship—my manager was
          really impressed with my structured goals and I secured a
          full‑time offer.”
        </blockquote>
        <p className="text-xs text-gray-500 mt-2 text-right pr-4">
          — Former Grad Intern, Tech Startup
        </p>
      </div>
    </div>
  );
}
