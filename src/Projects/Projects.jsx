import PhotoViewer from '../Components/PhotoViewer';

export default function Projects() {
  return (
    <>
      <h3>Web Development</h3>
      <p style={{ textAlign: 'justify' }}>PROJX: A cloud-enabled project information system, and an employee-informed cloud adoption framework developed from an examination of these operational challenges. ProjX centralizes project records, supports searchable and filterable access to information, and enables remote access to project information and reports.</p>
      <p>Tech Stack: React, Node.js, MongoDB</p>
      <p></p>

      <PhotoViewer
        src="/projects/projx.png"
        alt="Screenshot of the PROJX web application, showing a dashboard with project management features."
        caption="Year updated: 2025. It will also be presented at the 12th International HCI and UX Conference in Indonesia (CHIUXiD 2026) on December 4, 2026."
        width={1108}
        height={889}
      />

      <hr style={{ border: 0, borderTop: '1px solid #ffffff20', margin: '24px 0' }} />
      <p style={{ textAlign: 'justify' }}>
        TrenXOR: A web-based platform that analyzes short-form videos and providing insights and actionable feedback tailored to creator profiles.
      </p>

      <p>Preview unavailable pending research publication by 2027</p>

      <p>
        Tech Stack: React, TypeScript, Node.js, MongoDB, Computer Vision,
        Large Language Models, and Machine Learning
      </p>
      
      <hr style={{ border: 0, borderTop: '1px solid #ffffff20', margin: '24px 0' }} /> 

      <p style={{ textAlign: 'justify' }}>Assessmates: A web-based, peer-to-peer classroom assessment platform that allows students to evaluate each other's work and provide constructive feedback. It aims to enhance the learning experience by promoting collaboration and critical thinking among students.</p>
      <p>Tech Stack: React, Node.js, MongoDB, Google API</p>
      <PhotoViewer 
        src="/projects/assessmates.png"
        alt="Screenshot of the Assessmates web application, showing a dashboard with peer assessment features."
        caption="Year updated: 2025"
        width={1108}
        height={889}
      />

      <hr style={{ border: 0, borderTop: '1px solid #ffffff20', margin: '24px 0' }} /> 

      <h3>Mobile Development</h3>
      <p style={{ textAlign: 'justify' }}>Rasem Lenayah Mobile Application: A mobile-first solution for managing and tracking healthcare employees on the go.</p>
      <p>Tech Stack: Flutter, Dart, Firebase</p>
      <PhotoViewer
        src="/projects/rasem.png"
        alt="Screenshot of the Rasem Lenayah mobile application, showing a dashboard with project management features."
        caption="Year updated: 2023. Deployed on the Google Play Store but currently unavailable due to a change in the app's purpose."
        width={1108}
        height={889}
      />
      
      <hr style={{ border: 0, borderTop: '1px solid #ffffff20', margin: '24px 0' }} /> 

      <h3>Figma Prototypes</h3>
      <p style={{ textAlign: 'justify' }}>Meowtify: Meowtify functions as a platform for disseminating cat-related information and assigns multiple roles to its users. It broadens participation in animal welfare by enabling community members, in addition to formal rescue groups, to contribute to visibility, reporting, and potential rehoming efforts.</p>
        <PhotoViewer
          src="/projects/meowtify.png"
          alt="Screenshot of the Meowtify Figma prototype, showing a dashboard with cat-related information and user roles."
          caption="Year updated: 2025. Published at the Proceedings of the International Conference on Human-Engaged Computing (ICHEC 2025), Association for Computing Machinery (ACM)."
          width={1108}
          height={889}
        />
    </>
  );
}
