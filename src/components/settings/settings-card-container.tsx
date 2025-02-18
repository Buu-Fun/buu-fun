import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsBarSelectedDisplay from "./settings-bar-selected-display";

const StyleCard = () => {
  return (
    <Tabs defaultValue="account" className="w-full aspect-video">
      <TabsList className=" flex gap-2 items-center justify-start w-full bg-">
        <TabsTrigger
          className=" rounded-[16px] max-w-max py-2 px-4 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-none"
          value="threeDObject"
        >
          <SettingsBarSelectedDisplay />
        </TabsTrigger>
        <TabsTrigger
          className="text-muted-foreground/60 rounded-[16px] max-w-max py-2 px-4 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-none"
          value="comic"
        >
          Comic
          {/* <SettingsBarSelectedDisplay /> */}
        </TabsTrigger>{" "}
        <TabsTrigger
          className="text-muted-foreground/60 rounded-[16px] max-w-max py-2 px-4 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-none"
          value="video"
        >
          Video
          {/* <SettingsBarSelectedDisplay /> */}
        </TabsTrigger>{" "}
      </TabsList>
      <TabsContent value="threeDObject">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default StyleCard;
