"use client";
import { ArrowUp } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { generateSubThreads } from "@/lib/react-query/threads";
import { setNewThreadId } from "@/lib/redux/features/chat";
import { useAuthentication } from "@/providers/account.context";
import { useWallet, walletType } from "@/providers/wallet.context";
import { nanoid } from "@reduxjs/toolkit";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

export default function ButtonActionCreate() {
  const { loading: isAuthLoading, getAccessToken } = useAuthentication();
  const {
    address,
    loading: isWalletLoading,
    openConnectionModal,
    connect,
    switchConnectionType,
  } = useWallet();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const prompt = useAppSelector((state) => state.chat.inputQuery);
  const style = useAppSelector((state) => state.settings.ThreeDStyle);
  const { mutate } = useMutation({
    mutationFn: generateSubThreads,
    onSuccess(data, variables, context) {
      dispatch(setNewThreadId(data.threadId));
      router.push(`/generation/${data.threadId}`);
    },
    onError(error, variables, context) {},
  });
  function handleNewChatCreation() {
    if (isAuthLoading || isWalletLoading || !address) return;

    if (!address) {
      connect(walletType);
      return;
    }

    mutate({
      accessToken: getAccessToken(address) ?? "",
      prompt: prompt,
      style: style,
    });

  }

  return (
    <button
      onClick={handleNewChatCreation}
      className="bg-[#737984] rounded-full border p-0.5"
    >
      <ArrowUp className="   w-5 h-5 " />
    </button>
  );
}
