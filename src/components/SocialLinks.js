import React from "react";

function SocialLinks() {
  return (
    <div className="flex justify-center items-center gap-8 mb-4">
      <a
        href="https://www.linkedin.com/in/spencer-renfro-854b22174/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src="/images/linkedin.svg"
          alt="LinkedIn Logo"
          width="24"
          height="24"
        />
      </a>
      <a
        href="https://github.com/SpencerwRenfro"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src="/images/github.svg"
          alt="GitHub Logo"
          width="24"
          height="24"
        />
      </a>
      <a
        href="mailto:your_email@example.com"
        className="hover:opacity-80 transition-opacity"
      >
        <img src="/images/email.svg" alt="Email Icon" width="24" height="24" />
      </a>
    </div>
  );
}

export default SocialLinks;
