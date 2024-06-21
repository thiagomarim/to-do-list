import { FaRegCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TasksCard() {
  return (
    <section className="flex flex-col gap-12">
      <div className="border-t border-zinc-300">
        <div className="mt-4 flex items-center justify-between">
          <p className="font-semibold">Correr</p>
          <button className="flex items-center justify-center size-8 rounded-sm transition-colors bg-transparent hover:bg-red-200">
            <RiDeleteBinLine size={20} color="#ef4444" />
          </button>
        </div>
      </div>
    </section>
  );
}
