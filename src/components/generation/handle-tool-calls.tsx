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
    Icon: <RetryIcon />,
    content: "Try Again",
    fn: (id: string) => {},
  },
  {
    Icon: <FilterIcon />,
    content: "Modify",
    fn: (id: string) => {},
  },
  {
    Icon: <MagicPenIcon />,
    content: "Enhance",
    fn: (id: string) => {},
  },
  {
    Icon: <BoneIcon />,
    content: "Craft",
    fn: (id: string) => {},
  },
  {
    Icon: <MaximizeIcon />,
    content: "Maximize",
    fn: (id: string) => {},
  },
  {
    Icon: <DownloadIcon />,
    content: "Download",
    fn: (id: string) => {},
  },
];
