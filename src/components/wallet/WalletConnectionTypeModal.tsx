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
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">Login dialog</DialogTitle>
          <DialogDescription className="sr-only">Login</DialogDescription>
        </DialogHeader>

        <div>
          <div>Sign in</div>

          <div>{`Choose the type of wallet you want to connect`}</div>

          <div>
            <Button
              onClick={() => {
                connect(WalletConnectionType.Web2);
                onOpenChange(false);
              }}
            >
              Login
            </Button>
            <Button
              color="primary"
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
