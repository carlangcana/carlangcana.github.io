import { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

// Positions match the large color regions of the original pink.jpeg.
const regions = [
  { name: 'pink', x: 0.02, y: 0.02 },
  { name: 'purple', x: 0.42, y: 0.02 },
  { name: 'magenta', x: 0.69, y: 0.01 },
  { name: 'yellow', x: 0.04, y: 0.97 },
  { name: 'cream', x: 0.30, y: 0.87 },
  { name: 'red', x: 0.98, y: 0.98 },
];

export default function InteractiveBackground() {
  const background = useRef(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const layers = [...background.current.children];
    let frame = 0;
    let pointer = null;

    const update = () => {
      frame = 0;
      const width = window.innerWidth;
      const height = window.innerHeight;
      layers.forEach((layer, index) => {
        const region = regions[index];
        const dx = pointer ? pointer.x - region.x * width : 0;
        const dy = pointer ? pointer.y - region.y * height : 0;
        // A broad pull makes the response visible; nearby regions follow most strongly.
        const distance = Math.hypot(dx / width, dy / height);
        const influence = Math.max(0, 1 - distance / 1.2);
        const pull = motion.matches ? 0 : 0.18 + influence * influence * 0.72;
        layer.style.setProperty('--pull-x', `${dx * pull}px`);
        layer.style.setProperty('--pull-y', `${dy * pull}px`);
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const move = event => {
      if (event.pointerType === 'touch') return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    };
    const reset = () => { pointer = null; schedule(); };
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    window.addEventListener('resize', reset);
    motion.addEventListener('change', reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', reset);
      window.removeEventListener('blur', reset);
      window.removeEventListener('resize', reset);
      motion.removeEventListener('change', reset);
    };
  }, []);

  return (
    <div ref={background} className="interactive-background" aria-hidden="true">
      {regions.map(region => <span key={region.name} className={`color-region color-region--${region.name}`} />)}
    </div>
  );
}
