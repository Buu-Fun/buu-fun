import Image from "next/image";
import React from "react";
type TSingleImageLayout = {
  url: string;
  alt: string;
};
export default function SingleImageLayout({ alt, url }: TSingleImageLayout) {
  return (
    <div className="relative">
      <div className="-rotate-12">
        <Image
          src={url}
          alt={alt}
          width={250}
          height={250}
          className="max-w-[77px] rounded-2xl"
        />
      </div>
    </div>
  );
}
