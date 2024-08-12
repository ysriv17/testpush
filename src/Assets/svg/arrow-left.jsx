const ArrowLeftIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 26 23"
      className={className ? className : "h-7 w-7"}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M.125 10.125h20.056l-7.278-7.278L14.847.903 25.444 11.5 14.847 22.097l-1.944-1.944 7.278-7.278H.125v-2.75z"
      ></path>
    </svg>
  );
};

export default ArrowLeftIcon;
