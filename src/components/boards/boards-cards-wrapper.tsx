"use client";
import useSharableBoards from "@/hooks/use-boards";
import BoardsCardMapper from "./boards-card-mapper";
import { useMutation } from "@tanstack/react-query";
import { deleteBoard } from "@/lib/react-query/boards";
import toast from "react-hot-toast";
import { TypedAppError } from "@/class/error";
import { useAuthentication } from "@/providers/account.context";
export default function BoardsCardWrapper() {
  const { data } = useSharableBoards();
  const { identityToken: accessToken, login } = useAuthentication();
  const { mutate: deleteUserBoard } = useMutation({
    mutationFn: deleteBoard,
    onMutate() {
      toast.loading("Adding to boards...");
    },
    onError(error) {
      toast.dismiss();
      if (error instanceof TypedAppError) {
      }
      toast.error("Something went wrong, Please try again.");
    },
    onSettled() {
      toast.dismiss();
    },
  });

  function handleDelete(boardId: string) {
    if (!accessToken) {
      login();
      return;
    }
    deleteUserBoard({ accessToken, boardId });
  }

  return (
    <div className="flex gap-3 items-center flex-wrap justify-center mt-6">
      {data &&
        data?.items.map((item) => {
          return (
            <button
              onClick={() => {
                handleDelete(item._id);
              }}
            >
              <BoardsCardMapper
                key={`boards-card-${item._id}`}
                ideas={item.ideas}
                title={item.title}
              />
            </button>
          );
        })}

      {/* <BoardCards idea={2} images={TwoColumnImage} title="Fantasy Manga" />
      <BoardCards idea={3} images={ThreeColumnImage} title="Car in fog" /> */}
    </div>
  );
}
