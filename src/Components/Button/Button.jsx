import ClipLoader from "react-spinners/ClipLoader";

const Button = ({
  type = "button",
  innerText,
  Icon,
  extraClass,
  isLoading = false,
  disabled,
  iconLeft = false,
  iconType = "icon",
  iconExtraClass,
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`disabled:opacity-80 flex items-center justify-center space-x-2 ${extraClass}`}
      {...rest}
    >
      <span className={`${iconLeft && "order-2 mx-2"}`}>{innerText}</span>
      {Icon && iconType === "icon" ? (
        <Icon className={`w-6 h-6 ${iconExtraClass}`} />
      ) : (
        Icon && (
          <img src={Icon} alt="" className={`w-6 h-6 ${iconExtraClass}`} />
        )
      )}

      {isLoading && <ClipLoader color="#FFFFFF" size={16} />}
    </button>
  );
};

export default Button;
