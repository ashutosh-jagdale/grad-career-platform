import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const paths = [
  {
    title: "🧪 Research Scientist",
    detail: "Explore PhD tracks, research fellowships, biotech roles, and science policy careers.",
    links: [
      { name: "NIH Career Center", url: "https://www.training.nih.gov/" },
      { name: "Science Careers", url: "https://www.science.org/careers" },
    ],
  },
  {
    title: "💻 Data Analyst",
    detail: "Entry into tech, finance, or healthcare via analytics, dashboards, and SQL-driven insights.",
    links: [
      { name: "AI Jobs Board", url: "https://ai-jobs.net/" },
      { name: "SQLBolt – Learn SQL", url: "https://sqlbolt.com/" },
    ],
  },
  {
    title: "🎓 Lecturer / EdTech",
    detail: "Teaching roles in universities, curriculum design, or educational technology startups.",
    links: [
      { name: "HigherEdJobs", url: "https://www.higheredjobs.com/" },
      { name: "EdSurge Jobs", url: "https://www.edsurge.com/jobs" },
      { name: "Chronicle of Higher Ed Jobs", url: "https://jobs.chronicle.com/" },
    ],
  },
  {
    title: "🧑‍💼 Product Manager",
    detail: "Own strategy in tech/startups — ideal for those with business + technical fluency.",
    links: [
      { name: "PM Interview Prep", url: "https://www.productalliance.com/" },
      { name: "PM Jobs", url: "https://wellfound.com" },
    ],
  },
];

export default function CareerPlanning() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="p-6 text-white max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">Career Planning Resources</h1>

      {/* Self-Assessment Tools */}
      <Card>
        <CardHeader>
          <CardTitle>🧠 Self-Assessment Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Discover your strengths, values, and personality:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-blue-400">
            <li><a href="https://www.16personalities.com/" target="_blank" rel="noopener noreferrer">MBTI (16Personalities)</a> — Understand personality type</li>
            <li><a href="https://www.truity.com/test/holland-code-career-test" target="_blank" rel="noopener noreferrer">Holland Code Quiz</a> — Interests & work preferences</li>
            <li><a href="https://www.viacharacter.org/" target="_blank" rel="noopener noreferrer">VIA Strengths Survey</a> — Personal strengths discovery</li>
            <li><a href="https://blueeq.com/" target="_blank" rel="noopener noreferrer">BlueEQ</a> — Build interview stories using emotional intelligence</li>
          </ul>
        </CardContent>
      </Card>

      {/* Career Path Explorer */}
      <Card>
        <CardHeader>
          <CardTitle>📊 Career Path Explorer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Browse career options and dive into curated links for each:</p>
          <div className="space-y-4">
            {paths.map((path, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-4 rounded hover:ring hover:ring-blue-400 cursor-pointer"
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                <h3 className="font-semibold">{path.title}</h3>
                {expanded === idx && (
                  <div className="mt-2 text-sm text-gray-300 space-y-1">
                    <p>{path.detail}</p>
                    <ul className="list-disc pl-5 text-blue-400 mt-2">
                      {path.links.map((link, i) => (
                        <li key={i}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Goal-Setting Worksheet */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Goal-Setting Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Use our worksheet to map your career goals:</p>
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-400">
            <li>Short-term: internships, certifications</li>
            <li>Mid-term: role types, industries</li>
            <li>Long-term: leadership, research, or independence</li>
          </ul>
          <Button asChild className="mt-3">
            <a
              href="https://docs.google.com/spreadsheets/d/1bcdw5xLZJt1OHOVZSeI26AxDKCXVePeO/edit?usp=sharing&ouid=113645497946083537524&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Goal Worksheet
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* LinkedIn Connection Templates */}
      <Card>
        <CardHeader>
          <CardTitle>💬 LinkedIn Messaging Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-sm text-gray-300">Use these pre-filled messages to connect with alumni or professionals:</p>
          <ul className="list-disc pl-5 text-sm text-blue-400 space-y-2">
            <li><span className="text-white">General Alumni:</span> “Hi [Name], I’m a recent Luddy grad exploring [field]. I’d love to connect and hear about your journey.”</li>
            <li><span className="text-white">Post-Event Follow-up:</span> “It was great meeting you at [event]. Would love to stay in touch and learn more about your work.”</li>
            <li><span className="text-white">Informational Request:</span> “Hi [Name], I’m curious about your role at [Company]. Would you be open to a quick chat sometime this week?”</li>
          </ul>
        </CardContent>
      </Card>

      {/* Career Advice Video (replace broken link) */}
      <Card>
        <CardHeader>
          <CardTitle>🎥 Watch: Planning Your Career in Grad School</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/BVH2XuDcIeY"
              title="Career Planning for Grad Students"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </CardContent>
      </Card>

      {/* Alumni Career Support */}
      <Card>
        <CardHeader>
          <CardTitle>🎓 Alumni Career Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">
            Recently graduated? You can continue getting help through the <a href="https://alumni.iu.edu/career-development/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">IU Alumni Association</a> — offering career coaching, job boards, and events exclusively for alumni.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}