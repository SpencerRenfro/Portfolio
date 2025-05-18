const NavButton = ({ label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`py-3 px-4 text-sm font-medium border-r border-b border-gray-200 dark:border-slate-700 transition-colors ${
        active
          ? "text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800 border-b-transparent"
          : "text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white bg-gray-50 dark:bg-slate-900"
      }`}
    >
      {label}
    </button>
  );
  
  export default NavButton;
  