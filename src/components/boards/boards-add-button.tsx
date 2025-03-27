import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BoardsAddButton() {
  // const { data } = useSharableBoards({});
  // const { data: userUserSubscription } = useUserSubscription();
  const router = useRouter();
  // check the user plan and disable the plus.
  return (
    <Button
      onClick={() => {
        router.push("/app?new_board=true");
      }}
      size={"sm"}
      className="rounded-full w-6 h-6"
    >
      <Plus size={12} strokeWidth={3} className="text-icon" />
    </Button>
  );
}
