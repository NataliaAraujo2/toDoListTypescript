import { ITask } from "../interfaces/Task";
import styles from './TaskList.module.css'

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void
};

const TaskList = ({ taskList, handleDelete }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.tittle}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
                <i className="bi bi-pencil"></i>
                <i className="bi bi-trash" onClick={()=> handleDelete(task.id)}></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
