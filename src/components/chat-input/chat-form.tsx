"use client";
import { ArrowUp, ImageIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { queryClient } from "@/lib/react-query/query-client";
import { generateSubThreads } from "@/lib/react-query/threads";
import {
  clearInput,
  setNewThreadId,
  setSubThread,
} from "@/lib/redux/features/chat";
import { useAuthentication } from "@/providers/account.context";
import { useWallet, walletType } from "@/providers/wallet.context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { TBottomBarContainer } from "./bottom-bar-container";
import ChatTextArea from "./chat-text-area";

export default function ChatForm({ action }: TBottomBarContainer) {
  const { getAccessToken } = useAuthentication();
  const { address, connect } = useWallet();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const prompt = useAppSelector((state) => state.chat.inputQuery);
  const style = useAppSelector((state) => state.settings.ThreeDStyle);

  // Mutation for creating a new chat
  const { mutate: createNewChat } = useMutation({
    mutationFn: generateSubThreads,
    onSuccess(data) {
      dispatch(setNewThreadId(data.threadId));
      router.push(`/generation/${data.threadId}`);
    },
    onError(error) {
      console.log(error);
    },
  });

  // mutation for existing chat
  const { mutate: createExistingChat } = useMutation({
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Don't submit if there's no prompt
    if (!prompt || prompt.trim() === "") {
      return;
    }

    if (!address) {
      connect(walletType);
      return;
    }

    // Handle based on action type
    if (action === "new_chat") {
      createNewChat({
        accessToken: getAccessToken(address) ?? "",
        prompt: prompt,
        style: style,
      });
    } else if (typeof action !== "string") {
      createExistingChat({
        accessToken: getAccessToken(address) ?? "",
        prompt,
        style,
        threadId: action.threadId,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex-col gap-1 flex items-start w-full"
    >
      <ChatTextArea />
      <div className="w-full  flex justify-between">
        <ImageIcon />
        <button
          type="submit"
          className="bg-[#737984] rounded-full border p-0.5"
        >
          <ArrowUp className="   w-5 h-5 " />
        </button>
      </div>
    </form>
  );
}
