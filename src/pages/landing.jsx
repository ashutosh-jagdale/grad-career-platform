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
import { motion } from "framer-motion";
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

const LandingPage = () => {
  const { user, isSignedIn, isLoaded } = useUser();  // ✅ add isLoaded
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleProtectedClick = (title) => {
    if (isSignedIn) {
      navigate(title);
    } else {
      const cleaned = title
        .replace("/", "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
      setPopupMessage(`Please Login or Sign Up to access ${cleaned}`);
      setShowPopup(true);
    }
  };

  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 px-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {isSignedIn && (
          <h2 className="text-white text-xl mb-2">
            Welcome{user?.firstName ? `, ${user.firstName}` : ""}!
          </h2>
        )}
        <h1 className="gradient-title font-extrabold text-4xl sm:text-6xl tracking-tight mb-4">
          Your Career Companion at IU
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Explore tailored resources to plan your career, build your resume,
          connect with mentors, and land your dream job.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card
              className="hover:shadow-2xl hover:scale-[1.02] transition-transform cursor-pointer"
              onClick={() => handleProtectedClick(section.link)}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-200 flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm">
                {section.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {!isSignedIn && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">FAQs</h2>
          <Accordion type="multiple">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl shadow-xl p-6 max-w-md text-center">
            <p className="mb-4">{popupMessage}</p>
            <SignInButton mode="modal">
              <Button className="mb-2">Sign In</Button>
            </SignInButton>
            <Button variant="ghost" onClick={() => setShowPopup(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default LandingPage;
