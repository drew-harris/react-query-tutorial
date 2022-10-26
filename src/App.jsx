import { useEffect } from "react";
import { addTodo, getTodos } from "./api";
import "./App.css";

function App() {
  useEffect(() => {
    async function fetchData() {
      const todos = await getTodos();
      console.log(todos);
    }

    fetchData();
  }, []);
  return (
    <div className="p-8">
      <div className="text-3xl">Todos</div>
    </div>
  );
}

export default App;
