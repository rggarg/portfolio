import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CustomCursor, ScrollProgress } from './components/Cursor';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
 useScrollReveal();

 // Re-observe after each section mounts
 useEffect(() => {
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) entry.target.classList.add('visible');
 });
 },
 { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
 );

 const elements = document.querySelectorAll('.reveal, .reveal-left');
 elements.forEach((el) => observer.observe(el));
 return () => observer.disconnect();
 }, []);

 return (
 <div className="relative bg-primary text-text-main min-h-screen">
 {/* Noise overlay */}
 <div className="noise-overlay" />

 {/* Custom cursor */}
 <CustomCursor />

 {/* Scroll progress bar */}
 <ScrollProgress />

 {/* Navigation */}
 <Navbar />

 {/* Main content */}
 <main>
 <Hero />
 <About />
 <Skills />
 <Experience />
 <Projects />
 <Achievements />
 <Contact />
 </main>

 <Footer />
 </div>
 );
}
