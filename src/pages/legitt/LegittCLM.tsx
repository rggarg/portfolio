import { useEffect } from 'react';
import { CustomCursor, ScrollProgress } from '../../components/Cursor';
import Footer from '../../components/Footer';

import LegittHero from './LegittHero';
import LegittChallenge from './LegittChallenge';
import LegittLifecycle from './LegittLifecycle';
import LegittArchitecture from './LegittArchitecture';
import LegittModules from './LegittModules';
import LegittApproval from './LegittApproval';
import LegittIntegrations from './LegittIntegrations';
import LegittSecurity from './LegittSecurity';
import LegittImpact from './LegittImpact';
import LegittLearnings from './LegittLearnings';
import LegittCTA from './LegittCTA';

export default function LegittCLM() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Legitt AI - AI-Powered CLM Platform | Rohit Garg';
  }, []);

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
      { threshold: 0, rootMargin: '0px 0px -30px 0px' }
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
      <div className="noise-overlay" />
      <CustomCursor />
      <ScrollProgress />

      <LegittHero />
      <LegittChallenge />
      <LegittLifecycle />
      <LegittArchitecture />
      <LegittModules />
      <LegittApproval />
      <LegittIntegrations />
      <LegittSecurity />
      <LegittImpact />
      <LegittLearnings />
      <LegittCTA />

      <Footer />
    </div>
  );
}
