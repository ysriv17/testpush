const BioIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 29 29"
      className={className ? className : "w-7 h-7"}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M22.354 24.167H6.646L3.02 27.792V7.25a3.636 3.636 0 013.625-3.625h15.708a3.636 3.636 0 013.625 3.625v13.292a3.636 3.636 0 01-3.625 3.625z"
      ></path>
      <path
        fill="#fff"
        d="M13.291 12.084h2.417v6.645H13.29v-6.645zM14.5 10.271a1.208 1.208 0 100-2.417 1.208 1.208 0 000 2.417z"
      ></path>
    </svg>
  );
};

export default BioIcon;
