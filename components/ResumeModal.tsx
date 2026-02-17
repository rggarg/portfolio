
import React from 'react';
import { X, Mail, Linkedin, Download, FileText, Phone, Globe, MapPin } from 'lucide-react';
import { RESUME_LINK } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.open(RESUME_LINK, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden flex flex-col max-h-[95vh] shadow-2xl transition-colors duration-300">
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
               <FileText size={18} />
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Resume Preview</h2>
          </div>
          <div className="flex items-center gap-3">
             <button 
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-xs font-bold transition-all text-white shadow-lg shadow-indigo-600/20"
             >
                <Download className="w-3.5 h-3.5" /> Download PDF
             </button>
             <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 dark:text-slate-400">
                <X className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Modal Content - Styled to match the provided screenshot */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-8 bg-slate-200 dark:bg-slate-950">
          <div className="max-w-[800px] mx-auto bg-white text-slate-900 p-10 sm:p-14 shadow-2xl rounded-sm font-sans min-h-[1056px]">
            {/* Header Area */}
            <div className="flex justify-between items-start mb-8">
              <div className="space-y-1">
                <h1 className="text-[32px] font-extrabold text-[#004a80] leading-tight">ROHIT GARG</h1>
                <p className="text-[18px] font-bold text-slate-800">LEAD PRODUCT ENGINEER</p>
              </div>
              <div className="text-right space-y-1 text-[13px] text-slate-700">
                <div className="flex items-center justify-end gap-2">
                  <span>9671144525</span>
                  <Phone size={14} className="text-[#004a80]" />
                </div>
                <div className="flex items-center justify-end gap-2 underline">
                  <a href="mailto:rohitgarg892000@gmail.com">rohitgarg892000@gmail.com</a>
                  <Mail size={14} className="text-[#004a80]" />
                </div>
                <div className="flex items-center justify-end gap-2 underline">
                  <a href="https://linkedin.com/in/rggarg" target="_blank">LinkedIn</a>
                  <Linkedin size={14} className="text-[#004a80]" />
                </div>
                <div className="flex items-center justify-end gap-2 underline">
                  <a href="#">Portfolio</a>
                  <Globe size={14} className="text-[#004a80]" />
                </div>
              </div>
            </div>

            {/* SUMMARY Section */}
            <section className="mb-6">
              <h2 className="text-[15px] font-black text-[#004a80] uppercase tracking-wide mb-1">SUMMARY</h2>
              <div className="h-[1.5px] bg-[#004a80] mb-3"></div>
              <p className="text-[13px] leading-[1.6] text-justify text-slate-800">
                Product-focused Software Engineer with 3+ years of experience building scalable, enterprise-grade SaaS platforms across CRM, CLM, and digital transaction management domains. Proven expertise in the MERN stack and AWS, with strong ownership of end-to-end product architecture, automation systems, and AI-powered workflows. Experienced in designing high-performance backend services, optimizing system scalability, and delivering mission-critical enterprise features. Adept at aligning technical execution with product strategy to drive measurable business outcomes.
              </p>
            </section>

            {/* SKILLS Section */}
            <section className="mb-6">
              <h2 className="text-[15px] font-black text-[#004a80] uppercase tracking-wide mb-1">SKILLS</h2>
              <div className="h-[1.5px] bg-[#004a80] mb-3"></div>
              <div className="space-y-1 text-[13px]">
                <p><span className="font-bold w-48 inline-block">Programming & Backend:</span> JavaScript, Python, Node.js, Express.js, Redis</p>
                <p><span className="font-bold w-48 inline-block">Frontend:</span> React.js, Redux, Next.js</p>
                <p><span className="font-bold w-48 inline-block">Databases:</span> MongoDB, MySQL, Firebase</p>
                <p><span className="font-bold w-48 inline-block">Cloud & DevOps:</span> AWS (EC2, S3, IAM, Amplify), CI/CD Pipelines</p>
                <p><span className="font-bold w-48 inline-block">Architecture & Engineering:</span> System Design, Scalable SaaS Architecture, Performance Optimization</p>
                <p><span className="font-bold w-48 inline-block">Tools & Integrations:</span> Git, GitHub, Bitbucket, JIRA, Postman, Salesforce (SFDC), Google Drive, Microsoft 365, Dropbox</p>
              </div>
            </section>

            {/* EXPERIENCE Section */}
            <section className="mb-6">
              <h2 className="text-[15px] font-black text-[#004a80] uppercase tracking-wide mb-1">EXPERIENCE</h2>
              <div className="h-[1.5px] bg-[#004a80] mb-3"></div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-[14px] font-black text-slate-900">LEAD PRODUCT ENGINEER</h3>
                    <span className="text-[13px] font-bold text-slate-700">Feb 2022 – Present</span>
                  </div>
                  <div className="text-[13px] font-bold text-slate-600 mb-2 italic">Legitt AI | Noida</div>
                  <ul className="list-disc ml-4 space-y-1 text-[13px] text-slate-800 leading-[1.4]">
                    <li>Led architecture and development of an AI-driven CLM and CRM platform serving enterprise clients.</li>
                    <li>Owned end-to-end product modules including CRM workflows, contract lifecycle management, and eSignature systems.</li>
                    <li>Designed and built scalable backend services and REST APIs using Node.js, Express, and cloud infrastructure (AWS).</li>
                    <li>Improved API performance by 50% through database optimization and caching strategies.</li>
                    <li>Enhanced system reliability by implementing monitoring, logging, and alerting mechanisms.</li>
                    <li>Built and optimized dynamic, responsive UI components using React.js for improved user experience.</li>
                    <li>Led full feature lifecycle from requirement analysis and system design to deployment and production rollout.</li>
                    <li>Collaborated with cross-functional teams (product, sales, operations) to deliver high-impact enterprise features.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* EDUCATION Section */}
            <section className="mb-6">
              <h2 className="text-[15px] font-black text-[#004a80] uppercase tracking-wide mb-1">EDUCATION</h2>
              <div className="h-[1.5px] bg-[#004a80] mb-3"></div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-[13px] font-bold text-slate-900">Bachelor of Technology</h3>
                    <span className="text-[12px] font-bold text-slate-700 uppercase">Aug 2018 - June 2022</span>
                  </div>
                  <p className="text-[13px] text-slate-700">Deenbandhu Chhotu Ram University of Science and Technology</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-[13px] font-bold text-slate-900">Secondary School</h3>
                    <span className="text-[12px] font-bold text-slate-700 uppercase">Apr 2016 - Mar 2017</span>
                  </div>
                  <p className="text-[13px] text-slate-700">J.A. Saraswati Vidya Peeth Senior Secondary School</p>
                </div>
              </div>
            </section>

            {/* ADDITIONAL INFORMATION Section */}
            <section className="mb-6">
              <h2 className="text-[15px] font-black text-[#004a80] uppercase tracking-wide mb-1">ADDITIONAL INFORMATION</h2>
              <div className="h-[1.5px] bg-[#004a80] mb-3"></div>
              <ul className="list-disc ml-4 space-y-1 text-[13px] text-slate-800 leading-[1.4]">
                <li>Strong understanding of SaaS product architecture and enterprise workflow automation.</li>
                <li>Experience working closely with cross-functional teams and enterprise stakeholders.</li>
                <li>Passionate about AI-driven product innovation and system optimization.</li>
                <li>Fluent in English, Hindi, Punjabi, and Haryanvi.</li>
              </ul>
            </section>
          </div>
        </div>
        
        {/* Footer for Previewing on Small Screens */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center md:hidden transition-colors">
           <button onClick={onClose} className="w-full py-3 bg-indigo-600 rounded-xl font-bold text-white shadow-lg">Close Preview</button>
        </div>
      </div>
    </div>
  );
};
