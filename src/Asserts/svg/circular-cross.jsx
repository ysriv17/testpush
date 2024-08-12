const CircularCrossIcon = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="none"
      viewBox="0 0 51 51"
      {...rest}
    >
      <path
        fill="#002D55"
        fillRule="evenodd"
        d="M13.138 37.784c6.926 6.925 18.154 6.925 25.08 0 6.924-6.925 6.924-18.154 0-25.079-6.926-6.925-18.154-6.925-25.08 0-6.925 6.925-6.925 18.154 0 25.079z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        d="M18.398 17.956a1.875 1.875 0 000 2.653l4.844 4.845-4.845 4.844a1.873 1.873 0 00-.008 2.645 1.883 1.883 0 002.653 0l4.845-4.844 4.844 4.844a1.87 1.87 0 002.645-2.645l-4.844-4.844 4.844-4.845a1.883 1.883 0 000-2.653 1.873 1.873 0 00-2.645.009l-4.844 4.844-4.845-4.844a1.873 1.873 0 00-2.645-.01z"
        style={{ mixBlendMode: "overlay" }}
      ></path>
    </svg>
  );
};

export default CircularCrossIcon;
