"use client";
import { ArrowUp } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { generateSubThreads } from "@/lib/react-query/threads";
import { clearInput, setSubThread } from "@/lib/redux/features/chat";
import { useAuthentication } from "@/providers/account.context";
import { useWallet, walletType } from "@/providers/wallet.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function ButtonActionExisting({
  threadId,
}: {
  threadId: string;
}) {
  // const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const prompt = useAppSelector((state) => state.chat.inputQuery);
  const { getAccessToken } = useAuthentication();
  const { address, connect } = useWallet();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: generateSubThreads,
    onSuccess(data) {
      toast.loading("Generating new model...", { duration: 8000 });
      dispatch(setSubThread(data));
      dispatch(clearInput());

      queryClient.invalidateQueries({
        queryKey: [data.threadId, "get-all-sub-threads"],
      });
    },
    onError(error) {
      console.log(error);
    },
  });

  function handleExistingChat() {
    const accessToken = getAccessToken(address ?? "");
    if (!address || !accessToken) {
      connect(walletType);
      return;
    }
    mutate({
      accessToken: accessToken,
      prompt,
      threadId,
      style: "Realistic",
    });
  }

  return (
    <button
      onClick={() => handleExistingChat()}
      className="bg-[#737984] rounded-full border p-0.5"
    >
      <ArrowUp className="   w-5 h-5 " />
    </button>
  );
}
