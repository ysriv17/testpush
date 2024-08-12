const StripeConnectIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={className ? className : "w-5 h-5"}
      {...rest}
    >
      <path
        fill="url(#pi_connect__a)"
        d="M12.466.01C5.616.302.167 5.846.004 12.688c-.164 6.841 5.014 12.638 11.842 13.256.372.031.744.056 1.126.056H23.52c1.37 0 2.48-1.109 2.48-2.476V13.01a12.989 12.989 0 00-3.993-9.378A13.035 13.035 0 0012.467.01z"
      ></path>
      <path
        fill="#0073E6"
        d="M27.534 39.99c6.85-.292 12.299-5.836 12.462-12.678.164-6.841-5.014-12.638-11.842-13.256A13.473 13.473 0 0027.028 14H16.48A2.478 2.478 0 0014 16.476V26.99a12.989 12.989 0 003.993 9.378 13.04 13.04 0 009.54 3.622z"
      ></path>
      <path
        fill="url(#pi_connect__b)"
        d="M26 14v9.524A2.478 2.478 0 0123.52 26H14v-9.524a2.478 2.478 0 012.317-2.47L16.48 14H26z"
      ></path>
      <defs>
        <linearGradient
          id="pi_connect__a"
          x1="13"
          x2="13"
          y1="1.707"
          y2="15.254"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11EFE3"></stop>
          <stop offset="0.33" stopColor="#15E8E2"></stop>
          <stop offset="0.74" stopColor="#1FD3E0"></stop>
          <stop offset="1" stopColor="#21CFE0"></stop>
        </linearGradient>
        <linearGradient
          id="pi_connect__b"
          x1="20"
          x2="20"
          y1="15.724"
          y2="27.241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00299C"></stop>
          <stop offset="1" stopColor="#0073E6"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StripeConnectIcon;
