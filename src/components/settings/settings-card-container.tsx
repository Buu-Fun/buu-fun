import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsBarSelectedDisplay from "./settings-bar-selected-display";
import { ThreeDImages } from "@/constants/settings-card";
import Image from "next/image";

const StyleCard = () => {
  return (
    <Tabs defaultValue="account" className="w-full aspect-video">
      <TabsList className=" flex gap-2 items-center  justify-start w-full bg- mb-6">
        <TabsTrigger
          className="text-muted-foreground/60 rounded-[16px] max-w-max py-1.5 px-2 data-[state=active]:bg-white data-[state=active]:text-black group data-[state=active]:border-none"
          value="threeDObject"
        >
          <SettingsBarSelectedDisplay />
        </TabsTrigger>
        <TabsTrigger
          className="text-muted-foreground/60 rounded-[16px] max-w-max py-2 px-4 data-[state=active]:bg-white group data-[state=active]:text-black data-[state=active]:border-none"
          value="comic"
        >
          <SettingsBarSelectedDisplay title="Comic" />

          {/* <SettingsBarSelectedDisplay /> */}
        </TabsTrigger>{" "}
        <TabsTrigger
          className="text-muted-foreground/60 rounded-[16px] max-w-max py-2 px-4 data-[state=active]:bg-white group data-[state=active]:text-black data-[state=active]:border-none"
          value="video"
        >
          <SettingsBarSelectedDisplay title="video" />
          {/* <SettingsBarSelectedDisplay /> */}
        </TabsTrigger>{" "}
      </TabsList>
      <TabsContent id="three-d-container" className="" value="threeDObject">
        <div
          id="three-object-content container"
          className="flex flex-1 flex-shrink gap-2"
        >
          {ThreeDImages.sort((a, b) => (a.alt.length < b.alt.length ? 1 : -1)).map((item, index) => (
            <button
              key={`${index}-${item.alt}-three-d-object`}
              className="max-h-12 w-10 overflow-hidden rounded-sm"
            >
              <Image
                key={`${index}-${item.alt}-three-d-object-image`}
                className="h-full hover:scale-110 transition-transform duration-100 ease-in w-full flex  "
                src={item.url}
                alt={item.alt}
                width={256}
                height={170}
              />
            </button>
          ))}
        </div>
      </TabsContent>
      <TabsContent id="comic-container" className="" value="comic">
        <div className="flex flex-1 flex-shrink gap-2">
          {ThreeDImages.sort((a, b) => (a.id > b.id  ? -1 : 1)).map(
            (item, index) => (
              <button
                key={`${index}-${item.alt}-comic`}
                className="max-h-12 w-10 overflow-hidden rounded-sm"
              >
                <Image
                  key={`${index}-${item.alt}--image-comic`}
                  className="h-full hover:scale-110 transition-transform duration-100 ease-in w-full flex  "
                  src={item.url}
                  alt={item.alt}
                  width={256}
                  height={170}
                />
              </button>
            )
          )}
        </div>
      </TabsContent>
      <TabsContent id="video-container" className="" value="video">
        <div className="flex flex-1 flex-shrink gap-2">
          {ThreeDImages.sort((a, b) =>
            a.alt.length > b.alt.length ? 1 : -1
          ).map((item, index) => (
            <button
              key={`${index}-${item.alt}-video`}
              className="max-h-12 w-10 overflow-hidden rounded-sm"
            >
              <Image
                key={`${index}-${item.alt}--video-video`}
                className="h-full hover:scale-110 transition-transform duration-100 ease-in w-full flex  "
                src={item.url}
                alt={item.alt}
                width={256}
                height={170}
              />
            </button>
          ))}
        </div>
      </TabsContent>{" "}
    </Tabs>
  );
};

export default StyleCard;
