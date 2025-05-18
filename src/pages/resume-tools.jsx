import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResumeTemplates from "@/components/resume-tools/ResumeTemplates";
import ResumeBuilder from "@/components/resume-tools/ResumeBuilder";
import CoverLetterHelp from "@/components/resume-tools/CoverLetterHelp";

export default function ResumeTools() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Resume & Cover Letter Resources</h1>
      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="builder">Builder</TabsTrigger>
          <TabsTrigger value="cover">Cover Letters</TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <ResumeTemplates />
        </TabsContent>
        <TabsContent value="builder">
          <ResumeBuilder />
        </TabsContent>
        <TabsContent value="cover">
          <CoverLetterHelp />
        </TabsContent>
      </Tabs>
    </div>
  );
}
