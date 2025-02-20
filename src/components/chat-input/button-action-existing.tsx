import { ArrowUp } from "@/assets/icons";

export default function ButtonActionExisting({}: { chat_id: string }) {
  return (
    <button className="bg-[#737984] rounded-full border p-0.5">
      <ArrowUp className="   w-5 h-5 " />
    </button>
  );
}
