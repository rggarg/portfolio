import { useEffect } from 'react';
import { CustomCursor, ScrollProgress } from '../../components/Cursor';

import ESignHero from './ESignHero';
import ESignChallenge from './ESignChallenge';
import ESignMetrics from './ESignMetrics';
import ESignFeatures from './ESignFeatures';
import ESignFlow from './ESignFlow';
import ESignArchitecture from './ESignArchitecture';
import ESignTechHighlights from './ESignTechHighlights';
import ESignComparison from './ESignComparison';
import ESignLearnings from './ESignLearnings';
import ESignCTA from './ESignCTA';

export default function ESign() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Legitt AI E-Signature Platform | Rohit Garg';
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
      <ESignHero />
      <ESignChallenge />
      <ESignMetrics />
      <ESignFeatures />
      <ESignFlow />
      <ESignArchitecture />
      <ESignTechHighlights />
      <ESignComparison />
      <ESignLearnings />
      <ESignCTA />
    </div>
  );
}
