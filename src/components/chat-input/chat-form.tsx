"use client";
import { ArrowUp, ImageIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { queryClient } from "@/lib/react-query/query-client";
import { generateSubThreads } from "@/lib/react-query/threads";
import {
  clearInput,
  pushNewSubThreads,
  setInputFile,
  setNewThreadId,
} from "@/lib/redux/features/chat";
import { isSubThreadGenerating } from "@/lib/redux/selectors/chat";
import {
  blobUrlToFile,
  cn,
  getAllowedContentTypeMaps,
  isOverAllRequestLimitReached,
} from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { TBottomBarContainer } from "./bottom-bar-container";
import ChatTextArea from "./chat-text-area";
import DragImageCard, { ImageData } from "./drag-image-card";
import { getPresignedUrl } from "@/lib/react-query/image-upload";

export default function ChatForm({ action }: TBottomBarContainer) {
  const { identityToken, login } = useAuthentication();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const prompt = useAppSelector((state) => state.chat.inputQuery);
  const style = useAppSelector((state) => state.settings.ThreeDStyle);
  const inputFile = useAppSelector((state) => state.chat.inputFile);

  const isChatPending = useAppSelector(isSubThreadGenerating);
  // Mutation for creating a new chat
  const { mutate: createNewChat, isPending: isCreatePending } = useMutation({
    mutationFn: generateSubThreads,
    onSuccess(data) {
      dispatch(setNewThreadId(data.threadId));
      router.push(`/generation/${data.threadId}`);
    },
    onError() {
      toast.error("Our servers are busy, Please try again");
    },
  });

  // mutation for existing chat
  const { mutate: createExistingChat, isPending: isExistingChatPending } =
    useMutation({
      mutationFn: generateSubThreads,
      onSuccess(data) {
        toast.loading("Generating new model...", { duration: 8000 });
        dispatch(pushNewSubThreads(data));
        dispatch(clearInput());
        queryClient.invalidateQueries({
          queryKey: [data.threadId, "get-sub-threads"],
        });
      },
      onError(error) {
        toast.error("Our servers are busy, Please try again");
        console.log(error);
      },
    });

  const isChatLoading =
    isCreatePending ||
    isExistingChatPending ||
    (action !== "new_chat" && isChatPending.isJustStarted) ||
    isOverAllRequestLimitReached(isChatPending.totalRequest);

  const { mutateAsync: getImagePresignedUrl } = useMutation({
    mutationFn: getPresignedUrl,
    async onSuccess(data) {
      toast.success(`GOT PRESIGNED URL`);
      console.log(data.presignedUrl);

      const uploadFile = await fetch(data.presignedUrl, {
        method: "PUT",
      });
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const handleImageGeneration = async (
    ImageData: ImageData,
    accessToken: string
  ) => {
    const file = await blobUrlToFile(ImageData.url, ImageData.name);
    toast.success(`Received File ${file.name}`);
    const contentType = getAllowedContentTypeMaps(file.type);
    if (!contentType) {
      toast.success("This Content type is not supported yet");
      return;
    }

    const data = await getImagePresignedUrl({
      contentType: contentType,
      accessToken,
    });

    if (!data) {
      toast.error("Failed to upload the image");
      return;
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append("file", file);
    const uploadFile = await fetch(data.presignedUrl, {
      method: "PUT",
      body: formData,
      headers: {
        "Content-Type": file.type,
      },
    });
    if (uploadFile.status !== 200) {
      console.log(uploadFile.status);
      console.log(await uploadFile.json());
    }
    const response = await uploadFile.json();
    console.log(response);
    // createExistingChat({

    // })
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Don't submit if there's no prompt
    if ((!prompt || prompt.trim() === "") && !inputFile?.url) {
      return;
    }

    if (isChatLoading) {
      if (isOverAllRequestLimitReached(isChatPending.totalRequest)) {
        return toast.error(
          "Whoa, you're on fire 🔥. You've hit the limit of 4 creations."
        );
      }
      return toast.error("Hold on!, Still generating your model...");
    }
    if (!identityToken) {
      login();
      return;
    }

    // Handle based on action type
    if (action === "new_chat") {
      if (inputFile?.url) {
        await handleImageGeneration(inputFile, identityToken);
        return;
      }
      createNewChat({
        accessToken: identityToken ?? "",
        prompt: prompt,
        style: style,
      });
    } else if (typeof action !== "string") {
      if (inputFile?.url) {
        await handleImageGeneration(inputFile, identityToken);
        return;
      }
      createExistingChat({
        accessToken: identityToken ?? "",
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
      {/* Other components */}
      <DragImageCard className={""} onImageSelected={(imageData) => {}} />
      <ChatTextArea />
      <div className="w-full  flex justify-between">
        <label htmlFor="file-input" className="cursor-pointer">
          <input
            id="file-input"
            className="hidden"
            type="file"
            accept="image/png, image/jpeg"
            // capture="user"
            onChange={(e) => {
              const file = e.target?.files && e.target?.files[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                const imageData = {
                  url: imageUrl,
                  name: file.name,
                  size: file.size,
                  type: file.type,
                };
                dispatch(setInputFile(imageData));
              }
            }}
          />
          <ImageIcon />
        </label>

        <button
          disabled={isChatLoading}
          type="submit"
          className={cn("bg-[#737984]  rounded-full border p-0.5", {
            "animate-pulse flex items-center justify-center cursor-not-allowed":
              isChatLoading,
          })}
        >
          {isChatLoading ? (
            <Loader2 className="w-5 h-5 flex items-center  animate-spin justify-center   text-black" />
          ) : (
            <ArrowUp className="w-5 h-5 " />
          )}
          <span className="sr-only"></span>
        </button>
      </div>
    </form>
  );
}
