const ClockIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
      className={className ? className : "w-6 h-6"}
      {...rest}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.8 20.987a9 9 0 100-17.999 9 9 0 000 18z"
      ></path>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeMiterlimit="10"
        d="M11.3 5.487c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5h-.1c-.3-.1-.4-.3-.4-.5zm6.9 5.9c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5v-.1c0-.2.2-.4.5-.4zm-2.2-4.4c.2-.2.5-.2.7 0 .2.2.2.5 0 .7-.2.2-.5.2-.7 0v-.1c-.2-.1-.2-.4 0-.6zm0 9.8c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 .2.2.2.5 0 .7h-.1c-.2.2-.5.2-.6 0z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M14.2 14.388l-2.4-2.4v-3.4"
      ></path>
    </svg>
  );
};

export default ClockIcon;
