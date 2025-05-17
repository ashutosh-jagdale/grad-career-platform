// resume-tools.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResumeTools() {
  return (
    <div className="space-y-6 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Resume & Cover Letter Resources</h1>

      <Card>
        <CardHeader><CardTitle>Templates & Samples</CardTitle></CardHeader>
        <CardContent>
          <p>Download clean, ATS-friendly resume formats. Explore sample resumes by industry.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Cover Letter Builder</CardTitle></CardHeader>
        <CardContent>
          <p>Step-by-step form to generate a personalized cover letter draft with tips on tone and structure.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Follow-Up Email Scripts</CardTitle></CardHeader>
        <CardContent>
          <p>Copy-paste email templates for thank you notes, networking intros, and application follow-ups.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>LinkedIn Profile Guide</CardTitle></CardHeader>
        <CardContent>
          <p>Checklist for headline, summary, experience, and skills to attract recruiters and referrals.</p>
        </CardContent>
      </Card>
    </div>
  );
} 
