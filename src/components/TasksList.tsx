import { ITask } from "../types/task";
import Task from "./Task";

// Стоило ыб вынести в useContext removeTask и toggleTask, чтобы не было пропс-дрилинга,
// но у меня не получилось типизировать контекст, так что пусть пока так будет
interface IProps {
  tasksList: ITask[];
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

export default function TasksList({ tasksList, removeTask, toggleTask }: IProps) {
  return (
    <ul className="list_wrap">
      <h3 className="list_title">Active Tasks</h3>
      {tasksList.map((item) => (
        <Task props={item} removeTask={removeTask} toggleTask={toggleTask} key={item.id} />
      ))}
    </ul>
  );
}
