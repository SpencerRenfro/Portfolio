import React from "react";
import SocialLinks from "../SocialLinks";

function Footer() {
  return (
    <div className="max-w-full mx-auto text-center border-t border-gray-200 dark:border-slate-700 py-5">
      <SocialLinks />
      <p className="text-gray-500 dark:text-slate-500">
        &copy; {new Date().getFullYear()} Spencer Renfro
      </p>
    </div>
  );
}

export default Footer;
