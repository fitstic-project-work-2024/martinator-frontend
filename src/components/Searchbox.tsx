// Author: Reda
// Props: datePickerIcon (boolean) - se true, mostra il datepicker

type SearchBoxProps = { datepickerIcon?: boolean };

export const Searchbox = (props: SearchBoxProps) => {
  return (
    <>
      <div className="max-w-md mx-auto overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <form>
              <div className="relative shadow-md">
                <button>
                  <i className="absolute fa fa-search text-black top-5 left-4"></i>
                </button>
                <input
                  type="text"
                  placeholder={
                    props.datepickerIcon
                      ? "Che filmato stai cercando?"
                      : "Che telecamera stai cercando?"
                  }
                  className=" placeholder-gray-700 bg-yellow-400 h-14 w-full px-12 rounded-sm focus:outline-none hover:cursor-pointer"
                  name="search"
                />
                {props.datepickerIcon && (
                  <span className="absolute top-4 right-5 border-slate-600 border-l pl-4">
                    <i className="fa-regular fa-calendar text-black hover:text-gray-100 hover:cursor-pointer"></i>
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
