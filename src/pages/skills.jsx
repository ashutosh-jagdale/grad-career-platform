// src/pages/skills.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const softSkills = [
  {
    title: "Communication Skills",
    description: "Express ideas clearly in writing, speaking, and visual formats.",
    tips: [
      "Join public speaking or debate clubs.",
      "Practice writing emails or summaries.",
      "Seek feedback on communication style."
    ],
  },
  {
    title: "Critical Thinking",
    description: "Evaluate problems logically and offer solutions.",
    tips: [
      "Use tools like SWOT or 5 Whys analysis.",
      "Debrief past decisions regularly.",
      "Read case studies and solve them."
    ],
  },
  {
    title: "Collaboration & Teamwork",
    description: "Work productively across teams.",
    tips: [
      "Take on team roles like mediator or facilitator.",
      "Ask for feedback on group contributions.",
      "Practice active listening."
    ],
  },
];

const technicalSkills = [
  {
    title: "Python Basics",
    description: "Core syntax, loops, functions, and data structures.",
    resource: "https://www.learnpython.org/",
  },
  {
    title: "SQL for Data",
    description: "Build queries, joins, aggregations, and subqueries.",
    resource: "https://mode.com/sql-tutorial/",
  },
  {
    title: "Version Control (Git)",
    description: "Learn git clone, commit, push, and pull requests.",
    resource: "https://learngitbranching.js.org/",
  },
];

export default function Skills() {
  const [progress, setProgress] = useState(40);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Skill Development</h1>
      <p className="mb-4 text-gray-300 max-w-3xl">
        Strengthen both technical and soft skills to stand out in your job search.
        These skills help you thrive in complex work environments, communicate effectively, and work on real-world problems.
      </p>

      <Tabs defaultValue="soft" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="soft">
          {softSkills.map((skill, index) => (
            <Card key={index} className="mb-4 bg-gray-800 text-white">
              <CardHeader>
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-gray-300">{skill.description}</p>
                <ul className="list-disc ml-5 text-sm text-gray-400">
                  {skill.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="technical">
          {technicalSkills.map((skill, index) => (
            <Card key={index} className="mb-4 bg-gray-800 text-white">
              <CardHeader>
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-gray-300">{skill.description}</p>
                <a
                  href={skill.resource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline text-sm"
                >
                  Visit Resource
                </a>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Track Your Progress</h2>
        <p className="text-sm text-gray-400 mb-2">Skill development progress: {progress}%</p>
        <Progress value={progress} />
      </div>
    </div>
  );
}
