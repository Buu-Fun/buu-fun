import { logo } from "@/assets/icons";
import WalletIcon from "@/assets/icons/wallet-icon";
import WalletKeyIcon from "@/assets/icons/wallet-key-icon";
import { cn } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { WalletWithMetadata } from "@privy-io/react-auth";
import Image from "next/image";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../ui/dialog";
import WalletIconStack from "./wallet-icons-stack";

export default function ExportSolanaWallet({
  className,
}: {
  className?: string;
}) {
  const { exportSolWallet, loading, isAuthenticated, user } =
    useAuthentication();
  const authenticated = !loading && isAuthenticated;
  const hasEmbeddedWallet =
    user &&
    !!user.linkedAccounts.find(
      (account): account is WalletWithMetadata =>
        account.type === "wallet" &&
        account.walletClientType === "privy" &&
        account.chainType === "solana"
    );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          //   onClick={() => {
          //     exportSolWallet();
          //   }}
          //   disabled={!authenticated || !hasEmbeddedWallet}
          size={"buu"}
          className={cn(className)}
        >
          <div className="text-black w-6 h-6   flex items-center justify-center">
            <WalletIcon />
          </div>
          <p className="font-medium ">Withdraw $BUU</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-[20px] max-w-max lg:rounded-[20px] bg-subscription-dialog pt-11 pb-6 px-6">
        <div className="absolute -top-6 flex items-center justify-center  w-full   h-10 mx-auto wf">
          <div className="w-20 h-20 ">
            <Image src={logo} width={200} alt="Buu-LOGO" height={200} />
          </div>
        </div>
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle className="text-2xl">Withdraw $BUU</DialogTitle>
          <DialogDescription className="text-center font-medium max-w-md">
            To withdraw BUU, you need to import your private key into a
            compatible wallet.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center    gap-2">
          <WalletIconStack />
          <p className="text-sm text-white font-medium ">
            Use a compatible wallet to import your wallet private key
          </p>
        </div>
        <DialogClose asChild>
          <Button
            onClick={() => {
              exportSolWallet();
            }}
            disabled={!authenticated || !hasEmbeddedWallet}
            size={"buu"}
            className="w-full"
          >
            <div className="text-black w-6 h-6   flex items-center justify-center">
              <WalletKeyIcon />
            </div>
            <p className="font-medium ">Download Key</p>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
