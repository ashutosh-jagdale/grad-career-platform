import { Users, MailCheck, BookOpenCheck, Linkedin, ExternalLink } from "lucide-react";

const networkingItems = [
  {
    title: "Outreach Templates",
    description: "Pre-filled templates for cold emails, alumni messages, and event follow-ups.",
    icon: MailCheck,
    links: [
      { name: "Alumni Outreach Doc", url: "/resources/outreach-templates.pdf" },
      { name: "Cold Email Generator", url: "https://www.coldemail.ai/" },
    ],
  },
  {
    title: "Mentorship Matching",
    description: "Submit a form to get matched with alumni or industry mentors volunteering their time.",
    icon: Users,
    links: [
      { name: "Mentor Match Form", url: "https://forms.gle/your-form-id" },
      { name: "Mentor Guidelines", url: "/resources/mentorship-guidelines.pdf" },
    ],
  },
  {
    title: "Informational Interview Guide",
    description: "How to request, prepare for, and follow up on career conversations. Sample scripts included.",
    icon: BookOpenCheck,
    links: [
      { name: "Interview Guide (PDF)", url: "/resources/informational-interview-guide.pdf" },
      { name: "Sample Questions", url: "https://career.berkeley.edu/Info/InfoInterview" },
    ],
  },
  {
    title: "LinkedIn Playbook",
    description: "A how-to on optimizing your profile, engaging posts, and building a recruiter-friendly brand.",
    icon: Linkedin,
    links: [
      { name: "Playbook (PDF)", url: "/resources/linkedin-playbook.pdf" },
      { name: "LinkedIn Profile Checklist", url: "https://www.themuse.com/advice/linkedin-profile-tips" },
    ],
  },
];

export default function NetworkingMentorship() {
  return (
    <div className="p-6 text-white max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-2">🤝 Networking & Mentorship</h1>
      <p className="text-gray-400 max-w-2xl">
        Access outreach templates, mentorship opportunities, and tools to build professional relationships that last.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {networkingItems.map((item, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-5 shadow hover:ring-2 hover:ring-blue-500 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <item.icon size={22} />
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

      {/* Optional: Add a quote block for inspiration */}
      <div className="mt-10 bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-inner">
        <blockquote className="text-gray-300 italic text-sm max-w-3xl mx-auto text-center">
          “Reaching out to one alum opened the door to my first internship. The template helped me get the tone just right.”
        </blockquote>
        <p className="text-xs text-right text-gray-500 mt-2 pr-6">— Graduate Student, IU Informatics</p>
      </div>
    </div>
  );
}
