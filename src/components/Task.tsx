import { useAppDispatch } from "../hooks";
import { ITask } from "../types/data";

import { toggleTask, removeTask } from "../redux/appSlice";

// Интерфейс получаемых компонентом пропсов
interface IProps {
  props: ITask;
}

export default function Task({ props }: IProps) {
  const dispatch = useAppDispatch();

  return (
    <li className="list_item">
      <span
        className={`list_item_title ${props.isDone ? " crossed" : ""}`}
        onClick={() => dispatch(toggleTask(props.id))}
      >
        {props.title}
      </span>
      <button className="list_item_btn" onClick={() => dispatch(removeTask(props.id))}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
        </svg>
      </button>
    </li>
  );
}
