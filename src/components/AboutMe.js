import React from "react";
import SnowboardingStats from "./SnowboardingStats";
import MilitaryService from "./MilitaryService";
import CodingSkills from "./CodingSkills";
import Footer from "./ui/Footer";
import PreloadedImage from "./ui/PreloadedImage";

const AboutMe = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white">
      {/* About Me Content */}
      <div className="grid grid-cols-12 px-10 mb-20">
        <div className="col-span-12 lg:col-start-3 lg:col-span-8">
          <h1 className="text-4xl mb-8 font-bold text-center">About Me</h1>
          <div className="flex flex-col md:flex-row gap-10 mb-12">
            <div className="md:w-1/3 flex justify-center">
              <PreloadedImage
                className="rounded-lg w-48 md:w-56 lg:w-64 shadow-lg"
                src="/images/Headshot.png"
                alt="Spencer Renfro"
              />
            </div>
            <div className="md:w-2/3">
              <p className="mb-4 text-lg">
                I am a passionate front-end developer with a strong foundation
                in React, HTML, CSS, and JavaScript. I enjoy creating
                responsive, user-friendly web applications that solve real-world
                problems.
              </p>
              <p className="mb-4 text-lg">
                With a background in military service and aerospace technology,
                I bring a unique perspective to my development work. I'm
                constantly learning and expanding my skills to stay current with
                the latest technologies and best practices.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <CodingSkills />

          {/* Experience Section */}

          {/* Education Section */}
          <div className="mb-12">
            <h2 className="text-2xl mb-6 font-semibold">Education</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium">
                Bachelor's Degree in Computer Science
              </h3>
              <p className="text-gray-500 dark:text-slate-400">
                University of Maryland | 2022 - 2026
              </p>
              {/* <p className="mt-2">
                Focused on web development and user interface design. Graduated
                with honors.
              </p> */}
              <div className="mt-4 download-resume-container">
                <a
                  href="/files/resume.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          {/* Military Service Section */}
          <MilitaryService />
          {/* Interests Section */}
          <div className="mb-12">
            <h2 className="text-2xl mb-6 font-semibold">Interests</h2>
            <p className="text-lg mb-4">
              When I'm not coding, you can find me:
            </p>
            <ul className="list-disc ml-5">
              <li className="mb-2">Hiking in the mountains</li>
              <li className="mb-2">Reading books on technology and design</li>
              <li className="mb-2">Playing guitar</li>
              <li className="mb-2">Exploring new coffee shops</li>
              <li className="mb-2">Snowboarding</li>
            </ul>
            {/* Snowboarding Stats */}
            <SnowboardingStats />
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};
export default AboutMe;
