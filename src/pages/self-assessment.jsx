// self-assessment.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SelfAssessment() {
  return (
    <div className="space-y-6 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Career Planning</h1>

      <Card>
        <CardHeader><CardTitle>Self-Assessment Tools</CardTitle></CardHeader>
        <CardContent>
          <p>Reflect on strengths, values, and interests with tools like MBTI, CliftonStrengths, and skill audits.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Career Path Explorer</CardTitle></CardHeader>
        <CardContent>
          <p>Interactive guide to common paths based on academic field and interests (research, industry, nonprofit).</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Goal-Setting Worksheet</CardTitle></CardHeader>
        <CardContent>
          <p>SMART goal planner for academic, personal, and professional milestones.</p>
        </CardContent>
      </Card>
    </div>
  );
}