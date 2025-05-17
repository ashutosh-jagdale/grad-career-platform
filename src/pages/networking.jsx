// networking.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Networking() {
  return (
    <div className="space-y-6 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Networking & Mentorship</h1>

      <Card>
        <CardHeader><CardTitle>Outreach Templates</CardTitle></CardHeader>
        <CardContent>
          <p>Pre-filled message templates for alumni, cold outreach, event follow-ups, and mentorship requests.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Mentorship Matching</CardTitle></CardHeader>
        <CardContent>
          <p>Optional Google Form to match students with volunteer mentors (alumni/professionals).</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Informational Interview Guide</CardTitle></CardHeader>
        <CardContent>
          <p>Step-by-step tips on booking, preparing, and following up. Includes sample questions and email templates.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>LinkedIn Playbook</CardTitle></CardHeader>
        <CardContent>
          <p>How to find mutual connections, comment effectively, and stand out on LinkedIn.</p>
        </CardContent>
      </Card>
    </div>
  );
}