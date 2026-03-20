import React, { useEffect, useRef } from 'react';

export function useScrollReveal(options: { threshold?: number, rootMargin?: string } = {}) {
 const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options;

 useEffect(() => {
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 entry.target.classList.add('visible');
 }
 });
 },
 { threshold, rootMargin }
 );

 const elements = document.querySelectorAll('.reveal, .reveal-left');
 elements.forEach((el) => observer.observe(el));

 return () => observer.disconnect();
 }, [threshold, rootMargin]);
}

export function useElementReveal(ref: React.RefObject<Element>, options: { threshold?: number } = {}) {
 const { threshold = 0.1 } = options;

 useEffect(() => {
 if (!ref.current) return;

 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 entry.target.classList.add('visible');
 }
 });
 },
 { threshold }
 );

 observer.observe(ref.current);
 return () => observer.disconnect();
 }, [ref, threshold]);
}
