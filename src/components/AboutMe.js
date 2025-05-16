import React from "react";
import Navigation from "./Navigation";
import SnowboardingStats from "./SnowboardingStats";

const AboutMe = () => {

  return (
    <div>
      {/* Navigation */}
      <Navigation />

      {/* About Me Content */}
      <div className="grid grid-cols-12 px-10 mb-20">
        <div className="col-span-12 lg:col-start-3 lg:col-span-8">
          <h1 className="text-4xl mb-8 font-bold text-center">About Me</h1>

          <div className="flex flex-col md:flex-row gap-10 mb-12">
            <div className="md:w-1/3">
              <img
                className="rounded-lg w-full shadow-lg"
                src="https://i.pravatar.cc/400"
                alt="Spencer Renfro"
              />
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl mb-4 font-semibold">Spencer Renfro</h2>
              <p className="mb-4 text-lg">
                I am a passionate front-end developer with a strong foundation in React, HTML, CSS, and JavaScript.
                I enjoy creating responsive, user-friendly web applications that solve real-world problems.
              </p>
              <p className="mb-4 text-lg">
                With a background in [your background], I bring a unique perspective to my development work.
                I'm constantly learning and expanding my skills to stay current with the latest technologies and best practices.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-2xl mb-6 font-semibold">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
                <p className="font-medium text-gray-800 dark:text-white">React</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
                <p className="font-medium text-gray-800 dark:text-white">JavaScript</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
                <p className="font-medium text-gray-800 dark:text-white">Java</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
                <p className="font-medium text-gray-800 dark:text-white">SQL</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
                <p className="font-medium text-gray-800 dark:text-white">Firebase</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
                <p className="font-medium text-gray-800 dark:text-white">HTML5</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
                <p className="font-medium text-gray-800 dark:text-white">CSS3</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
                <p className="font-medium text-gray-800 dark:text-white">Tailwind CSS</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
                <p className="font-medium text-gray-800 dark:text-white">Git</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-12">
            <h2 className="text-2xl mb-6 font-semibold">Experience</h2>
            <div className="mb-6 border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-medium">Front-End Developer</h3>
              <p className="text-slate-400">Company Name | 2021 - Present</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Developed responsive web applications using React and Tailwind CSS</li>
                <li>Collaborated with design team to implement UI/UX improvements</li>
                <li>Optimized application performance and loading times</li>
              </ul>
            </div>
            <div className="mb-6 border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-medium">Web Developer Intern</h3>
              <p className="text-slate-400">Previous Company | 2020 - 2021</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Assisted in developing and maintaining company website</li>
                <li>Learned modern web development practices and tools</li>
                <li>Participated in code reviews and team meetings</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <h2 className="text-2xl mb-6 font-semibold">Education</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium">Bachelor's Degree in Computer Science</h3>
              <p className="text-slate-400">University Name | 2016 - 2020</p>
              <p className="mt-2">Focused on web development and user interface design. Graduated with honors.</p>
              <div className="mt-4">
                <a
                  href="/files/resume.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>

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
      <div className="max-w-full mx-auto text-center border-t border-slate-700 py-5">
        <div className="flex justify-center items-center gap-8 mb-4">
          <a
            href="https://www.linkedin.com/in/spencer-renfro-854b22174/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/images/linkedin.svg" alt="LinkedIn Logo" width="24" height="24" />
          </a>
          <a
            href="https://github.com/SpencerwRenfro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/images/github.svg" alt="GitHub Logo" width="24" height="24" />
          </a>
          <a
            href="mailto:your_email@example.com"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/images/email.svg" alt="Email Icon" width="24" height="24" />
          </a>
        </div>
        <p className="text-slate-500">&copy; {new Date().getFullYear()} Spencer Renfro</p>
      </div>
    </div>
  );
};

export default AboutMe;



