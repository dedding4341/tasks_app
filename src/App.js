import Header from "./components/Header";
import Tasks from "./components/Tasks";
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

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
