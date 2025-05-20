import CodingProjects from "./CodingProjects";
import SocialLinks from "./SocialLinks";

const Home = () => {
  const projects = [
    {
      title: "Scanner App",
      link: "",
      gitHubLink: "https://github.com/SpencerRenfro/Scanner_App",
      img: "/images/barcode.png",
      description: "A mobile-friendly app for scanning and organizing documents with OCR capabilities."
    },
    {
      title: "Polytopia Calculator",
      link: "https://mypolytopiacalculator.com/",
      gitHubLink: "https://github.com/SpencerRenfro/React_Polytopia",
      img: "/images/polytopia.png",
      description: "A strategic calculator tool for the popular mobile game Polytopia, helping players optimize their gameplay."
    },
    {
      title: "Guest House Counseling",
      link: "http://mypolytopia.s3-website.us-east-2.amazonaws.com/",
      gitHubLink: "https://github.com/SpencerwRenfro/React-Polytopia",
      img: "/images/guesthouse.png",
      description: "A responsive website for a counseling practice, featuring appointment scheduling and resource library."
    },
    {
      title: "Digital Business Card",
      link: "https://myreactbusinesscard.com/",
      gitHubLink: "https://github.com/SpencerRenfro/BusinessCard",
      img: "/images/businesscard.png",
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
      <div className="grid grid-cols-12 mx-auto py-2 mb-20">
        <div className="col-span-12 px-4 md:px-0 md:col-start-3 md:col-span-8">
          <h3 className="uppercase text-lg tracking-widest font-medium mb-8 text-center md:text-left">
            My Projects
          </h3>
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg border border-slate-700 rounded-sm mb-5"
            >
              <div className="card-body p-4">
                {/* Project header and buttons - responsive layout */}
                <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-2">
                  {/* Project title and icon - always in a row */}
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <img className="w-12 h-12 flex-shrink-0" src={project.img} alt={`${project.title} Logo`} />
                    <p className="text-xl font-medium">{project.title}</p>
                  </div>

                  {/* Buttons - stacked on mobile, side by side on desktop */}
                  <div className="flex flex-col sm:flex-row gap-2 md:ml-auto">
                    <a
                      className="btn btn-primary text-xs py-2 px-4 text-center"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                    <a
                      className="btn btn-outline text-xs py-2 px-4 text-center"
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>

                {project.description && (
                  <p className="text-slate-400 text-sm mt-2">{project.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="max-w-full mx-auto text-center border-t border-slate-700 py-5">
        <p className="text-slate-500">&copy; {new Date().getFullYear()} Spencer Renfro</p>
      </div>
    </div>
  );
};

export default Home;








