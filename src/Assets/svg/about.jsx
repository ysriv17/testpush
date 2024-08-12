const AboutIcon = ({ className, ...rest }) => {
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
        d="M27.806 30.4H8.594l-4.433 4.433V9.711a4.446 4.446 0 014.433-4.433h19.212a4.446 4.446 0 014.433 4.433v16.256a4.446 4.446 0 01-4.433 4.433z"
      ></path>
      <path
        fill="#fff"
        d="M16.722 15.622h2.956v8.128h-2.956v-8.128zM18.2 13.406a1.478 1.478 0 100-2.956 1.478 1.478 0 000 2.956z"
      ></path>
    </svg>
  );
};

export default AboutIcon;
