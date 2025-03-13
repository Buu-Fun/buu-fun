import { StarIcon } from "@/assets/icons";
import Image from "next/image";
import Icon from "./add.png";
export default function TryNow() {
  return (
    <div className="bg-white py-2 px-2.5 rounded-xl">
      <div className="flex gap-2 items-center  ">
        <div className="max-w-[30px] flex items-center border-2 border-blue-300/40 rounded-md overflow-hidden justify-center">
          <Image src={Icon} width={100} height={100} alt="Star Icon" />
        </div>
        <p className="text-black font-medium ">Try Now</p>
      </div>
    </div>
  );
}

export function StarIconJsx() {
  return (
    <div className="relative blue-gradient-try-now border-2 border-blue-300/60 !opacity-100 !bg-opacity-100 rounded-md">
      <div className="flex absolute right-0 items-center justify-center w-3 h-3">
        <StarIcon />
      </div>
      <div className="flex items-center justify-center w-6 h-6">
        <StarIcon />
      </div>
    </div>
  );
}
