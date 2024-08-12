const SubmitDocumentIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 22"
      className={className ? className : "w-5 h-6"}
      {...rest}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 12V4.749a.6.6 0 00-.176-.425l-3.148-3.148A.6.6 0 0013.252 1H1.6a.6.6 0 00-.6.6v18.8a.6.6 0 00.6.6H11"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13 1v3.4a.6.6 0 00.6.6H17m-4 13h6m0 0l-3-3m3 3l-3 3"
      ></path>
    </svg>
  );
};

export default SubmitDocumentIcon;
