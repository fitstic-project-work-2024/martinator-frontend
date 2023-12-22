// Author: Sbenduel

export const Navbar = () => {
  //Lista stub di link per la navigazione, current indica la pagina attuale
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "PlaceHolder", href: "#", current: false },
    { name: "PlaceHolder", href: "#", current: false },
    { name: "PlaceHolder", href: "#", current: false },
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
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-[#4F709C] text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="bg-[#F4F4F4] hover:bg-[#FCD94F] text-[#112d4e] font-bold py-2 px-4 rounded"
      >
        Login
      </button>
      <div className="lg:hidden block">
        <button>
          <img
            className="w-auto h-fit"
            src={"public/imgs/hamburgerMenu.svg"}
            alt="Hamburger Menu"
          />{" "}
        </button>
      </div>
    </nav>
  );
};
