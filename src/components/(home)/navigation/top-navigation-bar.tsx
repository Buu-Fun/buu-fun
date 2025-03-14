import { logo } from "@/assets/icons";
import Bounded from "@/components/ui/Bounded";
import Image from "next/image";
import React from "react";
import TryNow from "../elements/try-now";
import { motion } from "framer-motion";
export default function TopNavigationBar() {
  return (
    <motion.nav
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 2, ease: "backInOut" },
      }}
      className="w-full fixed top-0 z-[5000]"
    >
      <Bounded className="max-w-screen-2xl flex items-center justify-between px-2 py-4  w-full ">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-md">
            <Image
              className="w-full h-full "
              src={logo}
              width={250}
              height={250}
              alt="Bunn.fun logo"
            />
          </div>
          <h4 className="tracking-tighter font-semibold">BUU.FUN</h4>
        </div>
        <div>
          <TryNow />
        </div>
      </Bounded>
    </motion.nav>
  );
}
