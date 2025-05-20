import React from 'react'

function Experience() {
  return (
    <div className="mb-12">
    <h2 className="text-2xl mb-6 font-semibold">Experience</h2>
    <div className="mb-6 border-l-4 border-blue-500 pl-4">
      <h3 className="text-xl font-medium">Front-End Developer</h3>
      <p className="text-gray-500 dark:text-slate-400">
        Company Name | 2021 - Present
      </p>
      <ul className="list-disc ml-5 mt-2">
        <li>
          Developed responsive web applications using React and Tailwind
          CSS
        </li>
        <li>
          Collaborated with design team to implement UI/UX improvements
        </li>
        <li>Optimized application performance and loading times</li>
      </ul>
    </div>
    <div className="mb-6 border-l-4 border-blue-500 pl-4">
      <h3 className="text-xl font-medium">Web Developer Intern</h3>
      <p className="text-gray-500 dark:text-slate-400">
        Previous Company | 2020 - 2021
      </p>
      <ul className="list-disc ml-5 mt-2">
        <li>Assisted in developing and maintaining company website</li>
        <li>Learned modern web development practices and tools</li>
        <li>Participated in code reviews and team meetings</li>
      </ul>
    </div>
  </div>
  )
}

export default Experience