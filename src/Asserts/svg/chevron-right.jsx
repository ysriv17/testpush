const ChevronRightIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className ? className : "h-6 w-6"}
      {...rest}
    >
      <path fill="currentColor" d="M10 17l5-5-5-5v10z"></path>
    </svg>
  );
};

export default ChevronRightIcon;
