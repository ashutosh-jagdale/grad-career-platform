// career-onboarding.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CareerOnboarding() {
  return (
    <div className="space-y-6 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Salary & Career Onboarding</h1>

      <Card>
        <CardHeader><CardTitle>Salary Research Tools</CardTitle></CardHeader>
        <CardContent>
          <p>Compare salaries across industries and cities. Tools include Glassdoor, Levels.fyi, and PayScale links.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Negotiation Toolkit</CardTitle></CardHeader>
        <CardContent>
          <p>Email templates, response scripts, and real scenarios to boost confidence in offer negotiations.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>90-Day Success Plan</CardTitle></CardHeader>
        <CardContent>
          <p>Printable checklist of what to do in your first 30/60/90 days at work to ramp up efficiently.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Career Progress Planner</CardTitle></CardHeader>
        <CardContent>
          <p>Guided worksheet to plan long-term skills, certifications, and internal mobility at your job.</p>
        </CardContent>
      </Card>
    </div>
  );
}