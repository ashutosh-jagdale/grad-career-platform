import { Globe, Users, Landmark, Gavel, BookOpen, ExternalLink } from "lucide-react";

const supportItems = [
  {
    title: "OPT/CPT & Visa Info",
    icon: <Globe size={20} className="text-blue-400" />,
    description: "Timelines, renewals, FAQs, and key links to navigate F-1 visa rules, CPT, and OPT applications.",
    links: [
      { name: "Study in the States", url: "https://studyinthestates.dhs.gov/" },
      { name: "IU OPT/CPT Portal", url: "https://ois.indiana.edu/employment/f-1/index.html" },
      { name: "USCIS Case Status", url: "https://egov.uscis.gov/casestatus" },
    ],
  },
  {
    title: "Alumni Experiences",
    icon: <Users size={20} className="text-green-400" />,
    description: "Real journeys of international grads—how they landed jobs, navigated immigration, and succeeded in U.S. work culture.",
    links: [
      { name: "Download Stories (PDF)", url: "/resources/alumni-stories.pdf" },
      { name: "LinkedIn Voices", url: "https://www.linkedin.com/search/results/content/?keywords=international%20student%20journey" },
    ],
  },
  {
    title: "Cultural Adjustment Resources",
    icon: <BookOpen size={20} className="text-yellow-400" />,
    description: "Guides to help you adapt to life and communication norms in the U.S., from small talk to classroom dynamics.",
    links: [
      { name: "Cultural Guide (PDF)", url: "/resources/cultural-guide.pdf" },
      { name: "Intro to U.S. Culture", url: "https://www.internationalstudent.com/study_usa/way-of-life/american-culture/" },
    ],
  },
  {
    title: "Campus & Legal Support",
    icon: <Gavel size={20} className="text-red-400" />,
    description: "Access legal clinics, tax software, ISS advising, and emergency help — all tailored for international students.",
    links: [
      { name: "IU OIS Portal", url: "https://ois.indiana.edu/" },
      { name: "Sprintax (Tax Filing)", url: "https://www.sprintax.com/" },
      { name: "Student Legal Services", url: "https://studentaffairs.indiana.edu/student-support/student-legal-services/" },
    ],
  },
];

export default function InternationalSupport() {
  return (
    <div className="p-6 text-white max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold mb-2">🌍 International Student Support</h1>
      <p className="text-gray-400 max-w-2xl">
        Tools and guidance to help you succeed as an international student — academically, professionally, and legally.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {supportItems.map((item, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-5 shadow-md border border-gray-700 hover:ring-2 hover:ring-blue-500 transition-all">
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

      {/* Optional Success Story or Quote */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-inner">
        <blockquote className="italic text-gray-300 text-sm max-w-3xl mx-auto text-center">
          “OIS helped me understand my OPT deadlines and even reviewed my documents before submission. I wouldn’t have done it without their support.”
        </blockquote>
        <p className="text-xs text-gray-500 mt-2 text-right pr-4">— Master's Student, IU Kelley School of Business</p>
      </div>
    </div>
  );
}
