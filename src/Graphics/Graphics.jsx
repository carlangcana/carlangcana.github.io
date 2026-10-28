import PhotoViewer from '../Components/PhotoViewer';

export default function Graphics() {
  return (
    <>
      <h3>Seminar Posters</h3>
      <p>Here are some of the posters I've designed for various seminars and events.</p>
      <PhotoViewer
        src="/graphics/posters.png"
        alt="Collection of six Institute of Computer Science posters for seminars, webinars, and a research symposium."
        caption="Year updated: 2026"
        width={1108}
        height={889}
      />

      <hr style={{ border: 0, borderTop: '1px solid #ffffff20', margin: '24px 0' }} />

      <h3>Social Media Graphics</h3>
      <p>Here are some of the graphics I've designed for social media campaigns.</p>
      <PhotoViewer
        src="/graphics/pubmat.png"
        alt="Collection of social media graphics for various marketing campaigns."
        caption="Year updated: 2026"
        width={1108}
        height={889}
      />
    </>
  );
}
