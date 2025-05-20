import CodingProjects from "./CodingProjects";
import SocialLinks from "./SocialLinks";

const Home = () => {
  const projects = [
    {
      title: "Scanner App",
      link: "https://scanner-app.example.com/",
      gitHubLink: "https://github.com/SpencerwRenfro/scanner-app",
      img: "/images/scanner.svg",
      description: "A mobile-friendly app for scanning and organizing documents with OCR capabilities."
    },
    {
      title: "Polytopia Calculator",
      link: "http://mypolytopia.s3-website.us-east-2.amazonaws.com/",
      gitHubLink: "https://github.com/SpencerwRenfro/React-Polytopia",
      img: "/images/polytopia.svg",
      description: "A strategic calculator tool for the popular mobile game Polytopia, helping players optimize their gameplay."
    },
    {
      title: "Guest House Counseling",
      link: "http://mypolytopia.s3-website.us-east-2.amazonaws.com/",
      gitHubLink: "https://github.com/SpencerwRenfro/React-Polytopia",
      img: "/images/guesthouse.svg",
      description: "A responsive website for a counseling practice, featuring appointment scheduling and resource library."
    },
    {
      title: "Digital Business Card",
      link: "http://mypolytopia.s3-website.us-east-2.amazonaws.com/",
      gitHubLink: "https://github.com/SpencerwRenfro/React-Polytopia",
      img: "/images/businesscard.svg",
      description: "A modern digital business card application with QR code generation and contact information sharing."
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="grid grid-cols-12 px-10 pt-10 mb-20">
        <div className="col-span-12 lg:col-start-3 lg:col-span-8 text-center">
  
          <h1 className="text-5xl mb-3 font-extrabold">Spencer Renfro</h1>
          <h2 className="mb-8 text-3xl uppercase tracking-widest font-light">
            Front-End Developer
          </h2>
          <p className="text-center text-xl mb-8 leading-8">
            I am a motivated and capable front-end developer who brings a strong
            foundation in React, HTML, CSS, and JavaScript to any team.
          </p>
          <SocialLinks />
        </div>
      </div>

      {/* Projects Section */}
      <CodingProjects />

      {/* Footer Section */}
      <div className="max-w-full mx-auto text-center border-t border-slate-700 py-5">
        <p className="text-slate-500">&copy; {new Date().getFullYear()} Spencer Renfro</p>
      </div>
    </div>
  );
};

export default Home;
