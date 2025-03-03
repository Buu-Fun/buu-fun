import { cn } from "@/lib/utils";
import React from "react";

export type TBase64ImageDiv = {
  base64String?: string;
  width?: string;
  height?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  className?: string;
};

const Base64ImageDiv = ({
  base64String,
  //   width = "300px",
  //   height = "200px",
  backgroundSize = "contain",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  className,
}: TBase64ImageDiv) => {
  // Check if the string already includes the data URI prefix
  if (!base64String) return null;
  const imageUrl = base64String.startsWith("data:")
    ? base64String
    : `data:image/png;base64,${base64String}`;

  const divStyle = {
    // width: width,
    // height: height,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: backgroundSize,
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
  };

  return <div style={divStyle} className={cn("base64-image-div", className)} />;
};

export default Base64ImageDiv;
