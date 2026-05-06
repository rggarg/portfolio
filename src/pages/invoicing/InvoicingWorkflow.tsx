import { useEffect } from 'react';
import { CustomCursor, ScrollProgress } from '../../components/Cursor';
import Footer from '../../components/Footer';

import InvoicingHero from './InvoicingHero';
import InvoicingMetrics from './InvoicingMetrics';
import InvoicingProblem from './InvoicingProblem';
import InvoicingTypes from './InvoicingTypes';
import InvoicingFlow from './InvoicingFlow';
import InvoicingSFDCObjects from './InvoicingSFDCObjects';
import InvoicingTechStack from './InvoicingTechStack';
import InvoicingChallenges from './InvoicingChallenges';
import InvoicingCTA from './InvoicingCTA';

export default function InvoicingWorkflow() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Invoicing & Financial Workflow System | Rohit Garg';
  }, []);

  // Reveal animation with MutationObserver to catch dynamically-rendered elements
  useEffect(() => {
    const observeEl = (el: Element, io: IntersectionObserver) => {
      if (!el.classList.contains('visible')) io.observe(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left').forEach((el) => observeEl(el, io));

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node as Element;
          if (el.matches?.('.reveal, .reveal-left')) observeEl(el, io);
          el.querySelectorAll?.('.reveal, .reveal-left').forEach((child) => observeEl(child, io));
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <div className="relative bg-primary text-text-main min-h-screen">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* ── Sections ── */}
      <InvoicingHero />
      <InvoicingMetrics />
      <InvoicingProblem />
      <InvoicingTypes />
      <InvoicingFlow />
      <InvoicingSFDCObjects />
      <InvoicingTechStack />
      <InvoicingChallenges />
      <InvoicingCTA />

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}
