import { getAccessTokenKey } from "@/lib/client-utils";
import { getAllThreads } from "@/lib/react-query/threads";
import { useAuthentication } from "@/providers/account.context";
import { useWallet } from "@/providers/wallet.context";
import { useQuery } from "@tanstack/react-query";
import { Ghost, Loader2, MessageCircle, TimerIcon } from "lucide-react";
import React from "react";
import { mockData } from "./mock-navigational-data";
import { format } from "date-fns";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
export default function HistoryNavigation() {
  //   const data = mockData;
  //   const isLoading = false;
  const { getAccessToken } = useAuthentication();
  const { address } = useWallet();
  const { data, isLoading } = useQuery({
    queryKey: ["get-all-recent-threads"],
    queryFn: async () => {
      const accessToken = getAccessToken(address ?? "");
      return await getAllThreads(accessToken ?? "");
    },
  });
  if (isLoading) {
    return (
      <div className="flex  items-center justify-center w-full h-[80%]">
        <div className="flex items-center justify-center flex-col w-full">
          <div className="flex items-center justify-center flex-col w-full">
            <Loader2 className="animate-spin" />
            <p>Loading recent chats</p>
          </div>
        </div>
      </div>
    );
  }
  if (!data?.items.length) {
    return (
      <div className="flex  items-center justify-center w-full h-[80%]">
        <div className="flex items-center justify-center flex-col w-full">
          <div className="flex items-center justify-center flex-col w-full">
            <Ghost className="w-10 h-10 text-blue-300" />
            <p className="text-lg text-center leading-5 mt-2">
              You don't have any <br /> recent history
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <motion.div
      className="flex flex-col max-h-[90%] gap-2 mt-4 overflow-y-scroll scrollbar-w-hidden scrollbar-track-orange-lighter scrollbar-thumb-rounded"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {data?.items.map((item) => (
        <motion.div
          key={item._id}
          className="border-buu bg-buu flex flex-col gap-2 shadow-buu-muted p-3 rounded-xl backdrop-blur-10"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.999 }}
        >
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-blue-300" />
            <h1 className="line-clamp-1 font-medium text-foreground">
              {item.title}
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TimerIcon className="w-4 h-4 text-blue-300" />
            {format(new Date(item.createdAt), "iii, do MMMM")}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
