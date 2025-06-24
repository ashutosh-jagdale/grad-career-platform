import { Users, MailCheck, BookOpenCheck, Linkedin, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const networkingItems = [
  {
    title: "Outreach Templates",
    description: "Pre-filled templates for cold emails, alumni messages, and event follow-ups.",
    icon: MailCheck,
    links: [
      { name: "Cold Email Generator (Yesware)", url: "https://www.yesware.com/blog/cold-email-template/" },
      { name: "Cold Email Examples & Tips", url: "https://www.yesware.com/resources/18-proven-email-templates" },
    ],
  },
  {
    title: "Mentorship Matching",
    description: "Submit a form to be connected with alumni or industry mentors.",
    icon: Users,
    links: [
      { name: "How to Find a Mentor (WayUp)", url: "https://www.wayup.com/guide/community/can-find-mentor/" },
      { name: "Mentor Finder Tips (Forbes)", url: "https://www.forbes.com/sites/juliettehan/2024/02/08/three-new-ways-to-find-mentors-at-any-stage-of-your-career/" },
    ],
  },
  {
    title: "Informational Interview Guide",
    description: "How to request, prepare for, and follow up on career conversations—includes sample scripts.",
    icon: BookOpenCheck,
    links: [
      { name: "Informational Interview Guide (DeVry PDF)", url: "https://partner.devry.edu/content/dam/devry_edu/dvu/partners/d/corp/informational-interview-guide.pdf" },
    ],
  },
  {
    title: "LinkedIn Playbook",
    description: "How to optimize your profile, engage posts, and build recruiter-friendly brand.",
    icon: Linkedin,
    links: [
      { name: "LinkedIn Job Search Guide (PDF)", url: "https://opportunity.linkedin.com/content/dam/me/opportunity/en-us/pdf/LinkedIn-Job-Search-Guide.pdf" },
      { name: "Grow Professional Network (WayUp)", url: "https://www.wayup.com/guide/how-to-grow-your-professional-network/" },
    ],
  },
];

export default function NetworkingMentorship() {
  return (
    <div className="p-6 text-white max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold mb-2">🤝 Networking & Mentorship</h1>
      <p className="text-gray-400 max-w-2xl">
        Access templates, mentorship tips, and proven tools to build meaningful professional relationships.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {networkingItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl p-5 shadow hover:scale-[1.02] hover:bg-gray-700 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-blue-900">
                <item.icon size={22} className="text-blue-400" />
              </div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            <p className="text-sm text-gray-300 mb-3">{item.description}</p>
            <Accordion type="single" collapsible className="w-full text-sm">
              <AccordionItem value={`item-${idx}`}>
                <AccordionTrigger className="text-blue-400 hover:text-blue-300">Resources</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200 underline"
                        >
                          {link.name}
                          <ExternalLink size={14} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-inner">
        <blockquote className="text-gray-300 italic text-sm max-w-3xl mx-auto text-center">
          “Reaching out to one alum opened the door to my first internship. The template helped me get the tone just right.”
        </blockquote>
        <p className="text-xs text-right text-gray-500 mt-2 pr-6">— Graduate Student, IU Informatics</p>
      </div>

      <div className="mt-8 bg-blue-900 border border-blue-700 rounded-lg p-4 text-sm text-white text-center">
        Looking for personalized mentor matches? {" "}
        <a
          href="https://admin.typeform.com/signup?tid=9cd328e2-c3a4-400c-8ae2-a423f9bf71fa"
          className="underline text-blue-300 hover:text-blue-200"
          target="_blank"
        >
          Submit your request here →
        </a>
      </div>
    </div>
  );
}
