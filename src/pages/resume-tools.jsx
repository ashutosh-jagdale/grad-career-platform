import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, BookOpen } from "lucide-react";

const resources = [
  {
    title: "Sample Resume (Google Doc)",
    type: "doc",
    previewUrl: "https://docs.google.com/document/d/1C4f2CffrjkENFr53R06ef5u0j2EUeno4/preview",
    downloadUrl: "https://docs.google.com/document/d/1C4f2CffrjkENFr53R06ef5u0j2EUeno4/export?format=pdf",
  },
  {
    title: "Tech Cover Letter (PDF)",
    type: "pdf",
    previewUrl: "https://docs.google.com/document/d/1f_pg2RbXTe0D2aW0oG_HasNysHEAx6WN/preview",
downloadUrl: "https://docs.google.com/document/d/1f_pg2RbXTe0D2aW0oG_HasNysHEAx6WN/export?format=pdf",
  },
];

const guidanceLinks = [
  {
    title: "Harvard Resume Guide",
    url: "https://ocs.fas.harvard.edu/resumes-cvs-cover-letters",
  },
  {
    title: "Purdue OWL Resume & Cover Letter Help",
    url: "https://owl.purdue.edu/owl/job_search_writing/resumes_and_vitas/index.html",
  },
  {
    title: "Big Interview – Cover Letter Tips",
    url: "https://resources.biginterview.com/cover-letters/",
  },
];

export default function ResumeCoverSection() {
  return (
    <div className="p-6 text-white max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">📂 Resume & Cover Letter Resources</h1>
      <p className="text-gray-300 mb-6">
        Preview or download curated examples and templates to guide your job application documents.
      </p>

      {resources.map((res, idx) => (
        <Card key={idx} className="bg-gray-800 border border-gray-700 shadow">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText size={18} />
              {res.title}
            </CardTitle>
            <a
              href={res.downloadUrl}
              download
              className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <Download size={16} />
              Download
            </a>
          </CardHeader>
          <CardContent>
            {res.type === "doc" ? (
              <iframe
                src={res.previewUrl}
                className="w-full h-[500px] border border-gray-700 rounded-md"
                title={res.title}
              ></iframe>
            ) : (
              <object
                data={res.previewUrl}
                type="application/pdf"
                className="w-full h-[500px] border border-gray-700 rounded-md"
              >
                <p className="text-gray-400 text-sm p-4">
                  PDF preview is not supported in your browser. You can{" "}
                  <a href={res.downloadUrl} className="text-blue-400 underline" download>
                    download it here
                  </a>
                  .
                </p>
              </object>
            )}
          </CardContent>
        </Card>
      ))}

      <div className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <BookOpen size={20} className="text-blue-400" /> Guidance Before You Start
        </h2>
        <p className="text-gray-300 mb-2 text-sm">
          Before creating your resume or cover letter, check out these expert resources for structure, wording, and strategy tips:
        </p>
        <ul className="list-disc pl-5 text-blue-400 space-y-2 text-sm">
          {guidanceLinks.map((link, i) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
