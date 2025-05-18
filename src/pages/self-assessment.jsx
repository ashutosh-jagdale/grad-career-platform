import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CareerPlanning = () => {
  return (
    <div className="p-6 text-white max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">Career Planning Resources</h1>

      {/* Self-Assessment Tools */}
      <Card>
        <CardHeader>
          <CardTitle>🧠 Self-Assessment Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Understand your strengths, preferences, and values to guide your career direction.</p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-300">
            <li><a href="https://www.16personalities.com/" target="_blank" rel="noopener noreferrer">MBTI (16Personalities)</a></li>
            <li><a href="https://openpsychometrics.org/tests/Holland/" target="_blank" rel="noopener noreferrer">Holland Code Quiz</a></li>
            <li><a href="https://www.viacharacter.org/" target="_blank" rel="noopener noreferrer">VIA Strengths Survey</a></li>
          </ul>
        </CardContent>
      </Card>

      {/* Career Path Explorer */}
      <Card>
        <CardHeader>
          <CardTitle>📊 Career Path Explorer</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Browse popular career options for graduate students in your field:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
            <div className="bg-gray-800 p-4 rounded">🧪 Research Scientist → PhD programs, biotech, policy</div>
            <div className="bg-gray-800 p-4 rounded">💻 Data Analyst → Tech, finance, healthcare</div>
            <div className="bg-gray-800 p-4 rounded">🎓 Lecturer → Academic roles, EdTech</div>
            <div className="bg-gray-800 p-4 rounded">🧑‍💼 Product Manager → Tech startups, consulting</div>
          </div>
        </CardContent>
      </Card>

      {/* Goal-Setting Worksheet */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Goal-Setting Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Use our worksheet to map short- and long-term career goals.</p>
          <Button asChild className="mt-3">
            <a href="/downloads/career-goal-worksheet.pdf" download>
              Download Goal Worksheet
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Optional: Career Advice Video */}
      <Card>
        <CardHeader>
          <CardTitle>🎥 Watch: Planning Your Career in Grad School</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/Eg5-FFTPjZ4"
              title="Career Planning Tips"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerPlanning;
