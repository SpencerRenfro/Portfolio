import React from 'react'

function CodingProjects() {
    const projects = [
        {
          title: "Scanner App",
          link: "https://scanner-app.example.com/",
          gitHubLink: "https://github.com/SpencerRenfro/Scanner_App",
          img: "/images/barcode.png",
          description: "A mobile-friendly app for scanning and organizing documents with OCR capabilities.",
          hideViewProject: true
        },
        {
          title: "Polytopia Calculator",
          link: "https://mypolytopiacalculator.com/",
          gitHubLink: "https://github.com/SpencerRenfro/React_Polytopia",
          img: "/images/polytopia.png",
          description: "A strategic calculator tool for the popular mobile game Polytopia, helping players optimize their gameplay."
        },
        // {
        //   title: "Guest House Counseling",
        //   link: "http://mypolytopia.s3-website.us-east-2.amazonaws.com/",
        //   gitHubLink: "https://github.com/SpencerwRenfro/React-Polytopia",
        //   img: "/images/guesthouse.png",
        //   description: "A responsive website for a counseling practice, featuring appointment scheduling and resource library.",
        //   hideViewProject: true
        // },
        {
          title: "Digital Business Card",
          link: "https://myreactbusinesscard.com/",
          gitHubLink: "https://github.com/SpencerRenfro/React_Business_Card",
          img: "/images/businesscard.png",
          description: "A modern digital business card application with QR code generation and contact information sharing."
        },
      ];
  return (
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
                {!project.hideViewProject && (
                  <a
                    className="btn btn-primary text-xs py-2 px-4 text-center"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
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
  )
}

export default CodingProjects