import { useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './PhotoViewer.css';

export default function PhotoViewer({ src, alt, caption, width, height, fullSrc = src }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const titleId = useId();

  const enlarge = () => {
    setOpen(true);
    dialog.current.showModal();
  };

  return (
    <>
      <figure className="photo-viewer-figure">
        <button className="photo-viewer-preview" type="button" onClick={enlarge} aria-label={`Enlarge: ${alt}`}>
          <img src={src} alt={alt} width={width} height={height} />
        </button>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      {createPortal(
        <dialog
          ref={dialog}
          className="photo-viewer"
          aria-labelledby={titleId}
          onClose={() => setOpen(false)}
          onClick={event => { if (event.target === event.currentTarget) dialog.current.close(); }}
        >
          <span id={titleId} className="photo-viewer-label">{alt}</span>
          {open && <div className="photo-viewer-content">
            <button type="button" className="photo-viewer-close" onClick={() => dialog.current.close()} autoFocus aria-label="Close photo viewer">×</button>
            <img src={fullSrc} alt={alt} />
          </div>}
        </dialog>, document.body
      )}
    </>
  );
}
