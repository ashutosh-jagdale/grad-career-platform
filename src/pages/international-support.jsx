import { Globe, Users, Gavel, BookOpen, ExternalLink } from "lucide-react";

const supportItems = [
  {
    title: "OPT/CPT & Visa Info",
    icon: <Globe size={20} className="text-blue-400" />,
    description: "Timelines, renewals, and official guidance for F‑1 visa, CPT, and OPT.",
    links: [
      { name: "USCIS Form I‑765 (OPT Filing)", url: "https://www.uscis.gov/i-765" },
      { name: "Study in the States (DHS)", url: "https://studyinthestates.dhs.gov/" },
      { name: "NAFSA Immigration Basics", url: "https://www.nafsa.org/immigration" },
    ],
  },
  {
    title: "Alumni Experiences",
    icon: <Users size={20} className="text-green-400" />,
    description:
      "Real stories from international grads about job hunting, visas, and U.S. life.",
    links: [
      { name: "NAFSA Stories", url: "https://www.nafsa.org/nafsa-stories" },
      { name: "Pro Bono Net (legal aid)", url: "https://www.probono.net/" },
    ],
  },
  {
    title: "Cultural Adjustment Resources",
    icon: <BookOpen size={20} className="text-yellow-400" />,
    description:
      "Guides on U.S. culture, norms, and life abroad for international students.",
    links: [
      {
        name: "Guide to American Culture (Penn State)",
        url:
          "https://harrisburg.psu.edu/international-students-office/guide-american-culture-etiquette",
      },
      {
        name: "Six Aspects of U.S. Culture",
        url:
          "https://www.studyusa.com/en/a/1223/six-aspects-of-u-s-culture-international-students-need-to-know",
      },
    ],
  },
  {
    title: "Campus & Legal Support",
    icon: <Gavel size={20} className="text-red-400" />,
    description:
      "Access to free legal aid, disability resources, and tax assistance.",
    links: [
      {
        name: "Indiana Legal Services (free civil aid)",
        url: "https://www.indianalegalservices.org/",
      },
      {
        name: "USA.gov: Find Legal Aid",
        url: "https://www.usa.gov/legal-aid",
      },
      {
        name: "DO‑IT Center (Disability Support)",
        url: "https://www.washington.edu/doit/",
      },
    ],
  },
];

export default function InternationalSupport() {
  return (
    <div className="p-6 text-white max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold mb-2">🌍 International Student Support</h1>
      <p className="text-gray-400 max-w-2xl">
        Public and broadly accessible resources to guide international students through
        academic, cultural, legal, and tax-related needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {supportItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl p-5 shadow-md border border-gray-700 hover:ring-2 hover:ring-blue-500 transition-all"
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

      <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-inner">
        <blockquote className="italic text-gray-300 text-sm max-w-3xl mx-auto text-center">
          “Indiana Legal Services and Pro Bono Net were lifesavers when navigating civil
          and immigration-related legal questions.”
        </blockquote>
        <p className="text-xs text-gray-500 mt-2 text-right pr-4">
          — International Graduate Testimonial
        </p>
      </div>
    </div>
  );
}
