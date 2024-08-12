const GarbageCanIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 26"
      className={className ? className : "w-4 h-6"}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M6.875 0v1.444H0v2.89h1.375V23.11c0 .766.29 1.501.805 2.043A2.685 2.685 0 004.125 26h13.75c.73 0 1.429-.304 1.945-.846a2.964 2.964 0 00.805-2.043V4.333H22V1.444h-6.875V0h-8.25zm-2.75 4.333h13.75v18.778H4.125V4.333zm2.75 2.89v13h2.75v-13h-2.75zm5.5 0v13h2.75v-13h-2.75z"
      ></path>
    </svg>
  );
};

export default GarbageCanIcon;
