import { personalInfo } from '../data/portfolio';

export default function Footer() {
 return (
 <footer className="py-8 border-t border-border relative z-10">
 <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
 <div className="flex items-center gap-3">
 <div className="w-6 h-6 rounded bg-accent/10 border border-accent/30 flex items-center justify-center">
 <span className=" text-accent text-description font-bold">{'>'}</span>
 </div>
 <span className=" font-bold text-subtitle text-text-main">
 Rohit<span className="text-accent">.</span>
 </span>
 </div>

 <div className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
 <span className=" text-description tracking-widest uppercase text-text-muted">
 Lead Product Engineer · Portfolio © {new Date().getFullYear()}
 </span>
 </div>

 {/* <span className=" text-description text-text-muted">
 Built with React + Vite + Tailwind
 </span> */}
 </div>
 </footer>
 );
}
