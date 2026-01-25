
import React from 'react';
import { X, Mail, Linkedin, Github, Download, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden flex flex-col max-h-[90vh] shadow-2xl transition-colors duration-300">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-500" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Rohit Garg - Resume</h2>
          </div>
          <div className="flex items-center gap-4">
             <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-bold transition-all text-white">
                <Download className="w-4 h-4" /> PDF
             </button>
             <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 dark:text-slate-400">
                <X className="w-6 h-6" />
             </button>
          </div>
        </div>

        {/* Modal Content - ATS Style Resume */}
        <div className="flex-grow overflow-y-auto p-8 bg-slate-100 dark:bg-slate-950">
          <div className="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 shadow-sm rounded-xl">
            <div className="space-y-10">
              {/* Contact Header */}
              <div className="text-center space-y-3">
                <h1 className="text-4xl font-bold uppercase tracking-wider text-slate-900">Rohit Garg</h1>
                <p className="text-lg font-semibold text-indigo-600">Lead Product Engineer | Full Stack Developer (MERN)</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">
                  <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> rohitgarg892000@gmail.com</span>
                  <span className="flex items-center gap-1"><Linkedin className="w-4 h-4" /> linkedin.com/in/rggarg</span>
                  {/* <span className="flex items-center gap-1"><Github className="w-4 h-4" /> github.com/rohitgarg</span> */}
                </div>
              </div>

              <div className="border-t-2 border-slate-100"></div>

              {/* Summary */}
              <section className="space-y-2">
                <h2 className="text-lg font-bold uppercase text-slate-800 border-b border-slate-100 pb-1">Professional Summary</h2>
                <p className="leading-relaxed text-slate-700">
                  Lead Product Engineer with 4+ years of experience building scalable SaaS products in CRM, CLM, and eSignature domains. Strong expertise in MERN stack, backend system design, AWS infrastructure, and AI-powered automation. Proven ability to take ownership of core product modules and deliver enterprise-grade solutions.
                </p>
              </section>

              {/* Skills */}
              <section className="space-y-4">
                <h2 className="text-lg font-bold uppercase text-slate-800 border-b border-slate-100 pb-1">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm text-slate-700">
                  <p><span className="font-bold text-slate-900">Languages:</span> JavaScript (ES6+)</p>
                  <p><span className="font-bold text-slate-900">Frontend:</span> React.js, Next.js, Tailwind CSS</p>
                  <p><span className="font-bold text-slate-900">Backend:</span> Node.js, Express.js, MongoDB, SQL</p>
                  <p><span className="font-bold text-slate-900">Cloud:</span> AWS (EC2, S3, SES), Nginx, PM2</p>
                  <p><span className="font-bold text-slate-900">Concepts:</span> System Design, REST APIs, SaaS Architecture</p>
                  <p><span className="font-bold text-slate-900">AI:</span> Workflow automation, Document intelligence</p>
                </div>
              </section>

              {/* Experience */}
              <section className="space-y-4">
                <h2 className="text-lg font-bold uppercase text-slate-800 border-b border-slate-100 pb-1">Professional Experience</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-lg text-slate-900">Lead Product Engineer</h3>
                      <span className="text-sm font-semibold text-slate-500">2022 – Present</span>
                    </div>
                    <div className="text-indigo-600 font-bold mb-2">Legitt AI</div>
                    <ul className="list-disc ml-4 space-y-1.5 text-sm text-slate-700">
                      <li>Led development of CRM and eSignature modules for enterprise SaaS platform.</li>
                      <li>Designed scalable backend architecture supporting thousands of document workflows.</li>
                      <li>Built multi-signer eSignature system with audit trail and compliance-ready logging.</li>
                      <li>Implemented automation workflows and role-based access systems.</li>
                      <li>Integrated AI-driven features for contract analysis and workflow efficiency.</li>
                      <li>Worked closely with leadership and product teams to define feature roadmap.</li>
                      <li>Improved system performance and code maintainability through refactoring.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Key Projects */}
              <section className="space-y-4">
                <h2 className="text-lg font-bold uppercase text-slate-800 border-b border-slate-100 pb-1">Key Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-bold text-slate-800">eSignature Platform</h3>
                    <p className="text-xs text-slate-500">Multi-party workflows, Audit trail, Signature certificates.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">CRM System</h3>
                    <p className="text-xs text-slate-500">Lead management, Deal pipelines, Automation rules.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">AI-Based CLM</h3>
                    <p className="text-xs text-slate-500">Contract intelligence, Risk insights, Renewal alerts.</p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="space-y-2">
                <h2 className="text-lg font-bold uppercase text-slate-800 border-b border-slate-100 pb-1">Education</h2>
                <div>
                  <div className="flex justify-between font-bold text-slate-900 text-sm">
                    <span>Bachelor of Technology in Computer Science</span>
                    <span>2018 - 2022</span>
                  </div>
                  <p className="text-sm text-slate-500 italic">Deenbandhu Chhotu Ram University of Science and Technology</p>
                </div>
              </section>
            </div>
          </div>
        </div>
        
        {/* Mobile Close Only visible on small screens */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center md:hidden transition-colors">
           <button onClick={onClose} className="w-full py-3 bg-slate-200 dark:bg-slate-800 rounded-xl font-bold text-slate-800 dark:text-white">Close Preview</button>
        </div>
      </div>
    </div>
  );
};
