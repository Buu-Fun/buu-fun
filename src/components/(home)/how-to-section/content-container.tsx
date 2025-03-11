import React, { ReactNode } from "react";
type TContentContainer = {
  title: string;
  index: number | string;
  subTitle: ReactNode;
  subDescription: string;
};
export default function ContentContainer({
  title,
  index,
  subDescription,
  subTitle,
}: TContentContainer) {
  return (
    <div className="h-full w-full max-w-[calc(100dvw-10dvw)] first-of-type:pl-[5%] last-of-type:pr-[5%]     flex flex-shrink-0 items-center  justify-between flex-col ">
      <h1 className="text-[150px] 2xl:text-[250px] dark-text-clip text-center  font-medium tracking-tighter ">
        {title}
      </h1>
      <div className="flex flex-col self-start pl-[5%] pt-[15%]">
        <p className="blue-text-clip font-medium">{index}</p>
        <h4 className="text-5xl  font-medium tracking-tighter">{subTitle}</h4>
        <p className="tracking-tighter text-lg">{subDescription} </p>
      </div>
    </div>
  );
}
