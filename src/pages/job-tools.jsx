// job-tools.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function JobTools() {
  return (
    <div className="space-y-6 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Job Search Tools</h1>

      <Card>
        <CardHeader><CardTitle>Job Board Aggregator</CardTitle></CardHeader>
        <CardContent>
          <p>One-click access to curated job boards for tech, consulting, research, and government jobs.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Application Tracker</CardTitle></CardHeader>
        <CardContent>
          <p>Track applications, statuses, deadlines, and interviews visually. Integrates with Notion or Airtable templates.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Job Description Decoder</CardTitle></CardHeader>
        <CardContent>
          <p>Paste a job description and get a summary of key skills and keywords to tailor your resume.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Practice Hub</CardTitle></CardHeader>
        <CardContent>
          <p>Links to mock interview tools, STAR response templates, and behavioral question banks.</p>
        </CardContent>
      </Card>
    </div>
  );
}