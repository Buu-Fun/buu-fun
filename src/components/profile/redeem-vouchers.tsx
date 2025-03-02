import { addCreditsMutation } from "@/lib/react-query/user";
import {
  redeemVoucherSchema,
  TRedeemVoucherSchema,
} from "@/lib/zod/redeem-voucher";
import { useAuthentication } from "@/providers/account.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TicketIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
export default function RedeemVouchers() {
  const { identityToken, login } = useAuthentication();
  const queryClient = useQueryClient();
  const { mutate: AddRedeemVoucher } = useMutation({
    mutationFn: addCreditsMutation,
    onSuccess() {
      toast.success("Added Credits your Account");
      queryClient.invalidateQueries({
        queryKey: ["get-user-credits"],
      });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const { register, handleSubmit } = useForm<TRedeemVoucherSchema>({
    resolver: zodResolver(redeemVoucherSchema),
  });

  function handleRedeemVoucherSubmit({ code }: TRedeemVoucherSchema) {
    const accessToken = identityToken;
    if (!accessToken) {
      login();
      return;
    }

    AddRedeemVoucher({
      accessToken,
      code,
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-2 group py-2 h-[40px] rounded-[10px]">
          <div className="w-6 h-6 icon-blue-with-shadow blue-icon-gradient-background blue-icon-filter-effect rounded-md flex items-center justify-center">
            <TicketIcon className="text-white stroke-[2.5]" />
          </div>
          Redeem Voucher
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[300px] bg-buu-opacity-100 border-buu shadow-buu-button">
        <DialogHeader>
          <DialogTitle>Redeem Voucher</DialogTitle>
          <DialogDescription>
            Use your voucher to access exclusive AI-generated assets and
            features.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleRedeemVoucherSubmit)}>
          <div className="items-center gap-4">
            <Label htmlFor="code" className="text-right">
              Voucher code
            </Label>
            <Input
              placeholder="Eg: BUU84MSDASG"
              id="code"
              className="col-span-3"
              {...register("code")}
            />
          </div>
          <Button className="px-2 group py-2 h-[40px] w-full mt-4 rounded-[10px]">
            <div className="w-6 h-6 icon-blue-with-shadow blue-icon-gradient-background blue-icon-filter-effect rounded-md flex items-center justify-center">
              <TicketIcon className="text-white stroke-[2.5]" />
            </div>
            Redeem Voucher
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
