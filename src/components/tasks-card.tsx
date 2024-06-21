import { RiDeleteBinLine } from "react-icons/ri";
import { TasksProps } from "../App";

interface TasksCardProps {
  tasks: TasksProps[];
}

export default function TasksCard({ tasks }: TasksCardProps) {
  return (
    <section className="flex flex-col gap-8">
      {tasks.map((task) => (
        <div key={task.id} className="border-b border-zinc-300">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">{task.text}</p>
            <button className="flex items-center justify-center size-8 rounded-sm transition-colors bg-transparent hover:bg-red-200">
              <RiDeleteBinLine size={20} color="#ef4444" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
