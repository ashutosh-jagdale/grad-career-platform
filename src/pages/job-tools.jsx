import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Search, ClipboardList, Brain } from "lucide-react";
import { useState } from "react";

export default function JobTools() {
  const [description, setDescription] = useState("");
  const [decoded, setDecoded] = useState([]);

  const knownSkills = [
    "Python", "JavaScript", "React", "Node.js", "SQL", "MongoDB", "AWS", "Java", "C++",
    "Git", "Docker", "Kubernetes", "HTML", "CSS", "TypeScript", "Agile", "Scrum",
    "Communication", "Teamwork", "Problem-solving", "Leadership"
  ];

  const extractSkills = () => {
    const text = description.toLowerCase();
    const matched = knownSkills.filter(skill =>
      text.includes(skill.toLowerCase())
    );
    setDecoded(matched);
  };

  return (
    <div className="space-y-10 p-6 text-white max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">🧰 Job Search Tools</h1>
        <p className="text-gray-400 text-sm">Use these tools to find jobs, decode descriptions, and prepare effectively.</p>
      </div>

      {/* Job Board Aggregator */}
      <Card className="bg-gray-800 text-white shadow-md">
        <CardHeader className="flex gap-2 items-center border-b border-gray-700">
          <Search size={20} />
          <CardTitle className="text-lg">Job Board Aggregator</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Browse job boards tailored to your industry:</p>
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-300 space-y-1">
            <li><a href="https://www.indeed.com/" target="_blank" className="text-blue-400 underline">Indeed</a> – General jobs</li>
            <li><a href="https://www.linkedin.com/jobs/" target="_blank" className="text-blue-400 underline">LinkedIn</a> – Tech, Business</li>
            <li><a href="https://usajobs.gov/" target="_blank" className="text-blue-400 underline">USAJobs</a> – Government roles</li>
            <li><a href="https://www.researchgate.net/jobs" target="_blank" className="text-blue-400 underline">ResearchGate</a> – Research/PhD roles</li>
            <li><a href="https://wellfound.com/jobs" target="_blank" className="text-blue-400 underline">Wellfound</a> – Startups & founders</li>
          </ul>
        </CardContent>
      </Card>

      {/* Application Tracker */}
      <Card className="bg-gray-800 text-white shadow-md">
        <CardHeader className="flex gap-2 items-center border-b border-gray-700">
          <ClipboardList size={20} />
          <CardTitle className="text-lg">Application Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Track job applications with customizable templates.</p>
          <ul className="list-disc ml-6 text-sm text-blue-400 space-y-1 mt-2">
            <li>
              <a
                href="https://www.notion.com/templates/category/job-application-tracking?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
              >📄 Notion Job Application Tracker</a>
            </li>
            <li>
              <a
                href="https://www.airtable.com/universe/expsmYQEH1nCel5FU/the-ultimate-remote-job-application-tracking-tool?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
              >📊 Airtable Job Application Tracker</a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=YgSGtDlSTjY"
                target="_blank"
                rel="noopener noreferrer"
              >🎥 How to Track Your Job Applications (YouTube)</a>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Job Description Decoder */}
      <Card className="bg-gray-800 text-white shadow-md">
        <CardHeader className="flex gap-2 items-center border-b border-gray-700">
          <FileText size={20} />
          <CardTitle className="text-lg">Job Description Decoder</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Paste a job description below to extract skills and keywords:</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Paste job description here..."
            className="w-full mt-2 p-3 rounded-md bg-gray-900 text-white border border-gray-700"
            rows={5}
          />
          <button
            onClick={extractSkills}
            className="mt-3 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm"
          >Analyze Description</button>
          {decoded.length > 0 && (
            <div className="mt-3 text-sm text-gray-300">
              <p className="font-semibold">Top Skills Detected:</p>
              <ul className="list-disc ml-6 mt-1">
                {decoded.map((skill, idx) => <li key={idx}>{skill}</li>)}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Practice Hub */}
      <Card className="bg-gray-800 text-white shadow-md">
        <CardHeader className="flex gap-2 items-center border-b border-gray-700">
          <Brain size={20} />
          <CardTitle className="text-lg">Practice Hub</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Curated resources to help you prepare with confidence:</p>
          <ul className="list-disc ml-6 text-sm text-gray-300 mt-2 space-y-1">
            <li>
              <a
                href="https://interviewing.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Mock Interview Platforms (interviewing.io)
              </a>
            </li>
            <li>
              <a
                href="https://studentaffairs.vancouver.wsu.edu/files/inserted-files/STAR%20Interviewing%20Practice%20Sheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                STAR Interview Practice Sheet (WSU Vancouver)
              </a>
            </li>
            <li>
              <a
                href="https://www.bcitsa.ca/careerservices/wp-content/uploads/sites/7/2020/03/Behavioral-Interview-Questions-and-Answers-mar9.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Behavioral Interview Q&A (BCITSA PDF)
              </a>
            </li>
            <li>
              <a
                href="https://resources.biginterview.com/behavioral-interviews/behavioral-interview-questions/?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Behavioral Interview Tips & Sample Answers (Big Interview)
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
