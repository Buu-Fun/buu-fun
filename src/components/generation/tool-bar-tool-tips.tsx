import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { mutateGenerateNewImage } from "@/lib/react-query/threads";
import { cn } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useWallet, walletType } from "@/providers/wallet.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ToolTips, TToolTipEvents } from "./handle-tool-calls";
import { useAppDispatch } from "@/hooks/redux";
import { setSubThread } from "@/lib/redux/features/chat";
type TToolBarToolTips = {
  subThreadId: string;
};
export default function ToolBarToolTips({ subThreadId }: TToolBarToolTips) {
  const dispatch = useAppDispatch();
  const { getAccessToken } = useAuthentication();
  const { address, connect } = useWallet();
  const queryClient = useQueryClient();

  const { mutate: generateNewImage } = useMutation({
    mutationFn: mutateGenerateNewImage,
    onSuccess(data) {
      toast.success("Generating new Image!!");
      dispatch(setSubThread(data));
      queryClient.invalidateQueries({
        queryKey: [data.threadId, "get-all-sub-threads"],
      });
    },
    onError(error) {
      console.log(error)
    },
  });
  function handleEvent(events: TToolTipEvents) {
    const accessToken = getAccessToken(address ?? "");
    if (!address || !accessToken) {
      connect(walletType);
      return;
    }
    toast.success("hello");

    switch (events) {
      case "TRY_AGAIN": {
        generateNewImage({
          subthreadId: subThreadId,
          accessToken: accessToken,
        });
        // dispatch(updateTryAgainMessage({ message: { ...image } }));
        break;
      }
      default: {
        toast.success("Toasted!");
        console.log("NOT FOUND");
      }
    }
  }
  return (
    <TooltipProvider>
      {ToolTips.map((item, index) => (
        <Tooltip key={`tool-tip-contents-${item.content.trim()}-${index}`}>
          <TooltipTrigger
            onClick={() => {
              handleEvent(item.type);
            }}
            className="group bg-buu-button pointer-events-auto  hover:bg-white hover:shadow-none  group shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5"
          >
            <div className="w-full h-full group-hover:text-black group-hover:fill-black">
              {item.Icon}
            </div>
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
      ))}
    </TooltipProvider>
  );
}
