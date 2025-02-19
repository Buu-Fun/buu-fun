import CoinStackIcon from "@/assets/icons/coin";
import QuestionIcon from "@/assets/icons/Icon.png";
import logo from "@/assets/icons/logo-no-gradient.png";
import MagicPenIcon from "@/assets/icons/magicpen";
import SizePenIcon from "@/assets/icons/size";
import Image from "next/image";
import Link from "next/link";
export default function NavigationalBar() {
  return (
    <nav className="px-3 py-4   w-full h-full">
      <div className="bg-buu py-4 flex flex-col items-center justify-between rounded-[20px] overflow-hidden h-full w-[72px]">
        <div className="flex shadow-buu-inner bg-buu-opacity-100  items-center justify-center w-12 h-12 px-3 py-4  rounded-lg ">
          <Image src={logo} width={250} height={20} alt="Bunn.fun logo" />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Link
            href={"/"}
            className="w-10 flex items-center justify-center px-2 py-3 h-10 hover:fill-white"
          >
            <SizePenIcon />
          </Link>
          <Link
            href={"/"}
            className="w-10 flex items-center justify-center px-2 py-3 h-10 hover:fill-white"
          >
            <MagicPenIcon />
          </Link>
          <Link
            href={"/"}
            className="w-10 flex items-center justify-center px-2 py-3 h-10 hover:fill-white"
          >
            <CoinStackIcon />
          </Link>
        </div>
        <div>
          <Image
            className="w-6 h-6"
            src={QuestionIcon}
            alt="Question Help"
            width={100}
            height={100}
          />
        </div>
      </div>
    </nav>
  );
}
