const EnvelopeIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 16"
      className={className ? className : "w-5 h-4"}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M18 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z"
      ></path>
    </svg>
  );
};

export default EnvelopeIcon;
