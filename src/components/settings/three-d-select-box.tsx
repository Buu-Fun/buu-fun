import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  changeThreeDStyles,
  setStyleSelectChange,
  threeDStyles,
  TThreeDStyles,
} from "@/lib/redux/features/settings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { iconByTitle } from "./styles-data";

export default function ThreeDSelectBox() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.settings);
  return (
    <div className="mt-6">
      <p className="uppercase text-sm font-semibold mb-3">style</p>
      <Select
        open={selected.isStyleBoxOpen}
        onOpenChange={(value) => {
          dispatch(setStyleSelectChange(value));
        }}
        value={selected.ThreeDStyle}
        // This is disabled because it could be any value also added defensive statement to check whether the value is right one.
        onValueChange={(value: TThreeDStyles) => {
          if (threeDStyles.includes(value)) {
            dispatch(changeThreeDStyles(value));
            return;
          }
          dispatch(changeThreeDStyles(undefined));
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
          {Object.values(iconByTitle).map(({ displayName, value, Icon }) => (
            <SelectItem
              key={`${displayName}-${value}-styles-selector`}
              className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10   py-3"
              value={value}
            >
              <div className="flex items-center justify-center gap-2 ">
                <div className="h-4 w-4">{Icon}</div>
                {/* <div className="bg-[#2D323C] w-4 h-4 rounded-full" /> */}
                <span>{displayName}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>{" "}
    </div>
  );
}

{
  /* <SelectItem
            className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10   py-3"
            value={"no_style"}
          >
            <div className="flex items-center justify-center gap-2 ">
              <div className="bg-[#2D323C] w-4 h-4 rounded-full" />
              <span>No Style</span>
            </div>
          </SelectItem>
          <SelectItem
            className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10  py-3 "
            value="Metallic"
          >
            <div className="flex items-center justify-center gap-2 ">
              <div className="w-4 h-4">
                <Image
                  src={Metallic.src}
                  width={100}
                  height={100}
                  alt="Realistic Icon"
                  className="w-full h-full rounded-full"
                />{" "}
              </div>
              <span>Metallic</span>
            </div>
          </SelectItem>
          <SelectItem
            className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10  py-3"
            value="Realistic"
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
            value="lowPoly"
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
          </SelectItem> */
}
