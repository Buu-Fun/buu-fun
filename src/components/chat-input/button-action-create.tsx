"use client";
import { ArrowUp } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { ChatMessage, setNewChatMessage } from "@/lib/redux/features/chat";
import { nanoid } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React from "react";

export default function ButtonActionCreate() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const query = useAppSelector((state) => state.chat.inputQuery);

  function handleNewChatCreation() {
    const data: ChatMessage = {
      chat_id: nanoid(),
      message: [
        {
          time: format(new Date(), "KK:mm:a"),
          id: nanoid(),
          message: query,
        },
      ],
    };

    dispatch(setNewChatMessage(data));
    router.push(`/generation/${data.chat_id}`);
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
