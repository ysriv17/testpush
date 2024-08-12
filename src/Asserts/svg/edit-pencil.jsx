const EditPencilIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 18"
      className={className ? className : "w-5 h-6"}
      {...rest}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.3 3.2H2a2 2 0 00-2 2V16a2 2 0 002 2h11c1.1 0 2-1 2-2.1V8l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1-.1.1z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.8 1.3a2.1 2.1 0 00-1-1.1 2 2 0 00-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 00.6-1.5c0-.2 0-.5-.2-.8zm-2.4 4.4l-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5 .1-.2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default EditPencilIcon;
