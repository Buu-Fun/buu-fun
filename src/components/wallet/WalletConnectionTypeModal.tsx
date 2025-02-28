import { WalletConnectionType } from "@/providers/wallet.context";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

export const WalletConnectionTypeModal = ({
  isOpen,
  onOpenChange,
  connect,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  connect: (connectionType: WalletConnectionType) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger className="sr-only">LOGIN</DialogTrigger>
      <DialogContent className="max-w-[300px] bg-buu-opacity-100 border-buu shadow-buu-button">
        <DialogHeader className="">
          <DialogTitle className="">Sign in</DialogTitle>
          <DialogDescription className="">
            Choose the type of login method <br /> you want to connect Buu.fun
          </DialogDescription>
        </DialogHeader>

        <div className="w-full">
          <div className="flex gap-2 items-center justify-center flex-col w-full">
            <Button
              className="w-full bg-buu shadow-buu-secondary 
              hover:bg-buu-secondary hover:opacity-100"
              variant={"secondary"}
              onClick={() => {
                connect(WalletConnectionType.Web2);
                onOpenChange(false);
              }}
            >
              Email
            </Button>
            <Button
              className="w-full bg-buu shadow-buu-secondary
              hover:bg-buu-secondary hover:opacity-100"
              variant={"secondary"}
              onClick={() => {
                connect(WalletConnectionType.Web3);
                onOpenChange(false);
              }}
            >
              Connect Wallet
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
