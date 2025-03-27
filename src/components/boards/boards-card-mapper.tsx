import { GetUserShareableBoardQuery } from "@/gql/types/graphql";
import React from "react";
import BoardCards, {
  SingleImageLayout,
  ThreeColumnImageLayout,
  TwoColumnImage,
  TwoColumnImageLayout,
} from "./boards-card";
type ShareableBoardPageType = Extract<
  GetUserShareableBoardQuery["getUserShareableBoard"],
  { items: any }
>;

type ShareableBoardType = ShareableBoardPageType["items"][number];

type TIdeas = ShareableBoardType["ideas"];

export function clearUndefinedOrNull(value: any | null | undefined): Boolean {
  return typeof value !== "undefined" || value !== null;
}

export default function BoardsCardMapper({
  ideas,
  title,
}: {
  ideas: TIdeas;
  title: string;
}) {
  const images = ideas
    .map((idea) => {
      const genRequest = idea.genRequests;
      const images = genRequest.map((item) => item.images);
      if (!images) return [];
      const imageUrls = images
        .map((item) => item?.map((item) => item.url))
        .filter((item) => typeof item !== "undefined")
        .flatMap((item) => item);

      return imageUrls;
    })
    .flatMap((item) => item);
  const imageCmp = getImageComponent({ images });
  return <BoardCards idea={ideas.length} images={imageCmp} title={title} />;
}
// type TMedia =
function getImageComponent({ images }: { images: string[] }) {
  if (!images.length) return null;
  if (images.length === 1) {
    return <SingleImageLayout alt={"Single image"} url={images[0]} />;
  }
  if (images.length === 2) {
    return (
      <TwoColumnImageLayout
        media={[
          { alt: "Dual Image layout image 1", url: images[0] },
          { alt: "Dual Image layout image 2", url: images[1] },
        ]}
      />
    );
  }
  return (
    <ThreeColumnImageLayout
      media={[
        { alt: "Dual Image layout image 1", url: images[0] },
        { alt: "Dual Image layout image 2", url: images[1] },
        { alt: "Dual Image layout image 2", url: images[2] },
      ]}
    />
  );
}
