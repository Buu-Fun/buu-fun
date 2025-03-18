import { StarIcon } from "@/assets/icons";
import Image from "next/image";
import Icon from "./add.png";
import Link from "next/link";
export default function TryNow() {
  return (
    <Link href={'/app'} className="bg-white py-2 px-2 rounded-xl flex">
      <div className="flex gap-2 items-center  ">
        <div className="max-w-[24px] w-full flex items-center border border-blue-300/40 rounded-md overflow-hidden justify-center">
          <Image
            src={Icon}
            width={100}
            className="w-full"
            height={100}
            alt="Star Icon"
          />
        </div>
        <p className="text-black font-medium ">Try Now</p>
      </div>
    </Link>
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
