const SearchIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      className={className ? className : "h-6 w-6"}
      viewBox="0 0 30 30"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M19.375 17.5h-.988l-.35-.337A8.089 8.089 0 0020 11.875 8.125 8.125 0 1011.875 20a8.089 8.089 0 005.288-1.962l.337.35v.987l6.25 6.238 1.863-1.863-6.238-6.25zm-7.5 0a5.617 5.617 0 01-5.625-5.625 5.617 5.617 0 015.625-5.625 5.617 5.617 0 015.625 5.625 5.617 5.617 0 01-5.625 5.625z"
      ></path>
    </svg>
  );
};

export default SearchIcon;
