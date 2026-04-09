import { useState, useEffect } from 'react';
import { personalInfo } from '../../../data/portfolio';

const navLinks = [
 { label: 'About', href: '#about' },
 { label: 'Skills', href: '#skills' },
 { label: 'Experience', href: '#experience' },
 { label: 'Projects', href: '#projects' },
 { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);
 const [activeSection, setActiveSection] = useState('');

 useEffect(() => {
 const handleScroll = () => {
 setScrolled(window.scrollY > 50);

 // Active section detection
 const sections = navLinks.map(l => l.href.replace('#', ''));
 for (let i = sections.length - 1; i >= 0; i--) {
 const el = document.getElementById(sections[i]);
 if (el && el.getBoundingClientRect().top <= 120) {
 setActiveSection(sections[i]);
 break;
 }
 }
 };

 window.addEventListener('scroll', handleScroll, { passive: true });
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const handleNavClick = (href) => {
 setMenuOpen(false);
 const el = document.querySelector(href);
 if (el) el.scrollIntoView({ behavior: 'smooth' });
 };

 return (
 <>
 <nav
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
 scrolled
 ? 'bg-primary/90 backdrop-blur-xl border-b border-border/50 py-4'
 : 'py-6'
 }`}
 >
 <div className="section-container flex items-center justify-between">
 {/* Logo */}
 <a
 href="#hero"
 onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
 className="flex items-center gap-2 group"
 >
 <div className="w-8 h-8 rounded bg-accent/10 border border-accent/30 flex items-center justify-center transition-all group-hover:bg-accent/20 group-hover:border-accent">
 <span className=" text-accent text-description font-bold">{'>_'}</span>
 </div>
 <span className=" font-bold text-title text-text-main tracking-tight">
 Rohit<span className="text-accent">.</span>
 </span>
 </a>

 {/* Desktop Nav */}
 <ul className="hidden md:flex items-center gap-8">
 {navLinks.map((link) => {
 const section = link.href.replace('#', '');
 const isActive = activeSection === section;
 return (
 <li key={link.href}>
 <a
 href={link.href}
 onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
 className={` text-description tracking-widest uppercase transition-all duration-200 relative ${
 isActive ? 'text-accent' : 'text-text-dim hover:text-text-main'
 }`}
 >
 {link.label}
 {isActive && (
 <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent rounded-full" />
 )}
 </a>
 </li>
 );
 })}
 </ul>

 {/* CTA + Mobile Burger */}
 <div className="flex items-center gap-4">
 <a
 href={personalInfo.resume}
 target="_blank"
 rel="noreferrer"
 className="hidden md:flex btn-ghost text-description py-2.5 px-5"
 >
 Resume ↗
 </a>

 {/* Hamburger */}
 <button
 onClick={() => setMenuOpen(!menuOpen)}
 className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 group"
 aria-label="Toggle menu"
 >
 <span className={`block w-5 h-px bg-text-main transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
 <span className={`block w-5 h-px bg-text-main transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
 <span className={`block w-5 h-px bg-text-main transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
 </button>
 </div>
 </div>
 </nav>

 {/* Mobile Menu */}
 <div
 className={`fixed inset-0 z-40 bg-primary/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ${
 menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
 }`}
 >
 <ul className="flex flex-col items-center gap-8">
 {navLinks.map((link, i) => (
 <li
 key={link.href}
 style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
 className={`transition-all duration-400 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
 >
 <a
 href={link.href}
 onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
 className=" font-bold text-heading text-text-main hover:text-accent transition-colors"
 >
 {link.label}
 </a>
 </li>
 ))}
 <li className="mt-4">
 <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn-ghost">
 Resume ↗
 </a>
 </li>
 </ul>
 </div>
 </>
 );
}
