import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AppTask from "./components/AddTask"
import { useState } from "react";

function App() {
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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Delete task with ID: ", id);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(id);
  };

  const addTask = (task) => {
    task.id = tasks.length + 1
    setTasks([...tasks, task])
    console.log(task)
  }

  return (
    <div className="container">
      <Header></Header>
      <AppTask onAdd={addTask}></AppTask>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        "There are no tasks"
      )}
    </div>
  );
}

export default App;
