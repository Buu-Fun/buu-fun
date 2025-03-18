import ExportSolanaWallet from "./export-wallet";

export default function HowExportWorks() {
  return (
    <div className="flex gap-2 items-center justify-center">
      <ExportSolanaWallet />
      {/* <Button size={"special"} variant={"special"}>
        <div className="w-4  h-4 flex items-center justify-center">
          <QuestionIcons />
        </div>
        <p className="font-medium ">How it works</p>
      </Button> */}
    </div>
  );
}
