// Author: Sbenduel

import { Link } from "react-router-dom";

export const Navbar = () => {
  //Lista stub di link per la navigazione, current indica la pagina attuale
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "PlaceHolder1", href: "#", current: false },
    { name: "PlaceHolder2", href: "#", current: false },
    { name: "PlaceHolder3", href: "#", current: false },
  ];

  //Funzione per capire se una classe merita il css true o false durante il rendering
  function classNames(...classes: string[] | boolean[]) {
    return classes.filter(Boolean).join(" ");
  }

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
        <div className=" lg:flex hidden text-white space-x-4 ml-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "bg-[#12396b] text-white"
                  : "text-gray-300 hover:bg-[#0B1D32] hover:text-white",
                "block rounded-md px-3 py-2 text-base Gelion font-bold"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="lg:block md:hidden">
        <button
          type="button"
          className="text-white Gelion font-bold py-2 px-4 rounded-lg hover:bg-[#0B1D32]"
        >
          Login 
          <i className="fa-solid fa-right-to-bracket"></i>
        </button>
      </div>
    </nav>
  );
};
