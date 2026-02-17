
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ArrowRight, 
  Menu, 
  X,
  ExternalLink,
  ChevronRight,
  Terminal,
  Cpu,
  Users,
  PenTool,
  CheckCircle2,
  FileText,
  Globe,
  Database,
  Layout,
  Cloud,
  Zap,
  Sun,
  Moon,
  MapPin,
  ArrowUp
} from 'lucide-react';
import { SKILLS, EXPERIENCE, PROJECTS, HIGHLIGHTS, RESUME_LINK } from './constants';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -150 && rect.top <= 250;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleDownloadResume = () => {
    window.open(RESUME_LINK, '_blank');
  };

  const NavItem = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
    const sectionId = href.replace('#', '');
    const isActive = activeSection === sectionId;
    
    return (
      <a 
        href={href} 
        onClick={(e) => scrollToSection(e, sectionId)}
        className={`transition-all duration-300 font-medium relative py-1 ${
          isActive ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:translate-y-[-1px]'
        }`}
      >
        {children}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full animate-in fade-in zoom-in duration-300"></span>
        )}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-card border-b border-slate-200 dark:border-slate-800">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-500/20 text-white">RG</div>
            <span className="text-xl font-bold uppercase tracking-widest bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">Rohit Garg</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#experience">Experience</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
            <div className="flex items-center space-x-4 ml-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20 text-white"
              >
                Resume
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-40 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl p-8 flex flex-col space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#experience">Experience</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
            <button 
              onClick={() => { setIsResumeOpen(true); setIsMenuOpen(false); }}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-4 rounded-2xl font-bold transition-all text-center shadow-lg shadow-indigo-600/20 text-white"
            >
              View Full Resume
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-4 relative overflow-hidden scroll-mt-16">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 blur-[120px] rounded-full -z-10 animate-pulse delay-700"></div>
          
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase">
                Lead Product Engineer
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 dark:from-indigo-400 dark:via-blue-400 dark:to-indigo-400">Scalable AI</span> SaaS
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Expert in building scalable CRM, CLM, and eSignature platforms with a deep focus on backend architecture and product excellence.
              </p>
              <div className="flex flex-wrap gap-5 pt-4">
                <button 
                  onClick={handleDownloadResume}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-indigo-600/20 text-white"
                >
                  <Download className="w-5 h-5" /> Download Resume
                </button>
                <a 
                  href="#projects"
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl font-bold flex items-center gap-2 transition-all text-slate-900 dark:text-white"
                >
                  View Projects <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                 <div className="w-96 h-96 rounded-3xl bg-gradient-to-br from-indigo-50/10 to-blue-600/10 dark:from-indigo-500/20 dark:to-blue-600/20 p-px rotate-3 hover:rotate-0 transition-transform duration-700 group">
                    <div className="w-full h-full rounded-[23px] bg-white dark:bg-slate-950 flex items-center justify-center p-12 border border-slate-200 dark:border-slate-800 group-hover:border-indigo-500/50 transition-colors">
                       <Terminal className="w-full h-full text-indigo-600 dark:text-indigo-500 opacity-20 group-hover:opacity-40 transition-opacity" strokeWidth={1} />
                    </div>
                 </div>
                 <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Available for Roles</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-4 bg-slate-100/50 dark:bg-slate-900/30 scroll-mt-16 transition-colors">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-16 space-y-4 text-center">
              <span className="text-indigo-600 dark:text-indigo-500 font-bold tracking-widest uppercase text-sm">Discovery</span>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">About My Journey</h2>
              <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
            </div>
            <div className="space-y-8 text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              <p>
                I’m a <span className="text-slate-900 dark:text-white font-normal">Lead Product Engineer</span> with over 3 years of hands-on experience building enterprise-grade SaaS products. My work focuses on <span className="text-indigo-600 dark:text-indigo-400 font-normal italic">CRM, CLM, and digital transaction management systems</span>.
              </p>
              <p>
                Currently, I lead the development of core product modules at Legitt AI, including complex CRM workflows and high-compliance eSignature solutions. I work closely with stakeholders to translate business requirements into <span className="text-slate-900 dark:text-white font-normal">scalable, reliable, and user-friendly systems</span>.
              </p>
              <p>
                I believe in <span className="text-indigo-600 dark:text-indigo-400 font-normal italic">ownership-driven development</span>. Beyond writing code, I design systems that grow with the business, leveraging <span className="text-slate-900 dark:text-white font-normal">AI to automate repetitive tasks</span> and enable smarter decision-making.
              </p>
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/50">
                <p className="font-medium text-slate-800 dark:text-slate-200">
                  Committed to clean architecture, high performance, and the seamless integration of AI into modern business workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-4 scroll-mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16 space-y-4 text-center">
              <span className="text-indigo-600 dark:text-indigo-500 font-bold tracking-widest uppercase text-sm">Arsenal</span>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Technical Expertise</h2>
              <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SKILLS.map((group, idx) => (
                <div key={idx} className="glass-card p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-300 group hover:bg-white/40 dark:hover:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    {group.category.includes('Backend') && <Database className="w-6 h-6" />}
                    {group.category.includes('Frontend') && <Layout className="w-6 h-6" />}
                    {group.category.includes('Cloud') && <Cloud className="w-6 h-6" />}
                    {group.category.includes('Architecture') && <Globe className="w-6 h-6" />}
                    {group.category.includes('Tools') && <Cpu className="w-6 h-6" />}
                    {!['Backend', 'Frontend', 'Cloud', 'Architecture', 'Tools'].some(cat => group.category.includes(cat)) && <Zap className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, sIdx) => (
                      <span key={sIdx} className="px-4 py-2 bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-xl text-sm border border-slate-300/50 dark:border-slate-700/50 group-hover:border-indigo-500/30 transition-all hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-4 bg-slate-100/50 dark:bg-slate-900/30 scroll-mt-16 transition-colors">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center mb-20 space-y-4 text-center">
              <span className="text-indigo-600 dark:text-indigo-500 font-bold tracking-widest uppercase text-sm">Career</span>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
              <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
            </div>
            <div className="relative border-l-2 border-indigo-600/20 pl-12 ml-4 md:ml-0">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.5)] dark:shadow-[0_0_20px_rgba(79,70,229,0.8)] border-4 border-slate-50 dark:border-slate-950"></div>
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{EXPERIENCE.role}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">{EXPERIENCE.company}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                        <span className="text-slate-500 dark:text-slate-500 font-medium">{EXPERIENCE.type}</span>
                      </div>
                    </div>
                    <span className="px-5 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-bold border border-indigo-500/20 self-start md:self-center">
                      {EXPERIENCE.period}
                    </span>
                  </div>
                  <ul className="space-y-4 max-w-4xl">
                    {EXPERIENCE.highlights.map((h, i) => (
                      <li key={i} className="flex gap-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                        <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-500 shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {HIGHLIGHTS.map((h, i) => (
                 <div key={i} className="flex items-center gap-4 p-5 bg-white dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/30 transition-colors group shadow-sm dark:shadow-none">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-snug">{h}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4 scroll-mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16 space-y-4 text-center">
              <span className="text-indigo-600 dark:text-indigo-500 font-bold tracking-widest uppercase text-sm">Showcase</span>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Impactful Projects</h2>
              <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="group flex flex-col h-full bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/30 hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-none">
                  <div className="h-56 bg-gradient-to-br from-indigo-50/80 to-slate-100 dark:from-indigo-950/80 dark:to-slate-950 flex items-center justify-center relative p-12">
                    <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="p-8 rounded-full bg-indigo-500/5 border border-indigo-500/10 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all duration-500">
                      {project.icon === 'signature' && <PenTool className="w-16 h-16 text-indigo-600/50 dark:text-indigo-400/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />}
                      {project.icon === 'users' && <Users className="w-16 h-16 text-indigo-600/50 dark:text-indigo-400/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />}
                      {project.icon === 'cpu' && <Cpu className="w-16 h-16 text-indigo-600/50 dark:text-indigo-400/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />}
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">{project.title}</h3>
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800/50 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-500/10 transition-all border border-slate-200 dark:border-slate-700/50">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-bold border border-indigo-500/10 uppercase tracking-wider">
                        {project.tech.split(',')[0]}
                      </span>
                      <span className="text-slate-500 text-xs font-medium">{project.tech.split(',').slice(1).join(', ')}</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow text-sm">
                      {project.description.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500 shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-slate-100 dark:bg-slate-800/50 hover:bg-indigo-600 text-slate-700 dark:text-slate-300 hover:text-white rounded-xl font-bold transition-all border border-slate-200 dark:border-slate-700/50 hover:border-indigo-600 text-center flex items-center justify-center gap-2"
                    >
                      Visit Product <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4 bg-indigo-600 relative overflow-hidden scroll-mt-16">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center space-y-10">
            <div className="space-y-4">
              <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-bold tracking-widest uppercase">Connectivity</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none">Let's build the <br/> future of SaaS.</h2>
            </div>
            <p className="text-indigo-100 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              Available for leadership roles, high-impact product engineering projects, or technical consulting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <a 
                href="mailto:rohitgarg892000@gmail.com"
                className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-600 hover:scale-105 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-2xl"
              >
                <Mail className="w-6 h-6" /> Get In Touch
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/rggarg/" target="_blank" rel="noopener noreferrer" className="p-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all border border-white/10 backdrop-blur-md">
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 px-4 transition-colors">
        <div className="max-w-7xl mx-auto">
          {/* Pre-footer Call to Action */}
          <div className="mb-24 p-8 md:p-12 rounded-[2.5rem] bg-indigo-600/5 dark:bg-indigo-500/5 border border-indigo-600/10 dark:border-indigo-500/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Ready to transform your ideas?</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Let's build a scalable, high-performance product together.</p>
            </div>
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-indigo-600/20 transition-all hover:scale-105"
            >
              Start Conversation <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            {/* Branding Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl text-white">RG</div>
                <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Rohit Garg</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Lead Product Engineer specializing in building enterprise-grade SaaS platforms with AI-powered automation and scalable backend architecture.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/rggarg/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all border border-slate-200 dark:border-slate-700">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:rohitgarg892000@gmail.com" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all border border-slate-200 dark:border-slate-700">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Explore</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      onClick={(e) => scrollToSection(e, link.toLowerCase())}
                      className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors inline-flex items-center gap-2 group"
                    >
                      <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Get in Touch</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:rohitgarg892000@gmail.com" className="text-slate-700 dark:text-slate-300 font-medium hover:text-indigo-600 transition-colors">rohitgarg892000@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">Remote / Global Delivery</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <FileText size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Career</p>
                    <button onClick={() => setIsResumeOpen(true)} className="text-slate-700 dark:text-slate-300 font-medium hover:text-indigo-600 transition-colors">View Professional CV</button>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA/Status Column */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Current Status</h4>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Available for Roles</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  Seeking high-impact opportunities where I can leverage my expertise in AI SaaS and Lead Product Engineering.
                </p>
                <a 
                  href="mailto:rohitgarg892000@gmail.com"
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-bold hover:gap-3 transition-all"
                >
                  Send Inquiry <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-slate-100 dark:border-slate-900 relative flex flex-col items-center justify-center gap-8">
            <p className="text-slate-500 dark:text-slate-600 text-[10px] font-bold tracking-[0.3em] uppercase text-center">
              © 2024 Rohit Garg. All rights reserved.
            </p>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="md:absolute md:right-0 p-4 bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-2xl transition-all hover:-translate-y-1 shadow-sm border border-slate-200 dark:border-slate-800"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </footer>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
