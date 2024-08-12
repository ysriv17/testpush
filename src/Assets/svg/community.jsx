const CommunityIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className ? className : "h-6 w-6"}
      {...rest}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 18v-1a5 5 0 015-5m0 0a5 5 0 015 5v1m-5-6a3 3 0 100-6 3 3 0 000 6zM1 18v-1a3 3 0 013-3m0 0a2 2 0 100-4 2 2 0 000 4zm19 4v-1a3 3 0 00-3-3m0 0a2 2 0 100-4 2 2 0 000 4z"
      ></path>
    </svg>
  );
};

export default CommunityIcon;
