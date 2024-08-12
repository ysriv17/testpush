const HomeIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 37 36"
      className={className ? className : "h-10 w-10"}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M15.601 28.08v-7.39h5.912v7.39c0 .813.665 1.478 1.478 1.478h4.433c.813 0 1.479-.665 1.479-1.478V17.735h2.512c.68 0 1.005-.842.488-1.286L19.547 5.32a1.49 1.49 0 00-1.98 0L5.21 16.45c-.502.443-.192 1.285.488 1.285h2.513V28.08c0 .813.665 1.478 1.478 1.478h4.433c.813 0 1.478-.665 1.478-1.478z"
      ></path>
    </svg>
  );
};

export default HomeIcon;
