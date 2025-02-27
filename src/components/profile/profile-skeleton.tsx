import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileSkeleton() {
  return (
    <main className="flex items-center flex-col justify-center">
      <div className="flex w-16 h-16">
        <Skeleton className="w-full h-full border-2 rounded-2xl" />
      </div>
      <div className="mt-6 border-buu bg-overlay-primary bg-buu-button px-2 py-1 rounded-full text-sm uppercase">
        <Skeleton className="w-20 h-4" />
      </div>
      <div className="mt-4">
        <Skeleton className="w-32 h-6" />
      </div>

      <div className="flex items-center justify-center max-w-sm w-full mt-5 gap-5">
        <div className="flex items-center justify-start w-full flex-col">
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-16 h-6 mt-2" />
        </div>
        <div className="w-[1.5px] min-h-[50px] bg-muted-foreground/40" />
        <div className="flex items-center justify-start w-full flex-col">
          <Skeleton className="w-16 h-4" />
          <Skeleton className="w-20 h-6 mt-2" />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center mt-6">
        <Skeleton className="w-36 h-10 rounded-[10px]" />
        <Skeleton className="w-40 h-10 rounded-[10px]" />
      </div>
      <div className="mt-6">
        <Skeleton className="w-32 h-4" />
      </div>
      <div className="max-w-md w-full mt-4 flex flex-col gap-3">
        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between pl-3 pr-5 py-2 gap-2 w-full border-2 rounded-xl"
          >
            <div className="flex items-center justify-between gap-2">
              <Skeleton className="w-10 h-10 rounded-full" />
              <Skeleton className="w-20 h-4" />
            </div>
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
