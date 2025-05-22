// Networking & Mentorship (Updated Section)
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MailCheck, BookOpenCheck, Linkedin } from "lucide-react";

export default function NetworkingMentorship() {
  const resources = [
    {
      title: "Outreach Templates",
      description:
        "Pre-filled message templates for alumni, cold outreach, event follow-ups, and mentorship requests.",
      icon: MailCheck,
    },
    {
      title: "Mentorship Matching",
      description:
        "Optional Google Form to match students with volunteer mentors (alumni/professionals).",
      icon: Users,
    },
    {
      title: "Informational Interview Guide",
      description:
        "Step-by-step tips on booking, preparing, and following up. Includes sample questions and email templates.",
      icon: BookOpenCheck,
    },
    {
      title: "LinkedIn Playbook",
      description:
        "How to find mutual connections, comment effectively, and stand out on LinkedIn.",
      icon: Linkedin,
    },
  ];

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Networking & Mentorship</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((item, idx) => (
          <Card
            key={idx}
            className="bg-gray-800 text-white border border-gray-700 transition-transform hover:scale-[1.02]"
          >
            <CardHeader className="flex gap-3 items-center">
              <item.icon size={22} />
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
