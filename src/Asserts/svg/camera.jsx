const CameraIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 15 14"
      className={className ? className : "w-6 h-6"}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M1.552 1.667h2.23L5.27.179H9.73l1.487 1.488h2.231a1.487 1.487 0 011.487 1.487v8.923a1.487 1.487 0 01-1.487 1.487H1.552a1.487 1.487 0 01-1.488-1.487V3.154a1.487 1.487 0 011.488-1.487zM7.5 3.897a3.718 3.718 0 100 7.436 3.718 3.718 0 000-7.436zm0 1.488a2.23 2.23 0 110 4.461 2.23 2.23 0 010-4.461z"
      ></path>
    </svg>
  );
};

export default CameraIcon;
