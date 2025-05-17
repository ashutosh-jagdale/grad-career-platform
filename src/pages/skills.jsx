// skills.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  return (
    <div className="space-y-6 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Skill Development</h1>

      <Card>
        <CardHeader><CardTitle>Technical Skills</CardTitle></CardHeader>
        <CardContent>
          <p>Online resources to build coding, data, and software skills (LinkedIn Learning, Coursera, GitHub projects).</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Soft Skills</CardTitle></CardHeader>
        <CardContent>
          <p>Guided practice for communication, leadership, teamwork, adaptability, and resilience with examples and tips.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Skill Tracker Template</CardTitle></CardHeader>
        <CardContent>
          <p>Google Sheet or Notion template to set monthly goals and track improvement across skills.</p>
        </CardContent>
      </Card>
    </div>
  );
}