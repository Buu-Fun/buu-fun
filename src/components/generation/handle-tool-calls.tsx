import {
  // BoneIcon,
  DownloadIcon,
  // FilterIcon,
  // MagicPenIcon,
  // MaximizeIcon,
  RetryIcon,
} from "@/assets/icons";

export const ToolTips = [
  {
    type: "TRY_AGAIN" as const,
    Icon: <RetryIcon />,
    content: "Try Again",
  },
  // {
  //   type: "MODIFY" as const,
  //   Icon: <FilterIcon />,
  //   content: "Modify",
  // },
  // {
  //   type: "ANIMATE" as const,
  //   Icon: <MagicPenIcon />,
  //   content: "Animate",
  // },
  // {
  //   type: "AUTO_RIGGING" as const,
  //   Icon: <BoneIcon />,
  //   content: "Auto-rigging",
  // },
  // {
  //   type: "MAXIMIZE" as const,
  //   Icon: <MaximizeIcon />,
  //   content: "Maximize",
  // },
  {
    type: "DOWNLOAD" as const,
    Icon: <DownloadIcon />,
    content: "Download",
  },
];

export type TToolTipsData = typeof ToolTips;
export type TToolTipEvents = TToolTipsData[number]["type"];
