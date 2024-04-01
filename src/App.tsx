import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import { ITask } from "./interfaces/Task";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id != id;
      })
    );
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>O que você vai fazer?</h1>
        <TaskForm
          btnText="Criar Tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TaskList taskList={taskList} handleDelete={deleteTask} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
