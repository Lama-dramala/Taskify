import { useState } from "react";
import { ITask } from "./types/task";

import Input from "./components/Input";
import TasksList from "./components/TasksList";

const App: React.FC = () => {
  const [tasksList, setTasksList] = useState<ITask[]>([]);

  const removeTask = (id: number): void => {
    setTasksList(tasksList.filter((item) => item.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasksList(
      tasksList.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          isDone: !item.isDone,
        };
      })
    );
  };

  return (
    <div className="container">
      <h1>Taskify</h1>
      <Input tasksList={tasksList} setTasksList={setTasksList} />
      <TasksList tasksList={tasksList} removeTask={removeTask} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
