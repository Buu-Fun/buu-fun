"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsBarSelectedDisplay from "./settings-bar-selected-display";
import { ThreeDImages } from "@/constants/settings-card";
import Image from "next/image";
import ThreeDSelectBox from "./three-d-select-box";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { changeModes, contentModes } from "@/lib/redux/features/settings";

export default function SettingsCardContainer() {
  const selected = useAppSelector((state) => state.settings.modes);
  const dispatch = useAppDispatch();
  return (
    <Tabs
      defaultValue="three_d_object"
      //    disabled any because its actually a string and it could be any string. so defend checking and setting the value in store.
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      onValueChange={(value: any) => {
        if (contentModes.includes(value)) {
          dispatch(changeModes(value));
          return;
        }
        dispatch(changeModes("three_d_object"));
      }}
      value={selected}
      className="w-full aspect-video"
    >
      <TabsList className=" flex gap-2 items-center  justify-start w-full bg- mb-6">
        <TabsTrigger
          onClick={() => {
            dispatch(changeModes("three_d_object"));
          }}
          className="text-muted-foreground/60 rounded-[16px] max-w-max py-1.5 px-2 data-[state=active]:bg-white data-[state=active]:text-black group data-[state=active]:border-none"
          value="three_d_object"
        >
          <SettingsBarSelectedDisplay />
        </TabsTrigger>
        <TabsTrigger
          onClick={() => {
            dispatch(changeModes("comic"));
          }}
          className="text-muted-foreground/60 rounded-[16px] max-w-max py-2 px-4 data-[state=active]:bg-white group data-[state=active]:text-black data-[state=active]:border-none"
          value="comic"
        >
          <SettingsBarSelectedDisplay title="Comic" />

          {/* <SettingsBarSelectedDisplay /> */}
        </TabsTrigger>{" "}
        <TabsTrigger
          onClick={() => {
            dispatch(changeModes("video"));
          }}
          className="text-muted-foreground/60 rounded-[16px] max-w-max py-2 px-4 data-[state=active]:bg-white group data-[state=active]:text-black data-[state=active]:border-none"
          value="video"
        >
          <SettingsBarSelectedDisplay title="Video" />
        </TabsTrigger>{" "}
      </TabsList>
      <TabsContent id="three-d-container" className="" value="three_d_object">
        <div
          id="three-object-content container"
          className="flex flex-1 flex-shrink gap-2"
        >
          {ThreeDImages.sort((a, b) =>
            a.alt.length < b.alt.length ? 1 : -1
          ).map((item, index) => (
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
        <ThreeDSelectBox />
      </TabsContent>
      <TabsContent id="comic-container" className="" value="comic">
        <div className="flex flex-1 flex-shrink gap-2">
          {ThreeDImages.sort((a, b) => (a.id > b.id ? -1 : 1)).map(
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
}
