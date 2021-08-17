import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dummy task",
      day: "Dummy day",
      reminder: true,
    },
    {
      id: 2,
      text: "Dummy task",
      day: "Dummy day",
      reminder: true,
    },
    {
      id: 3,
      text: "Dummy task",
      day: "Dummy day",
      reminder: true,
    },
  ]);

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
