export default function ResumeTemplates() {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Downloadable Resume Templates</h2>
        <ul className="list-disc ml-6 text-blue-400 text-sm">
          <li><a href="/templates/basic-resume.docx" download>Basic Resume Template</a></li>
          <li><a href="/templates/modern-resume.docx" download>Modern Resume Template</a></li>
          <li><a href="/templates/academic-cv.docx" download>Academic CV Template</a></li>
        </ul>
      </div>
    );
  }
  