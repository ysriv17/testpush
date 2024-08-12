const LocationPinIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 17"
      className={className ? className : "w-3 h-4"}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M5.858 8.142a1.93 1.93 0 110-3.86 1.93 1.93 0 010 3.86zm0-7.335A5.404 5.404 0 00.453 6.212c0 4.053 5.405 10.036 5.405 10.036s5.404-5.983 5.404-10.036A5.405 5.405 0 005.858.807z"
      ></path>
    </svg>
  );
};

export default LocationPinIcon;
