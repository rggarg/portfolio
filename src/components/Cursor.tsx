import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
 const dotRef = useRef(null);
 const ringRef = useRef(null);
 const pos = useRef({ x: 0, y: 0 });
 const ring = useRef({ x: 0, y: 0 });
 const raf = useRef(null);

 useEffect(() => {
 const move = (e) => {
 pos.current = { x: e.clientX, y: e.clientY };
 if (dotRef.current) {
 dotRef.current.style.left = e.clientX + 'px';
 dotRef.current.style.top = e.clientY + 'px';
 }
 };

 const animate = () => {
 ring.current.x += (pos.current.x - ring.current.x) * 0.12;
 ring.current.y += (pos.current.y - ring.current.y) * 0.12;
 if (ringRef.current) {
 ringRef.current.style.left = ring.current.x + 'px';
 ringRef.current.style.top = ring.current.y + 'px';
 }
 raf.current = requestAnimationFrame(animate);
 };

 const hoverIn = () => document.body.classList.add('cursor-hover');
 const hoverOut = () => document.body.classList.remove('cursor-hover');

 document.addEventListener('mousemove', move);
 document.querySelectorAll('a, button').forEach(el => {
 el.addEventListener('mouseenter', hoverIn);
 el.addEventListener('mouseleave', hoverOut);
 });

 raf.current = requestAnimationFrame(animate);
 return () => {
 document.removeEventListener('mousemove', move);
 cancelAnimationFrame(raf.current);
 };
 }, []);

 return (
 <>
 <div id="cursor-dot" ref={dotRef} />
 <div id="cursor-ring" ref={ringRef} />
 </>
 );
}

export function ScrollProgress() {
 const [progress, setProgress] = useState(0);

 useEffect(() => {
 const update = () => {
 const scrollTop = window.scrollY;
 const docHeight = document.documentElement.scrollHeight - window.innerHeight;
 setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
 };
 window.addEventListener('scroll', update, { passive: true });
 return () => window.removeEventListener('scroll', update);
 }, []);

 return (
 <div
 id="scroll-progress"
 style={{ width: `${progress}%` }}
 />
 );
}
