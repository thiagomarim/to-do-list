import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { FormEvent, useState } from "react";
import TasksCard from "./components/tasks-card";

export interface TasksProps {
  id: string;
  text: string;
}

export default function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      id: "0",
      text: "Correr",
    },
    {
      id: "1",
      text: "Correr 2",
    },
  ]);
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

  return (
    <section className="container flex flex-col items-center justify-center w-full h-screen">
      <form onSubmit={handleSubmit} className="flex items-center w-full gap-2">
        <Input
          onChange={(event) => setInput(event.target.value)}
          placeholder="Escreva uma tarefa aqui!"
          className="h-12"
          required
          value={input}
        />
        <Button className="h-12">Enviar</Button>
      </form>

      <div className="mt-12 flex items-center gap-2 w-full">
        <span>Tarefas criadas</span>
        <div className="flex items-center justify-center size-6 bg-zinc-100 rounded-full">
          <span className="text-sm">{tasks.length}</span>
        </div>
      </div>

      <div className="mt-6 w-full">
        <TasksCard tasks={tasks} />
      </div>
    </section>
  );
}
