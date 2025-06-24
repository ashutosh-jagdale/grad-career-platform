import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link, useNavigate } from "react-router-dom";
import {
  Briefcase,
  BookOpen,
  Users,
  Globe,
  FileText,
  Search,
  DollarSign,
} from "lucide-react";
import { useUser, SignInButton } from "@clerk/clerk-react";
import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Career Planning",
    description: "Self-assessments, career paths, and goal-setting tools.",
    link: "/self-assessment",
    icon: <Briefcase size={20} />,
  },
  {
    title: "Skill Development",
    description: "Technical & soft skill training, hands-on learning.",
    link: "/skills",
    icon: <BookOpen size={20} />,
  },
  {
    title: "Resume & Cover Letter Resources",
    description: "Templates, writing tips, examples, and follow-up scripts.",
    link: "/resume-tools",
    icon: <FileText size={20} />,
  },
  {
    title: "Job Search Tools",
    description: "Job boards, tracking, decoding job descriptions, and practice.",
    link: "/job-tools",
    icon: <Search size={20} />,
  },
  {
    title: "Networking & Mentorship",
    description: "Outreach tips, mentor guides, and alumni connections.",
    link: "/networking",
    icon: <Users size={20} />,
  },
  {
    title: "Salary & Career Onboarding",
    description: "Salary research, negotiation, workplace tips, and 90-day prep.",
    link: "/career-onboarding",
    icon: <DollarSign size={20} />,
  },
  {
    title: "International Student Support",
    description: "Visa info, OPT/CPT support, and cultural transition guidance.",
    link: "/international-support",
    icon: <Globe size={20} />,
  },
];

const faqs = [
  {
    question: "How do I know what career path suits me?",
    answer:
      "Explore our self-assessment tools and career path explorer to better understand your strengths and interests.",
  },
  {
    question: "Where can I find job listings and apply?",
    answer:
      "Use the Job Search Tools section for job boards, tracking systems, and application practice tips.",
  },
  {
    question: "What kind of resume support is available?",
    answer:
      "Our Resume & Cover Letter Resources section includes templates, writing tips, and follow-up scripts.",
  },
  {
    question: "Can this platform help with networking?",
    answer:
      "Yes! Learn how to connect with mentors, alumni, and professionals using our Networking & Mentorship section.",
  },
  {
    question: "I’m an international student—what help is available?",
    answer:
      "Visit our International Student Support section for visa guidance, OPT/CPT information, and cultural transition resources.",
  },
];

export default function LandingPage() {
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleProtectedClick = (title) => {
    if (isSignedIn) {
      navigate(title);
    } else {
      const cleaned = title.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      setPopupMessage(`Please Login or Sign Up to access ${cleaned}`);
      setShowPopup(true);
    }
  };

  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 px-4">
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
        {isSignedIn && <h2 className="text-white text-xl mb-2">Welcome{user?.firstName ? `, ${user.firstName}` : ""}!</h2>}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500 tracking-tight mb-2">
          Your Career Companion at IU
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Explore tailored resources to plan your career, build your resume, connect with mentors, and land your dream job.
        </p>
        <p className="text-sm italic text-yellow-400 mt-3">
          “Your career is your business. It’s time to manage it like a CEO.” — Dawn Graham
        </p>
      </motion.section>

      {isSignedIn && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="max-w-sm mx-auto bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-md p-5">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 3h2v14H3V3zm4 4h2v10H7V7zm4-2h2v12h-2V5zm4-3h2v15h-2V2z" />
            </svg>
            <h3 className="text-white text-lg font-semibold">Your Progress Snapshot</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">✅ Resume Builder: 70% complete</li>
            <li className="flex items-center gap-2">📤 Applications Sent: 3</li>
            <li className="flex items-center gap-2">📅 Interviews Scheduled: 1</li>
          </ul>
        </motion.div>
      )}

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-800 hover:to-gray-800 border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              onClick={() => handleProtectedClick(section.link)}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-200 flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm">
                <div className="italic text-gray-500 mb-1">Learn • Build • Grow</div>
                {section.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {!isSignedIn && (
        <div className="text-center bg-yellow-900 text-yellow-100 px-4 py-3 rounded-lg mb-6 max-w-xl mx-auto">
          🚀 Unlock full features by {" "}
          <SignInButton mode="modal">
            <span className="underline cursor-pointer">signing in</span>
          </SignInButton>{" "}
          to save your progress!
        </div>
      )}

      {!isSignedIn && (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4 text-center">FAQs</h2>
          <Accordion type="multiple">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }}>
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.section>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1c1f2b] text-white rounded-xl shadow-xl p-6 max-w-md text-center border border-gray-700">
            <p className="mb-4">{popupMessage}</p>
            <SignInButton mode="modal">
              <Button className="mb-2">Sign In</Button>
            </SignInButton>
            <Button variant="ghost" onClick={() => setShowPopup(false)}>Cancel</Button>
          </div>
        </div>
      )}
    </main>
  );
}
