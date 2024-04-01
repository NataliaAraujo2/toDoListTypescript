import { useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles from "./TaskForm.module.css";
import { ITask } from "../interfaces/Task";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
};

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [tittle, setTittle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, tittle, difficulty };

    setTaskList!([...taskList, newTask]);
    setTittle("");
    setDifficulty(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    
    if (e.target.id === "tittle") {
      setTittle(e.target.value);
    } else 
    if (!isNaN(difficulty)) {
        setDifficulty(parseInt(e.target.value));
      } else {
        setDifficulty(0); // Valor padrão
        alert("Digite um valor numérico para a dificuldade!"); // Mensagem de erro
      }
      
    }


  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="tittle">Título</label>
        <input
          type="text"
          id="tittle"
          name='"tittle'
          value={tittle}
          placeholder="Título da tarefa"
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade</label>
        <input
          type="text"
          id="difficulty"
          name='"difficulty'
          value={difficulty}
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
