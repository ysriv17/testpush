const EyeSlashIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      className={className ? className : "h-5 w-5"}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M2.746 13.091a.833.833 0 101.178-1.178L2.012 10l2.89-2.89a7.202 7.202 0 016.592-1.957.833.833 0 10.344-1.63 8.868 8.868 0 00-8.114 2.408l-3.48 3.48a.833.833 0 000 1.178l2.502 2.501zM19.756 9.41l-2.501-2.5a.833.833 0 10-1.179 1.179L17.988 10l-2.89 2.891a7.202 7.202 0 01-6.592 1.956.833.833 0 10-.343 1.631 8.868 8.868 0 008.113-2.409l3.48-3.48a.833.833 0 000-1.178z"
      ></path>
      <path
        fill="currentColor"
        d="M5.834 10a.833.833 0 101.667 0A2.5 2.5 0 0110 7.5a.833.833 0 000-1.666 4.167 4.167 0 00-4.167 4.167zM12.5 10a2.5 2.5 0 01-2.5 2.5.833.833 0 100 1.667c2.301 0 4.167-1.865 4.167-4.166a.833.833 0 10-1.667 0zM19.755.244a.833.833 0 00-1.179 0L.244 18.577a.833.833 0 001.179 1.179L19.755 1.423a.833.833 0 000-1.179z"
      ></path>
    </svg>
  );
};

export default EyeSlashIcon;
