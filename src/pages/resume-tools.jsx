import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Pencil, FileText } from "lucide-react";
import { useState } from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: "Helvetica" },
  name: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  section: { marginBottom: 12 },
  label: { fontWeight: "bold", marginBottom: 4 },
  content: { marginBottom: 6 },
});

function MyResumePDF({ form }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{form.name || "Your Name"}</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Summary</Text>
          <Text style={styles.content}>{form.summary || "Your professional summary..."}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Experience</Text>
          <Text style={styles.content}>{form.experience || "Your work experience..."}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Skills</Text>
          <Text>{form.skills || "Your skills..."}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default function ResumeTools() {
  const [form, setForm] = useState({
    name: "",
    summary: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const templates = [
    { name: "Basic Resume", file: "/templates/basic-resume.pdf" },
    { name: "Modern Resume", file: "/templates/modern-resume.pdf" },
    { name: "Academic CV", file: "/templates/academic-cv.pdf" },
    { name: "Creative Resume", file: "/templates/creative-resume.pdf" },
    { name: "1-Page Resume", file: "/templates/one-page-resume.pdf" },
  ];

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
            <CardHeader><CardTitle>Explore Templates</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {templates.map((t, i) => (
                  <div key={i} className="rounded-lg bg-gray-900 border border-gray-700 shadow-md hover:ring-2 hover:ring-blue-500 p-4">
                    <p className="font-semibold text-lg text-white mb-1">{t.name}</p>
                    <ul className="text-xs text-gray-400 mb-2 list-disc pl-4">
                      <li>ATS-optimized</li>
                      <li>Easy to edit</li>
                    </ul>
                    <div className="flex gap-4 text-sm">
                      <a href={t.file} download className="text-blue-400 underline hover:text-blue-300">Download PDF</a>
                      <a href={t.file} target="_blank" rel="noopener noreferrer" className="text-gray-400 underline hover:text-gray-300">Preview</a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="builder">
          <Card className="bg-gray-800 text-white mb-4">
            <CardHeader><CardTitle>Build Your Resume</CardTitle></CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <form className="space-y-4 text-sm text-gray-300">
                  {['name', 'summary', 'experience', 'skills'].map((field) => (
                    <div key={field}>
                      <label className="block mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                      {field === 'summary' || field === 'experience' ? (
                        <textarea name={field} rows="3" value={form[field]} onChange={handleChange} className="w-full p-2 bg-gray-900 border border-gray-700 rounded" />
                      ) : (
                        <input name={field} value={form[field]} onChange={handleChange} className="w-full p-2 bg-gray-900 border border-gray-700 rounded" />
                      )}
                    </div>
                  ))}
                  <div className="pt-4 flex gap-4">
                    <PDFDownloadLink document={<MyResumePDF form={form} />} fileName="resume.pdf" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                      {({ loading }) => loading ? "Generating PDF..." : "Download Resume PDF"}
                    </PDFDownloadLink>
                    <button type="button" onClick={() => setForm({ name: '', summary: '', experience: '', skills: '' })} className="text-sm text-red-400 hover:text-red-300">Reset</button>
                  </div>
                </form>
                <div className="bg-gray-900 text-white p-4 rounded border border-gray-700 shadow">
                  <h2 className="text-xl font-bold mb-2">{form.name || "Your Name"}</h2>
                  <p className="text-sm text-gray-300 mb-4">{form.summary || "Your professional summary..."}</p>
                  <h3 className="text-lg font-semibold mb-1">Experience</h3>
                  <p className="text-sm text-gray-300 whitespace-pre-wrap mb-4">{form.experience || "List your work experience here..."}</p>
                  <h3 className="text-lg font-semibold mb-1">Skills</h3>
                  <p className="text-sm text-gray-300">{form.skills || "List your skills here..."}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cover">
          <Card className="bg-gray-800 text-white mb-4">
            <CardHeader><CardTitle>Cover Letter Guidance</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300 mb-3">Tips and examples to create a compelling cover letter.</p>
              <ul className="list-disc pl-5 text-blue-400 text-sm mb-4 space-y-1">
                <li><a href="/coverletters/tech-cover-letter.pdf" download>Tech Cover Letter Example</a></li>
                <li><a href="/coverletters/research-cover-letter.pdf" download>Research Cover Letter Example</a></li>
              </ul>
              <div className="text-sm text-gray-400 space-y-2">
                <p className="font-semibold text-white">Structure:</p>
                <ul className="list-disc pl-5">
                  <li>Intro: Hook + Role</li>
                  <li>Body: Why You + Why Them</li>
                  <li>Close: Call to Action</li>
                </ul>
                <p className="font-semibold text-white mt-3">✅ Dos:</p>
                <ul className="list-disc pl-5">
                  <li>Customize for the role</li>
                  <li>Use metrics and results</li>
                  <li>Mirror keywords from the JD</li>
                </ul>
                <p className="font-semibold text-white mt-3">❌ Don’ts:</p>
                <ul className="list-disc pl-5">
                  <li>Use generic intros</li>
                  <li>Repeat your resume word-for-word</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 mt-6 rounded border border-gray-700">
                <h3 className="text-white font-semibold mb-2">Live Sample Snippet:</h3>
                <p className="text-gray-300 text-sm">Dear Hiring Manager,</p>
                <p className="text-gray-400 text-sm mt-1">I’m writing to apply for the Software Engineer position at XYZ Corp...</p>
                <p className="text-xs text-gray-600 italic mt-2">Sample preview of a strong opening paragraph.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}