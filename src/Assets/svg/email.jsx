const EmailIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 26 24"
      className={className ? className : "h-7 w-7"}
      {...rest}
    >
      <path
        fill="#fff"
        d="M6.955.625v1.971L.75 6.636v16.739h24.818V6.635l-6.204-4.039V.625H6.954zm2.068 2.068h8.273v7.95l-4.137 2.682-4.136-2.682v-7.95zm1.034 2.068V6.83h6.204V4.76h-6.204zm-3.102.291v4.234L3.69 7.185l3.264-2.133zm12.409 0l3.264 2.133-3.264 2.1V5.053zm-9.307 2.812v2.068h6.204V7.864h-6.204zM2.818 9.092L13.16 15.78 23.5 9.09v12.216H2.818V9.092z"
      ></path>
    </svg>
  );
};

export default EmailIcon;
