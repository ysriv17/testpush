const ChevronDownOutlineIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 13 8"
      className={className ? className : "w-3 h-2"}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M.727.834a.59.59 0 01.768-.057l.066.057 5.083 5.083L11.727.834a.59.59 0 01.768-.057l.066.057a.59.59 0 01.057.767l-.057.066-5.5 5.5a.59.59 0 01-.768.057l-.066-.057-5.5-5.5a.59.59 0 010-.833z"
      ></path>
    </svg>
  );
};

export default ChevronDownOutlineIcon;
