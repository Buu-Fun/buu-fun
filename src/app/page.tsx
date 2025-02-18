import StarIcon from "@/assets/icons/star-icon";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full ">
      <div className="flex  relative ">
        <div className="bg-gradient absolute  w-5 h-5  flex items-center justify-center  top-[18px] left-[28px] blur-[18.5px]" />
        <StarIcon />
        <div className="w-10 flex absolute -top-10 right-0 h-10">
          <StarIcon />
        </div>
      </div>
      <h1 className="text-xl text-gray-600 font-bold">
        Welcome to Leonardo AI
      </h1>
      <p className="text-5xl font-bold my-2 hero-gradient-text ">
        How can I help?{" "}
      </p>
    </main>
  );
}
