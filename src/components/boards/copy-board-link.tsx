import React, { useState } from "react";
import { Button } from "../ui/button";
import CopyBlackIcon from "@/assets/icons/copy-black-icon";

export default function CopyBoardLink({ boardId }: { boardId: string }) {
  const [isCopy, setIsCopied] = useState(false);

  const link = `https://buu.fun/boards/${boardId}`;

  function handleCopy() {
    if (!link) return;
    window.navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <div className="bg-buu-button-muted flex gap-2 justify-between items-center px-6 py-3 rounded-2xl">
      <div>
        <p className="line-clamp-1">{link}</p>
      </div>
      <div>
        <Button
          onClick={() => {
            
            handleCopy();
          }}
          size={"buu"}
          variant={"special"}
        >
          <CopyBlackIcon />
        </Button>
      </div>
    </div>
  );
}
