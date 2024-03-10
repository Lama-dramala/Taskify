import Input from "./components/Input";
import TaskList from "./components/TasksList";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Taskify</h1>
      <Input />
      <TaskList />
    </div>
  );
};

export default App;
