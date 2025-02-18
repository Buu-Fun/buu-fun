import { LowPoly, Realistic } from "@/assets/Image";
import MetallicIcon from "@/assets/Image/metallic";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  changeThreeDStyles,
  threeDStyles,
} from "@/lib/redux/features/settings";

export default function ThreeDSelectBox() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.settings.ThreeDStyle);
  return (
    <div className="mt-6">
      <p className="uppercase text-sm font-semibold mb-3">style</p>
      <Select
        value={selected}
        // This is disabled because it could be any value also added defensive statement to check whether the value is right one.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onValueChange={(value: any) => {
          if (threeDStyles.includes(value)) {
            dispatch(changeThreeDStyles(value));
            return;
          }
          dispatch(changeThreeDStyles("no_style"));
        }}
      >
        <SelectTrigger className="bg-buu-secondary focus:ring-1 border-none h-11 rounded-2xl ">
          <SelectValue
            placeholder={
              <div className="flex items-center justify-center gap-2 ">
                <div className="bg-[#2D323C] w-4 h-4 rounded-full" />
                <span>No Style</span>
              </div>
            }
          />
        </SelectTrigger>
        <SelectContent className="bg-[#1C2129] border-none shadow-buu-muted border-buu  ">
          <SelectItem
            className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10   py-3"
            value="no_style"
          >
            <div className="flex items-center justify-center gap-2 ">
              <div className="bg-[#2D323C] w-4 h-4 rounded-full" />
              <span>No Style</span>
            </div>
          </SelectItem>
          <SelectItem
            className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10  py-3 "
            value="metallic"
          >
            <div className="flex items-center justify-center gap-2 ">
              <div className="w-4 h-4">
                <MetallicIcon />
              </div>
              <span>Metallic</span>
            </div>
          </SelectItem>
          <SelectItem
            className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10  py-3"
            value="realistic"
          >
            <div className="flex items-center justify-center gap-2 ">
              <Image
                width={100}
                height={100}
                className="w-4 h-4 rounded-full"
                src={Realistic.src}
                alt="Realistic icon"
              />
              <span>Realistic</span>
            </div>
          </SelectItem>
          <SelectItem
            className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10  py-3"
            value="low_poly"
          >
            <div className="flex items-center justify-center gap-2 ">
              <Image
                width={100}
                height={100}
                className="w-4 h-4 rounded-full"
                src={LowPoly.src}
                alt="Low Poly icon"
              />
              <span>Low Poly</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>{" "}
    </div>
  );
}
