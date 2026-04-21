import { useEffect } from 'react';
import { CustomCursor, ScrollProgress } from '../../components/Cursor';
import Footer from '../../components/Footer';

import TipTapHero from './TipTapHero';
import TipTapWhyTipTap from './TipTapWhyTipTap';
import TipTapArchitecture from './TipTapArchitecture';
import TipTapExtensions from './TipTapExtensions';
import TipTapFormatPipeline from './TipTapFormatPipeline';
import TipTapPerformance from './TipTapPerformance';
import TipTapDatabase from './TipTapDatabase';
import TipTapChallenges from './TipTapChallenges';
import TipTapMetrics from './TipTapMetrics';
import TipTapLearnings from './TipTapLearnings';
import TipTapCTA from './TipTapCTA';

export default function TipTap() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Collaborative Contract Editor with Redlining | Rohit Garg';
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
      <TipTapHero />
      <TipTapWhyTipTap />
      <TipTapArchitecture />
      <TipTapExtensions />
      <TipTapFormatPipeline />
      <TipTapPerformance />
      <TipTapDatabase />
      <TipTapChallenges />
      <TipTapMetrics />
      <TipTapLearnings />
      <TipTapCTA />

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}
