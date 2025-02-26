"use client";
import React from "react";
import ChatTextArea from "./chat-text-area";
import { ImageIcon } from "@/assets/icons";
import ButtonActionCreate from "./button-action-create";
import ButtonActionExisting from "./button-action-existing";
import { TBottomBarContainer } from "./bottom-bar-container";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useAuthentication } from "@/providers/account.context";
import { useWallet, walletType } from "@/providers/wallet.context";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import {
  clearInput,
  setNewThreadId,
  setSubThread,
} from "@/lib/redux/features/chat";
import { generateSubThreads } from "@/lib/react-query/threads";
import { queryClient } from "@/lib/react-query/query-client";

export default function ChatForm({ action }: TBottomBarContainer) {
  const { loading: isAuthLoading, getAccessToken } = useAuthentication();
  const { address, loading: isWalletLoading, connect } = useWallet();
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
  // You'll need a similar mutation for existing thread

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (style) {
      toast.success(`${style}`);
      return;
    }
    // Don't submit if there's no prompt
    if (!prompt || prompt.trim() === "" || prompt.length < 2) {
      return;
    }

    if (isAuthLoading || isWalletLoading) return;

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
        {action === "new_chat" ? (
          <ButtonActionCreate />
        ) : (
          <ButtonActionExisting threadId={action.threadId} />
        )}
      </div>
    </form>
  );
}
