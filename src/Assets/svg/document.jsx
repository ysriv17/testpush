const DocumentIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 33 41"
      className={className ? className : "w-8 h-10"}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M28.751 40.916a4.084 4.084 0 004.084-4.083v-24.5L20.585.083H4.25A4.083 4.083 0 00.168 4.166v32.667a4.083 4.083 0 004.083 4.083h24.5zM18.543 4.166l10.208 10.209H18.543V4.166zm-12.25 8.167h6.125v4.083H6.293v-4.083zm0 8.167H26.71v4.083H6.293V20.5zm0 8.166H26.71v4.084H6.293v-4.084z"
      ></path>
    </svg>
  );
};

export default DocumentIcon;
