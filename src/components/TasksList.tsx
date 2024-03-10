import { useAppSelector } from "../hooks";

import Task from "./Task";

export default function TaskList() {
  const { tasksList } = useAppSelector((state) => state.appSlice);

  return (
    <div className="list_wrap">
      <h3 className="list_title">Active Tasks</h3>
      <ul>
        {tasksList.map((item) => (
          <Task props={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
