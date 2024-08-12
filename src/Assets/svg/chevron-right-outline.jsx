const ChevronRightOutlineIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className={className ? className : "h-4 w-4"}
      {...rest}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 12l4-4-4-4"
      ></path>
    </svg>
  );
};

export default ChevronRightOutlineIcon;
