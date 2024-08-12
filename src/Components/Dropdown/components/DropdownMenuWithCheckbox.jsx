import { useState } from "react";
// import ChevronRightIcon from "../../../assets/svg/chevron-right";
import { useEventChangeOutside } from "../../../Hooks/use-event-change-outside";


const DropdownMenuWithCheckbox = ({
  menuItems,
  dropdownMenuExtraClass,
  handleSelectValue,
  selectedCheckboxValue,
  handleCheckboxChange,
}) => {
  const [openCheckboxDropdownMenu, setOpenCheckboxDropdownMenu] = useState("");

  let domNode = useEventChangeOutside(() => {
    setOpenCheckboxDropdownMenu(false);
  }, "mouseout");

  return (
    <>
      {menuItems && menuItems.length > 0 && (
        <div
          className={`mt-2 w-full max-h-[250px] overflow-y-auto scrollbar absolute z-10 bg-primary-blue-ltr min-w-max ${dropdownMenuExtraClass?.menu}`}
        >
          <div ref={domNode} className="text-base text-white w-full">
            {menuItems &&
              menuItems?.length > 0 &&
              menuItems?.map((item, index) => (
                <div key={item.id} className="flex  w-full">
                  <div
                    className={`w-[55%] bg-white shadow ${
                      index === 0
                        ? "rounded-t-lg"
                        : index === menuItems.length - 1
                        ? "rounded-b-lg"
                        : "rounded-none"
                    }`}
                    onMouseOver={() => setOpenCheckboxDropdownMenu(item.id)}
                  >
                    <div
                      className={`w-full flex items-center justify-between px-4 py-2 6xl:px-8 6xl:py-5 cursor-pointer  ${
                        menuItems.length - 1 !== index && "border-b"
                      } ${
                        dropdownMenuExtraClass?.menuItem
                          ? dropdownMenuExtraClass.menuItem
                          : "border-ternary-blue"
                      } 
                    `}
                    >
                      <p>{item.title}</p>

                      {/* <ChevronRightIcon className="w-8 h-8 6xl:h-10 6xl:w-10 text-ternary-blue" /> */}
                    </div>
                  </div>
                  {openCheckboxDropdownMenu === item.id && (
                    <div className="w-[45%] absolute right-0 pl-1 rounded-lg">
                     
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownMenuWithCheckbox;
