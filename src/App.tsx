import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { FormEvent, useState } from "react";
import TasksCard from "./components/tasks-card";

export interface TasksProps {
  id: string;
  text: string;
}

export default function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [input, setInput] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: input,
      },
    ]);

    setInput("");
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <section className="container flex flex-col w-full min-h-[600px]">
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full gap-2"
        >
          <Input
            onChange={(event) => setInput(event.target.value)}
            placeholder="Escreva uma tarefa"
            className="h-12 text-base"
            required
            value={input}
          />
          <Button className="h-12">Enviar</Button>
        </form>

        <div className="mt-6 flex items-center gap-2 w-full">
          <span>Tarefas criadas</span>
          <div className="flex items-center justify-center size-6 bg-zinc-100 rounded-full">
            <span className="text-sm font-semibold">{tasks.length}</span>
          </div>
        </div>

        <div className="mt-12 w-full max-h-[400px] overflow-auto">
          <TasksCard tasks={tasks} handleDelete={deleteTaskById} />
        </div>
      </section>
    </main>
  );
}
