const ArrowRightIcon = ({ className, ...rest }) => {
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
        d="M25.875 10.125H5.819l7.278-7.278L11.153.903.556 11.5l10.597 10.597 1.944-1.944-7.278-7.278h20.056v-2.75z"
      ></path>
    </svg>
  );
};

export default ArrowRightIcon;
