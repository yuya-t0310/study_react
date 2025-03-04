import type { Todo } from "../Example";

type TaskListProps = {
  todos: Todo[];
};

const TaskList: React.FC<TaskListProps> = ({ todos }) => {
  return (
    <ul>
      <li>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </li>
    </ul>
  );
};

export default TaskList;
