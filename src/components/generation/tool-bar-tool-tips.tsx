import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppDispatch } from "@/hooks/redux";
import { mutateGenerateNewImage } from "@/lib/react-query/threads";
import { setSubThread } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useWallet, walletType } from "@/providers/wallet.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { ToolTips, TToolTipEvents } from "./handle-tool-calls";
import ToolTipModify from "./tool-tip-modify";

type TToolBarToolTips = {
  subThreadId: string;
  imageUrl: string | null;
};

export default function ToolBarToolTips({
  subThreadId,
  imageUrl,
}: TToolBarToolTips) {
  const dispatch = useAppDispatch();
  const { getAccessToken } = useAuthentication();
  const { address, connect } = useWallet();
  const queryClient = useQueryClient();

  const { mutate: generateNewImage } = useMutation({
    mutationFn: mutateGenerateNewImage,
    onSuccess(data) {
      toast.loading("Generating new model...", { duration: 8000 });
      const IS_LOADING_NEW = true;
      dispatch(setSubThread(data, IS_LOADING_NEW));
      queryClient.invalidateQueries({
        queryKey: [data.threadId, "get-all-sub-threads"],
      });
    },
    onError(error) {
      console.log(error);
    },
  });

  // function handleModifyDrag() {
  //   // Set the dragged image URL in Redux store
  //   dispatch(setDraggedImage(imageUrl ?? undefined));
  // }

  function handleEvent(events: TToolTipEvents) {
    const accessToken = getAccessToken(address ?? "");
    if (!address || !accessToken) {
      connect(walletType);
      return;
    }
    switch (events) {
      case "TRY_AGAIN": {
        generateNewImage({
          subthreadId: subThreadId,
          accessToken: accessToken,
        });
        break;
      }
      case "MODIFY": {
        toast.loading("Generating model...");
        break;
      }
      default: {
        console.log("NOT FOUND");
      }
    }
  }

  // Define button hover animation variants
  const buttonVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -2, scale: 1.05 },
    tap: { y: 0, scale: 0.95 },
    drag: { scale: 1.1, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <TooltipProvider>
      {ToolTips.map((item, index) => {
        if (item.type === "MODIFY" && imageUrl) {
          return (
            <ToolTipModify
              key={`tool-tip-contents-${item.content.trim()}-${subThreadId}-${index}`}
              index={index}
              length={ToolTips.length}
              subThreadId={subThreadId}
              toolTipData={item}
              imageUrl={imageUrl}
            />
          );
        }

        return (
          <Tooltip key={`tool-tip-contents-${item.content.trim()}-${index}`}>
            <TooltipTrigger asChild>
              <motion.div
                onClick={() => handleEvent(item.type)}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                // group bg-buu-button  hover:bg-white hover:shadow-none  group shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5
                className="group bg-buu-button pointer-events-auto hover:bg-white hover:shadow-none group shadow-buu-button min-w-[30px] rounded-md flex items-center justify-center p-1.5"
              >
                <motion.div
                  className="w-full h-full group-hover:text-black group-hover:fill-black"
                  transition={{ duration: 0.2 }}
                >
                  {item.Icon}
                </motion.div>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent
              className={cn("bg-buu-button text-primary", {
                "ml-2": index === 0,
                "mr-2": index === ToolTips.length - 1,
              })}
            >
              <p>{item.content}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </TooltipProvider>
  );
}
