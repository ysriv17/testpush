
import TooltipContent  from "../Tooltip/Tooltip";

const InputField = ({
  placeholder,
  handleIconClick,
  Icon,
  type,
  name,
  id,
  error,
  extraClass,
  inputFieldClass,
  iconClass,
  tooltip = false,
  tooltipclass,
  tooltipmessage,
  lable = false , 
  lableclass,
  lablecontent,
  ...rest
}) => {
  return (
    <div className="w-full">

      <label id={name} className={`px-1 uppercase text-lg text-pretty ${lableclass}`}>{lablecontent}</label>

        <div className="flex items-center gap-3 ">
          <div className={`flex items-center w-full ${extraClass}`}>
            <input
            className={`w-full bg-transparent focus:outline-none ${inputFieldClass}`}
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            {...rest}
           />
          {Icon && <Icon onClick={handleIconClick} className={iconClass} />}
        </div>
      {
        tooltip ? 
            (<div className={` ${tooltipclass} `} >
              <TooltipContent message={tooltipmessage} />
            </div>) :
            <>
            </>
      }
      </div>
      {error && (
        <p className="mt-1.5 pl-1 text-xs 5xl:text-sm 6xl:text-base font-normal text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
