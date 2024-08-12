const ChevronDownIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="6"
      fill="none"
      viewBox="0 0 12 6"
      className={className ? className : "h-6 w-12"}
      {...rest}
    >
      <path fill="currentColor" d="M6 6l6-6H0l6 6z"></path>
    </svg>
  );
};

export default ChevronDownIcon;
