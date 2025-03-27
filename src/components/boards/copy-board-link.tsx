import CopyIcon from "@/assets/icons/copy-icon";
import { getSharableUrl } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function CopyBoardLink({ boardId }: { boardId: string }) {
  const [isCopy, setIsCopied] = useState(false);

  const link = getSharableUrl(boardId);

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
          {!isCopy ? <CopyIcon /> : <CheckCircle2 className="text-cyan-200" />}
        </Button>
      </div>
    </div>
  );
}
