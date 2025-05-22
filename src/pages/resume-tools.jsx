import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Pencil, FileText } from "lucide-react";
import ResumeTemplates from "@/components/resume-tools/ResumeTemplates";
import ResumeBuilder from "@/components/resume-tools/ResumeBuilder";
import CoverLetterHelp from "@/components/resume-tools/CoverLetterHelp";

export default function ResumeTools() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-2">Resume & Cover Letter Resources</h1>
      <p className="text-gray-300 mb-6 max-w-2xl">
        Explore resume templates, build your resume step-by-step, and get cover letter guidance all in one place.
      </p>

      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="mb-4 flex gap-2">
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <Sparkles size={16} /> Templates
          </TabsTrigger>
          <TabsTrigger value="builder" className="flex items-center gap-2">
            <Pencil size={16} /> Builder
          </TabsTrigger>
          <TabsTrigger value="cover" className="flex items-center gap-2">
            <FileText size={16} /> Cover Letters
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <Card className="bg-gray-800 text-white mb-4">
            <CardHeader>
              <CardTitle>Explore Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <ResumeTemplates />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="builder">
          <Card className="bg-gray-800 text-white mb-4">
            <CardHeader>
              <CardTitle>Build Your Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <ResumeBuilder />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cover">
          <Card className="bg-gray-800 text-white mb-4">
            <CardHeader>
              <CardTitle>Cover Letter Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <CoverLetterHelp />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
