import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Search, ClipboardList, Brain, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function JobTools() {
  const [description, setDescription] = useState("");
  const [decoded, setDecoded] = useState([]);

  const dummySkillExtraction = () => {
    const skills = ["Python", "React", "SQL", "Agile", "Communication"];
    setDecoded(skills);
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
            <li><a href="https://researchgate.net/jobs" target="_blank" className="text-blue-400 underline">ResearchGate</a> – Research/PhD roles</li>
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
          <p className="text-sm mt-2 text-gray-400">Download or preview:</p>
          <ul className="list-disc ml-6 text-sm text-blue-400 space-y-1 mt-1">
            <li><a href="/trackers/notion-job-tracker-template.html" download>📄 Notion Tracker Template</a></li>
            <li><a href="/trackers/airtable-job-tracker.csv" download>📊 Airtable CSV</a></li>
            <li><a href="https://youtu.be/example" target="_blank">🎥 How to use it</a></li>
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
            onClick={dummySkillExtraction}
            className="mt-3 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm"
          >
            Analyze Description
          </button>
          {decoded.length > 0 && (
            <div className="mt-3 text-sm text-gray-300">
              <p className="font-semibold">Top Skills Detected:</p>
              <ul className="list-disc ml-6 mt-1">
                {decoded.map((skill, idx) => <li key={idx}>{skill}</li>)}
              </ul>
            </div>
          )}
          <p className="mt-2 text-xs text-gray-400">*Demo only — full AI parsing coming soon.</p>
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
            <li><a href="https://interviewing.io/" className="text-blue-400 underline">Mock Interview Platforms</a></li>
            <li><a href="/resources/STAR-worksheet.pdf" download>STAR Technique Worksheet</a></li>
            <li><a href="/resources/behavioral-question-bank.pdf" download>Behavioral Question Bank</a></li>
            <li><a href="https://www.biginterview.com/blog/star-method/" target="_blank" className="text-blue-400 underline">STAR Answer Examples</a></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
