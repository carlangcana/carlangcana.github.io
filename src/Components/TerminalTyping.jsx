import { useEffect, useRef, useState } from 'react';
import './TerminalTyping.css';

export default function TerminalTyping({ children }) {
  const content = useRef(null);
  const cursor = useRef(null);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const root = content.current;
    cursor.current = document.createElement('span');
    cursor.current.className = 'typing-cursor';
    cursor.current.setAttribute('aria-hidden', 'true');
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      nodes.push({ node: walker.currentNode, text: walker.currentNode.textContent });
    }
    const total = nodes.reduce((sum, item) => sum + item.text.length, 0);
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    let start;
    const restore = () => nodes.forEach(({ node, text }) => { node.textContent = text; });
    const finish = () => {
      cancelAnimationFrame(frame);
      restore();
      cursor.current?.remove();
      setTyping(false);
    };
    const tick = now => {
      start ??= now;
      let remaining = Math.floor((now - start) / Math.max(8, Math.min(22, 4500 / Math.max(total, 1))));
      let active;
      nodes.forEach(({ node, text }) => {
        const length = Math.min(text.length, Math.max(remaining, 0));
        node.textContent = text.slice(0, length);
        if (remaining >= 0 && remaining < text.length && !active) active = node;
        remaining -= text.length;
      });
      if (remaining >= 0) { finish(); return; }
      if (active) active.after(cursor.current);
      frame = requestAnimationFrame(tick);
    };
    setTyping(true);
    if (motion.matches || !total) finish();
    else {
      nodes.forEach(({ node }) => { node.textContent = ''; });
      frame = requestAnimationFrame(tick);
    }
    const change = () => { if (motion.matches) finish(); };
    motion.addEventListener('change', change);
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener('change', change);
      restore();
      cursor.current?.remove();
    };
  }, []);

  return (
    <div className="terminal-typing" aria-busy={typing}>
      <div ref={content}>{children}</div>
    </div>
  );
}
