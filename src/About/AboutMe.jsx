import './AboutMe.css';

export default function AboutMe() {
  return (
    <>
      <h3>Hello, I'm Carl.</h3>
      <p>
        I'm an educator and software developer who's into coffee, cats,
        and urban skating—though the skating is still a work in progress.
      </p>

      <a
        href={`${import.meta.env.BASE_URL}Angcana_CV.pdf`}
        download="Angcana_CV.pdf"
        style={{
          display: 'inline-block',
          marginTop: '8px',
          color: '#70e0ba',
          textUnderlineOffset: '4px',
        }}
      >
        Download my latest CV ↓
      </a>

      <hr
        style={{
          border: 0,
          borderTop: '1px solid #ffffff20',
          margin: '24px 0',
        }}
      />

      <section className="toolkit" aria-labelledby="toolkit-title">
        <h3 id="toolkit-title">
          <span className="toolkit-prompt" aria-hidden="true">$ </span>
          cat toolkit.txt
        </h3>

        <dl className="toolkit-list">
          <div>
            <dt>web</dt>
            <dd>
              <strong>My main workspace.</strong>
              <span>MERN stack · PHP + MySQL</span>
            </dd>
          </div>

          <div>
            <dt>integrations</dt>
            <dd>
              <strong>Connecting the pieces.</strong>
              <span>Google APIs · AWS cloud services</span>
            </dd>
          </div>

          <div>
            <dt>design</dt>
            <dd>
              <strong>I love experimenting with pixels.</strong>
              <span>Canva · Photoshop</span>
            </dd>
          </div>

          <div>
            <dt>mobile</dt>
            <dd>
              <strong>Intermediate, still sharpening this one.</strong>
              <span>Flutter · React Native</span>
            </dd>
          </div>

          <div>
            <dt>teaching</dt>
            <dd>
              <strong>Code, then explain why it works.</strong>
              <span>Programming fundamentals · OOP · Programming languages</span>
            </dd>
          </div>
        </dl>
      </section>

       {/* <hr
        style={{
          border: 0,
          borderTop: '1px solid #ffffff20',
          margin: '24px 0',
        }}
      /> */}

      <h3>Beyond the code</h3>
      <p>
        Maybe you'll find me urban skating when I'm away from the keyboard.
      </p>

      <img
        src={`${import.meta.env.BASE_URL}carlskater.gif`}
        alt="Carl urban skating"
        loading="lazy"
        style={{
          display: 'block',
          width: '50%',
          height: 'auto',
          borderRadius: '12px',
          margin: '16px auto 24px',
        }}
      />

      <a
        href="https://www.linkedin.com/in/carloangcana/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect with me on LinkedIn ↗
      </a>
      <br />
      <a
        href="https://www.credly.com/users/carl-angelo-angcana"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore my badges on Credly ↗
      </a>

      <hr
        style={{
          border: 0,
          borderTop: '1px solid #ffffff20',
          margin: '24px 0',
        }}
      />

      <p>This web-portfolio is created by Carl Angelo G. Angcana</p>

    </>
  );
}