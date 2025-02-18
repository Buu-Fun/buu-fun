"use client";
import React, { useEffect, useRef } from "react";

export default function ChatTextArea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const adjustHeight = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        // Reset height to avoid continuous growth
        textarea.style.height = "auto";
        // Set new height based on scrollHeight
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    };

    // Add event listener to the textarea
    const textarea = textareaRef.current;
    textarea?.addEventListener("input", adjustHeight);

    return () => {
      textarea?.removeEventListener("input", adjustHeight);
    };
  }, []);

  return (
    <textarea
      rows={2}
      ref={textareaRef}
      placeholder="What do you want to see..."
      className="w-full  py-2  max-h-[200px] scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded  bg-transparent rounded-md resize-none text-base placeholder:text-muted-foreground/40 focus:outline-none scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100"
    />
  );
}
