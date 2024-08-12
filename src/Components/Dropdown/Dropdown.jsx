import { useState } from "react";
import ChevronDownIcon from "../../Assets/svg/chevron-down";
import DropdownMenu from "./components/DropdownMenu";
import { useEventChangeOutside } from "../../Hooks/use-event-change-outside";
import TooltipContent from "../Tooltip/Tooltip";


const Dropdown = ({
  title,
  menuItems,
  handleSelectValue,
  selectedValue,
  error,
  extraClass,
  dropdownMenuExtraClass,
  iconColor,
  menuItemsWithCheckbox = false,
  multiselect = false,
  selectedCheckboxValue,
  handleCheckboxChange,
  tooltip = false,
}) => {
  const [open, setOpen] = useState(false);

  let domNode = useEventChangeOutside(() => {
    setOpen(false);
  }, "mousedown");

  return (
    <div className="w-full flex gap-3">
      <div ref={domNode} className="relative w-full">
        <button
          onClick={() => {
            if (menuItems && menuItems.length > 0) {
              setOpen((prev) => !prev);
            }
          }}
          type="button"
          className={`${error ? "border-2 border-red-500" : "border border-ternary-gray"
            } font-normal w-full text-center flex items-center justify-between ${extraClass}`}
        >
          <div className="flex items-center max-w-[90%]">
            <p className="truncate">
              {multiselect
                ? selectedValue.length > 0
                  ? selectedValue.map((value) => (
                    <span key={value.id} className="ml-2">
                      {value.title}
                    </span>
                  ))
                  : title
                : selectedValue?.title
                  ? selectedValue?.title
                  : title}
            </p>
          </div>
          <ChevronDownIcon
            className={`h-4 w-4 6xl:h-7 6xl:w-7 ${error ? "text-red-500" : `${iconColor}`
              } relative top-[1px] transition-transform duration-[250] ease-in ${open === true && "rotate-180"
              }`}
          />
        </button>
        {error && (
          <p className="pl-1 text-xs mt-1 font-normal text-red-400">{error}</p>
        )}

        {!menuItemsWithCheckbox && menuItems && menuItems?.length > 0 && open && (
          <DropdownMenu
            menuItems={menuItems}
            dropdownMenuExtraClass={dropdownMenuExtraClass}
            handleSelectValue={handleSelectValue}
            setOpen={setOpen}
          />
        )}

       
      </div>
       <TooltipContent />
    </div>
   
  );
};

export default Dropdown;
