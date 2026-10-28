import { useEffect } from 'react';
import './Surprise.css';

const colors = ['#ff679f', '#ffd467', '#9c8bff', '#75dfc2', '#79c8ff'];

export default function Surprise({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 8000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="surprise" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <div className="balloon-flight" key={`b${i}`} style={{ left: `${4 + i * 8}%`, '--delay': `${(i % 4) * 0.35}s`, '--duration': `${5 + (i % 3) * 0.5}s`, '--drift': `${(i % 2 ? 1 : -1) * (35 + i * 4)}px` }}>
          <span className="balloon" style={{ '--color': colors[i % colors.length] }} />
        </div>
      ))}
      {Array.from({ length: 90 }, (_, i) => (
        <span className="confetti" key={`c${i}`} style={{ left: `${(i * 37) % 100}%`, '--color': colors[i % colors.length], '--delay': `${(i % 17) * 0.11}s`, '--duration': `${3 + (i % 7) * 0.4}s`, '--drift': `${((i * 41) % 260) - 130}px`, '--turn': `${i % 2 ? 720 : -720}deg` }} />
      ))}
    </div>
  );
}
