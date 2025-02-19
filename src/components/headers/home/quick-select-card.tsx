"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export default function QuickSelectCard({
  title,
  gradient,
  backgroundImage,
  released = true,
}: {
  title: ReactNode;
  gradient: ReactNode;
  backgroundImage: ReactNode;
  released?: boolean;
}) {
  return (
    <button disabled={!released} className="relative  p-[16px] group w-72  aspect-video bg-transparent  overflow-hidden  flex  border  h-full rounded-[20px] ">
      <div
        className={cn(
          "absolute flex items-center justify-center w-full h-full top-0 left-0   z-50 bg-black/60 ",
          {
            hidden: released,
          }
        )}
      >
        <h4 className="text-lg  font-bold tracking-tighter text-bla">
          Coming soon ✨
        </h4>
      </div>
      <div className="z-10  text-2xl font-medium relative text-white text-left">
        <p>
          Help me to create <br /> {title}
        </p>
      </div>
      <div
        className={cn(
          "absolute w-[105%]  overflow-hidden h-[105%]  max-w-full top-0 left-0",
          
        )}
      >
        {gradient}
      </div>
      <div
      
      >{backgroundImage}</div>
    </button>
  );
}
