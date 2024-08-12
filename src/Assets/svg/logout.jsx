const LogoutIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 37"
      className={className ? className : "h-10 w-10"}
      {...rest}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.722 3.733a4.433 4.433 0 00-4.433 4.434v20.689a4.433 4.433 0 004.433 4.433h8.867a4.433 4.433 0 004.433-4.433V8.166a4.433 4.433 0 00-4.433-4.433h-8.867zm1.911 9.3a1.478 1.478 0 012.09 0l4.433 4.433a1.478 1.478 0 010 2.09l-4.433 4.433a1.478 1.478 0 01-2.09-2.09l1.91-1.91H7.857a1.478 1.478 0 010-2.956h12.688l-1.91-1.91a1.478 1.478 0 010-2.09z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default LogoutIcon;
