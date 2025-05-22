import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Search, ClipboardList, Brain } from "lucide-react";
import { useState } from "react";

export default function JobTools() {
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-10 p-6 text-white max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Job Search Tools</h1>
        <p className="text-gray-400 text-sm">Use these tools to find jobs, decode descriptions, and prepare effectively.</p>
      </div>

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
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white shadow-md">
        <CardHeader className="flex gap-2 items-center border-b border-gray-700">
          <ClipboardList size={20} />
          <CardTitle className="text-lg">Application Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Track your job applications with ease.</p>
          <p className="text-sm mt-2 text-gray-400">Download templates:</p>
          <ul className="list-disc ml-6 text-sm text-blue-400 space-y-1 mt-1">
            <li><a href="/trackers/notion-job-tracker-template.html" download>Notion Tracker Template</a></li>
            <li><a href="/trackers/airtable-job-tracker.csv" download>Airtable CSV</a></li>
          </ul>
        </CardContent>
      </Card>

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
          <button className="mt-3 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm">
            Analyze Description
          </button>
          <p className="mt-2 text-xs text-gray-400">*Feature demo only — AI parsing in progress.</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white shadow-md">
        <CardHeader className="flex gap-2 items-center border-b border-gray-700">
          <Brain size={20} />
          <CardTitle className="text-lg">Practice Hub</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Prepare for interviews with curated resources:</p>
          <ul className="list-disc ml-6 text-sm text-gray-300 mt-2 space-y-1">
            <li><a href="https://interviewing.io/" className="text-blue-400 underline">Mock Interview Platforms</a></li>
            <li><a href="/resources/STAR-worksheet.pdf" download>STAR Technique Worksheet</a></li>
            <li><a href="/resources/behavioral-question-bank.pdf" download>Behavioral Question Bank</a></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
