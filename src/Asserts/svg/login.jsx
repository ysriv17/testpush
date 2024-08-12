const LoginIcon = ({ className, ...rest }) => {
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
        d="M19.677 3.667A4.433 4.433 0 0124.111 8.1v20.689a4.433 4.433 0 01-4.434 4.433h-8.866a4.433 4.433 0 01-4.433-4.433V8.1a4.433 4.433 0 014.433-4.433h8.866zm-1.91 9.3a1.478 1.478 0 00-2.09 0L11.244 17.4a1.477 1.477 0 000 2.09l4.433 4.433a1.478 1.478 0 002.09-2.09l-1.911-1.91h12.688a1.478 1.478 0 000-2.956H15.856l1.91-1.911a1.478 1.478 0 000-2.09z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default LoginIcon;
