import { useAppDispatch } from "@/hooks/redux";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import { Button } from "../ui/button";

export default function ManageUserSubscriptionButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(setSubscriptionModel(true));
      }}
      variant={"special"}
      size={"special"}
    >
      Manage subscription{" "}
    </Button>
  );
}
