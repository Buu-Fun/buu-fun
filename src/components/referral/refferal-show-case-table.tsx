import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import Pill from "../elements/pill";
import Bounded from "../ui/Bounded";

export default function ReferralShowcaseTable() {
  return (
    <Bounded className="max-w-screen-lg">
      <div
        // style="border-radius: 10px; overflow: hidden;"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
        }}
        className="w-full overflow-x-auto mt-8 border border-[#1c202788] "
      >
        <Table className="w-full ">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="h-auto bg-buu-table shadow-buu">
            <TableRow className=" hover:bg-muted/0 h-auto  !border-b-0  bg-clip-border !border-0 rounded-t-xl">
              <TableHead className="text-xs h-auto py-4 text-white/60  font-semibold uppercase w-1/4">
                WALLET ADDRESS
              </TableHead>
              <TableHead className="text-xs text-white/60 font-semibold uppercase w-1/4">
                REGISTRATION DATE
              </TableHead>
              <TableHead className="text-xs text-white/60 font-semibold uppercase w-1/4">
                staked amount
              </TableHead>
              <TableHead className="text-xs text-white/60 font-semibold uppercase w-1/4">
                your earnings
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {referralData.map((item) => {
              return (
                <TableRow
                key={`${item.id}`}
                className="h-auto border-[#1c202788]">
                  <TableCell className="h-auto  py-4">
                    <div className="flex items-center gap-1">
                      <Pill className="text-[10px] text-white/40 font-medium py-0 px-2">
                        {item.id}
                      </Pill>
                      {item.walletAddress}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground/40 font-medium">
                    {item.registrationDate}
                  </TableCell>
                  <TableCell className="text- font-medium">
                    $ {item.stakedAmount} USD
                  </TableCell>
                  <TableCell className="text- font-medium">
                    $ {item.earnings} USD
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Bounded>
  );
}

const referralData = [
  {
    id: "01",
    walletAddress: "0xf99760xf9...14a8",
    registrationDate: "March 10, 2025 12:48 PM",
    stakedAmount: "138.012456",
    earnings: "38.012456",
  },
  {
    id: "02",
    walletAddress: "0xf99760xf9...14a8",
    registrationDate: "March 10, 2025 12:48 PM",
    stakedAmount: "138.012456",
    earnings: "38.012456",
  },
  {
    id: "03",
    walletAddress: "0xf99760xf9...14a8",
    registrationDate: "March 10, 2025 12:48 PM",
    stakedAmount: "138.012456",
    earnings: "38.012456",
  },
];
