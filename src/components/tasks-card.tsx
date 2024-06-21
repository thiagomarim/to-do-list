import { RiDeleteBinLine } from "react-icons/ri";
import { TasksProps } from "../App";

interface TasksCardProps {
  tasks: TasksProps[];
  handleDelete: (taskId: string) => void;
}

export default function TasksCard({ tasks, handleDelete }: TasksCardProps) {
  return (
    <div className="flex flex-col gap-8">
      {tasks.map((task) => (
        <div key={task.id} className="border-b border-zinc-300">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">{task.text}</p>
            <button
              onClick={() => handleDelete(task.id)}
              className="flex items-center justify-center size-8 rounded-sm transition-colors bg-transparent hover:bg-red-200"
            >
              <RiDeleteBinLine size={20} color="#ef4444" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
