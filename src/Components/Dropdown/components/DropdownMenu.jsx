const DropdownMenu = ({
  menuItems,
  dropdownMenuExtraClass,
  handleSelectValue,
  setOpen,
  locationMenu = false,
  globalSearchMenu = false,
}) => {
  return (
    <>
      {menuItems && menuItems?.length > 0 && (
        <div
          className={`mt-2 w-full max-h-[250px] 6xl:max-h-[300px] overflow-y-auto scrollbar absolute z-20 bg-primary-blue-ltr rounded-lg shadow ${dropdownMenuExtraClass?.menu}`}
        >
          <div className="text-base text-white w-full">
            {menuItems &&
              menuItems?.length > 0 &&
              menuItems?.map((item, index) => (
                <div
                  key={
                    locationMenu
                      ? item.place_id
                      : globalSearchMenu
                      ? item._id
                      : item.id
                  }
                  className={`w-full flex items-center justify-between px-4 py-2 6xl:px-8 6xl:py-5 cursor-pointer  ${
                    menuItems.length - 1 !== index && "border-b"
                  } ${
                    dropdownMenuExtraClass?.menuItem
                      ? dropdownMenuExtraClass.menuItem
                      : "border-ternary-blue"
                  }`}
                  onClick={() => {
                    if (handleSelectValue) {
                      handleSelectValue(item);
                    }

                    if (setOpen) {
                      setOpen(false);
                    }
                  }}
                >
                  {!globalSearchMenu && (
                    <p>{locationMenu ? item.description : item.title}</p>
                  )}
                  {globalSearchMenu && (
                    <div className="flex justify-between w-full">
                      <div className="text-xs">
                        <p className="font-medium">
                          {item?.firstName} {item?.lastName}
                        </p>
                        <p className="font-light text-[10px]">
                          {item?.professionalRole}
                        </p>
                      </div>
                      <div className="text-[10px] font-light">
                        <p>Exp: {item.yearsOfExperience} Yrs</p>
                      </div>
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

export default DropdownMenu;
