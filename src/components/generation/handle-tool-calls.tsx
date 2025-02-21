import {
  BoneIcon,
  DownloadIcon,
  FilterIcon,
  MagicPenIcon,
  MaximizeIcon,
  RetryIcon,
} from "@/assets/icons";

export const ToolTips = [
  {
    type: "TRY_AGAIN" as const,
    Icon: <RetryIcon />,
    content: "Try Again",
    fn: (id: string) => {},
  },
  {
    type: "MODIFY" as const,
    Icon: <FilterIcon />,
    content: "Modify",
    fn: (id: string) => {},
  },
  {
    type: "ENHANCE" as const,
    Icon: <MagicPenIcon />,
    content: "Enhance",
    fn: (id: string) => {},
  },
  {
    type: "CRAFT" as const,
    Icon: <BoneIcon />,
    content: "Craft",
    fn: (id: string) => {},
  },
  {
    type: "MAXIMIZE" as const,
    Icon: <MaximizeIcon />,
    content: "Maximize",
    fn: (id: string) => {},
  },
  {
    type: "DOWNLOAD" as const,
    Icon: <DownloadIcon />,
    content: "Download",
    fn: (id: string) => {},
  },
];

export type TToolTipsData = typeof ToolTips
export type TToolTipEvents = TToolTipsData[number]['type'] 