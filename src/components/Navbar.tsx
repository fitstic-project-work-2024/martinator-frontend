// Author: Sbenduel

export const Navbar = () => {
  return (
    <nav className=" bg-[#112d4e] px-4 sm:px-8 lg:px-20 relative flex items-center justify-between h-16">
      <div className="flex items-center">
        <img
          className="block lg:hidden h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow logo"
        />
        <img
          className="hidden lg:block h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
          alt="Workflow logo"
        />
        <div className="text-white flex space-x-4 ml-8">
          <a href="#">Home</a>
          <a>PlaceHolder</a>
          <a>Placeholder</a>
          <a>Placeholder</a>
        </div>
      </div>
      <button
        type="button"
        className="bg-[#F4F4F4] hover:bg-white text-[#112d4e] font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </nav>
  );
};
