import React from "react";

export default function StarIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2103_414)">
        <path
          d="M54.5269 31.9302L54.7236 31.9664L54.0698 32.0978C45.1023 33.8994 40.6186 34.8002 37.5524 37.8091C34.4862 40.818 33.5009 45.2839 31.5304 54.2157L31.2765 55.3664L31.0076 54.1579C29.0258 45.2529 28.0349 40.8004 24.9739 37.8002C21.913 34.8 17.4415 33.8986 8.4986 32.0956L7.85768 31.9664C17.1347 30.2524 21.7733 29.3954 24.909 26.361C28.0447 23.3266 29.0404 18.7792 31.0317 9.68449L31.2765 8.56641L31.5069 9.62766C33.4866 18.7487 34.4765 23.3092 37.6173 26.3521C40.7581 29.3951 45.3477 30.2401 54.5269 31.9302H54.5269Z"
          fill="#CDEDFF"
        />
      </g>
      <mask
        id="mask0_2103_414"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="7"
        y="8"
        width="48"
        height="48"
      >
        <path
          d="M53.9109 31.7984L54.7236 31.9664L53.458 32.2493C44.7749 34.1905 40.4334 35.1611 37.4662 38.1225C34.4989 41.0839 33.5198 45.4235 31.5616 54.1028L31.2765 55.3664L31.1307 54.6548C29.2995 45.7189 28.3839 41.2509 25.3746 38.1997C22.3652 35.1486 17.9103 34.1714 9.00051 32.2171L7.85768 31.9664L8.5536 31.8252C17.6706 29.9756 22.2291 29.0508 25.3104 25.9655C28.3917 22.8803 29.3107 18.3206 31.1486 9.20123L31.2765 8.56641L31.5385 9.74715C33.5059 18.6133 34.4895 23.0464 37.5299 26.0432C40.5703 29.0399 45.0172 29.9594 53.9109 31.7984Z"
          fill="#38B6FF"
        />
      </mask>
      <g mask="url(#mask0_2103_414)">
        <g filter="url(#filter1_f_2103_414)">
          <path
            d="M38.7346 30.9706L58.8604 33.2644L30.0591 7.74414L32.3225 24.6814C32.766 27.9996 35.4085 30.5915 38.7346 30.9706Z"
            fill="#E1F2FF"
          />
        </g>
        <g filter="url(#filter2_f_2103_414)">
          <path
            d="M24.6955 33.1086L11.3237 30.4519C7.91687 29.7751 4.51226 31.6279 3.23036 34.8565L20.8758 41.7808L30.4878 59.9746L32.6567 61.8877L30.1244 39.0245C29.7982 36.0797 27.6015 33.6859 24.6955 33.1086Z"
            fill="#4D9FFF"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_2103_414"
          x="0.851519"
          y="0.797907"
          width="63.0378"
          height="62.9719"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.07965" dy="0.317545" />
          <feGaussianBlur stdDeviation="4.04302" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.109804 0 0 0 0 0.572549 0 0 0 0 1 0 0 0 0.72 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2103_414"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2103_414"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_f_2103_414"
          x="19.5293"
          y="-2.78565"
          width="49.8608"
          height="46.5801"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5.26489"
            result="effect1_foregroundBlur_2103_414"
          />
        </filter>
        <filter
          id="filter2_f_2103_414"
          x="-9.37716"
          y="17.7058"
          width="54.6415"
          height="56.7895"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.30381"
            result="effect1_foregroundBlur_2103_414"
          />
        </filter>
      </defs>
    </svg>
  );
}
