import React from "react";

export default function SliderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <foreignObject x="-40" y="-40" width="100" height="100">
        <div
          //   xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(20px)",
            clipPath: "url(#bgblur_0_2420_14436_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g data-figma-bg-blur-radius="40">
        <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.06" />
        <circle cx="10" cy="10" r="9.5" stroke="white" strokeOpacity="0.08" />
      </g>
      <foreignObject x="-13" y="-13" width="46" height="46">
        <div
          //   xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(10px)",
            clipPath: "url(#bgblur_1_2420_14436_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g data-figma-bg-blur-radius="20">
        <circle cx="10" cy="10" r="3" fill="#78DBFF" />
        <circle
          cx="10"
          cy="10"
          r="2.75"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="0.5"
        />
      </g>
      <defs>
        <clipPath
          id="bgblur_0_2420_14436_clip_path"
          transform="translate(40 40)"
        >
          <circle cx="10" cy="10" r="10" />
        </clipPath>
        <clipPath
          id="bgblur_1_2420_14436_clip_path"
          transform="translate(13 13)"
        >
          <circle cx="10" cy="10" r="3" />
        </clipPath>
      </defs>
    </svg>
  );
}
