import SpecialOfferIcon from "@/assets/icons/special-offer-icon";
import { BgGrid } from "@/assets/Image";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button, buttonVariants } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import EnterpriseImageCard from "./enterprise-image-card";
import Link from "next/link";
import { LINKS } from "@/constants/social-links";

export default function EnterpriseSubscriptionCTA() {
  return (
    <div className="w-full relative overflow-hidden  rounded-2xl">
      <div className="absolute  w-full  left-0 h-full ">
        <div className="h-full w-full flex left-0  justify-end relative">
          <EnterpriseImageCard />
        </div>
      </div>
      <Image
        src={BgGrid}
        width={1920}
        height={1080}
        className="object-cover object-bottom w-full aspect-video max-h-[230px]"
        alt="grid background"
      />
      <div className="w-full h-full z-10 absolute top-0 left-0">
        <div className="flex flex-col w-full h-full px-7 justify-between py-4 pt-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <SpecialOfferIcon />
              <p className="blue-text-clip font-medium bg-clip-text text-transparent">
                Special Offer
              </p>
            </div>
            <div className="pb-2 pt-4">
              <h4 className="text-4xl  tracking-tight font-medium grayish-text-gradient">
                Enterprise
              </h4>
            </div>
            <p className="grayish-text-gradient">
              Custom pre-trained styles to your needs with SLAs.
            </p>
          </div>{" "}
          <div>
            <Link
              target="_blank"
              className={buttonVariants()}
              href={LINKS.CONTACT_SUPPORT_MAIL}
            >
              <ShoppingBag />
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <BorderBeam
        initialOffset={0}
        size={200}
        colorFrom="rgba(119, 217, 253,1)"
        colorTo="rgba(119, 217, 253,1)"
        className="border-2 rounded-2xl z-50 relative"
      />
    </div>
  );
}
