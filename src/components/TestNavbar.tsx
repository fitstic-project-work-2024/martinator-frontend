import React, { useState } from "react";

export const TestNavbar = () => {
  //Lista stub di link per la navigazione, current indica la pagina attuale
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "PlaceHolder1", href: "#", current: false },
    { name: "PlaceHolder2", href: "#", current: false },
    { name: "PlaceHolder3", href: "#", current: false },
  ];

  const [isOpen, setIsOpen] = useState(false);



  //Funzione per capire se una classe merita il css true o false durante il rendering
  function classNames(...classes: string[] | boolean[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <header className="bg-[#112d4e]">
        <nav className="flex justify-between items-center w-[92%] h-16 mx-auto">
          <div>
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
          </div>
          <ul className="md:flex hidden gap-8">
            {navigation.map((item) => (
              <li>
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#12396b] text-white"
                      : "text-gray-300 hover:bg-[#0B1D32] hover:text-white",
                    "block rounded-md px-3 py-2 text-base Gelion font-bold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex  items-center gap-6">
            <button
              type="button"
              className="text-white md:block hidden Gelion font-bold py-2 px-4 rounded-lg hover:bg-[#0B1D32]"
            >
              Login 
              <i className="fa-solid fa-right-to-bracket"></i>
            </button>
            <button
              name="menu"
              className="text-3xl text-white cursor-pointer md:hidden py-1 px-2 rounded-lg hover:bg-[#0B1D32]"
              onClick={()=>setIsOpen(!open)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
