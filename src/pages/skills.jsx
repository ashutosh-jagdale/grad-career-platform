import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { MessageCircle, Brain, Users, Clock, BarChart, Activity } from "lucide-react";

const softSkills = [
  {
    title: "Communication Skills",
    icon: <MessageCircle size={20} />,
    description: "Express ideas clearly in writing, speaking, and visual formats.",
    tips: [
      "Join public speaking or debate clubs.",
      "Practice writing emails or summaries.",
      "Seek feedback on communication style.",
    ],
    level: "Intermediate",
  },
  {
    title: "Critical Thinking",
    icon: <Brain size={20} />,
    description: "Evaluate problems logically and offer solutions.",
    tips: [
      "Use tools like SWOT or 5 Whys analysis.",
      "Debrief past decisions regularly.",
      "Read case studies and solve them.",
    ],
    level: "Advanced",
  },
  {
    title: "Collaboration & Teamwork",
    icon: <Users size={20} />,
    description: "Work productively across teams.",
    tips: [
      "Take on team roles like mediator or facilitator.",
      "Ask for feedback on group contributions.",
      "Practice active listening.",
    ],
    level: "Intermediate",
  },
  {
    title: "Time Management",
    icon: <Clock size={20} />,
    description: "Organize and prioritize tasks to meet deadlines effectively.",
    tips: [
      "Use planners or digital tools like Trello/Notion.",
      "Break large tasks into smaller ones.",
      "Avoid multitasking and set realistic goals.",
    ],
    level: "Beginner",
  },
  {
    title: "Adaptability & Resilience",
    icon: <Activity size={20} />,
    description: "Adjust to new challenges and learn from setbacks.",
    tips: [
      "Reflect on past challenges and how you overcame them.",
      "Take initiative in unfamiliar situations.",
      "Maintain a positive mindset during change.",
    ],
    level: "Advanced",
  },
  {
    title: "Leadership",
    icon: <Users size={20} />,
    description: "Motivate and guide teams toward shared goals.",
    tips: [
      "Lead group projects or student organizations.",
      "Develop emotional intelligence and empathy.",
      "Encourage feedback and continuous improvement.",
    ],
    level: "Intermediate",
  },
];

const technicalSkills = [
  {
    title: "Python Basics",
    description: "Core syntax, loops, functions, and data structures.",
    links: [
      { name: "LearnPython.org", url: "https://www.learnpython.org/" },
      { name: "Python Docs", url: "https://docs.python.org/3/tutorial/" },
    ],
    level: "Beginner",
  },
  {
    title: "SQL for Data",
    description: "Build queries, joins, aggregations, and subqueries.",
    links: [
      { name: "SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
      { name: "LeetCode SQL", url: "https://leetcode.com/problemset/database/" },
    ],
    level: "Intermediate",
  },
  {
    title: "Excel for Analytics",
    description: "Pivot tables, formulas, charts, and business modeling.",
    links: [
      { name: "Excel Skills for Business", url: "https://www.coursera.org/specializations/excel" },
      { name: "Microsoft Excel Tutorials", url: "https://support.microsoft.com/en-us/excel" },
    ],
    level: "Beginner",
  },
  {
    title: "Power BI / Tableau",
    description: "Build dashboards and visual insights using data storytelling tools.",
    links: [
      { name: "Power BI Learning", url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi/" },
      { name: "Tableau Training", url: "https://www.tableau.com/learn/training" },
    ],
    level: "Intermediate",
  },
  {
    title: "Business Analysis",
    description: "Stakeholder analysis, requirement gathering, and process mapping.",
    links: [
      { name: "BA Foundations (LinkedIn)", url: "https://www.linkedin.com/learning/paths/become-a-business-analyst" },
      { name: "BABOK Guide", url: "https://www.iiba.org/standards-and-resources/babok/" },
    ],
    level: "Advanced",
  },
  {
    title: "Statistics & Data Literacy",
    description: "Distributions, hypothesis testing, and interpreting results.",
    links: [
      { name: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability" },
      { name: "Intro to Stats (Udacity)", url: "https://www.udacity.com/course/intro-to-statistics--st101" },
    ],
    level: "Intermediate",
  },
  {
    title: "Version Control (Git)",
    description: "Learn git clone, commit, push, and pull requests.",
    links: [
      { name: "Learn Git Branching", url: "https://learngitbranching.js.org/" },
      { name: "GitHub Docs", url: "https://docs.github.com/en/get-started" },
    ],
    level: "Beginner",
  },
];

export default function Skills() {
  const [completedSkills, setCompletedSkills] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("completedSkills")) || [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("completedSkills", JSON.stringify(completedSkills));
  }, [completedSkills]);

  const toggleComplete = (title) => {
    setCompletedSkills((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const totalSkills = softSkills.length + technicalSkills.length;
  const progress = Math.round((completedSkills.length / totalSkills) * 100);

  const renderSkills = (skills, isTechnical = false) => (
    <div className="grid gap-6">
      {skills.map((skill, index) => (
        <Card key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-2">
            {skill.icon && skill.icon}
            <CardTitle className="text-xl font-semibold flex-grow">{skill.title}</CardTitle>
            <span className="text-xs bg-blue-700 px-2 py-1 rounded-full text-white">{skill.level}</span>
            {completedSkills.includes(skill.title) && (
              <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full ml-2">✓ Completed</span>
            )}
            <input
              type="checkbox"
              checked={completedSkills.includes(skill.title)}
              onChange={() => toggleComplete(skill.title)}
              className="form-checkbox h-5 w-5 text-blue-500 ml-2"
              title="Mark as complete"
            />
          </div>
          <CardContent className="pl-0 pt-0">
            <p className="text-gray-300 mb-2">{skill.description}</p>
            {isTechnical ? (
              <ul className="list-disc pl-6 text-sm text-blue-400 space-y-1">
                {skill.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <details className="mt-2 bg-gray-700 rounded-md p-3 text-sm text-gray-300">
                <summary className="cursor-pointer font-semibold text-blue-400">See how to develop this skill</summary>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                  {skill.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
              </details>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Skill Development</h1>
      <p className="mb-4 text-gray-300 max-w-3xl">
        Strengthen both technical and soft skills to stand out in your job search.
        These skills help you thrive in work environments, collaborate cross-functionally, and tackle real-world problems.
      </p>

      <Tabs defaultValue="soft" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="soft">{renderSkills(softSkills)}</TabsContent>
        <TabsContent value="technical">{renderSkills(technicalSkills, true)}</TabsContent>
      </Tabs>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Track Your Progress</h2>
        <p className="text-sm text-gray-400 mb-2">Skill development progress: {progress}%</p>
        <Progress value={progress} />
      </div>
    </div>
  );
}
