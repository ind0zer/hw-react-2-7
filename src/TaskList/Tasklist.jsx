import React from "react";
import styles from "./Tasklist.module.scss";

class TaskList extends React.Component {
  static tasks = [
    { id: 1, text: "Зробити домашку" },
    { id: 2, text: "Піти в магазин" }
  ];

  inputRef = React.createRef();

  addTask = () => {
    const text = this.inputRef.current.value.trim();
    if (text) {
      TaskList.tasks.push({ id: Date.now(), text });
      this.inputRef.current.value = "";
      this.forceUpdate();
    }
  };

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter(task => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <div className={styles["taskList__container"]}>
        <h2>Список завдань</h2>
        <div className={styles["taskList__form"]}>
          <input
            type="text"
            placeholder="Нове завдання"
            ref={this.inputRef}
            className={styles["taskList__input"]}
          />
          <button onClick={this.addTask} className={styles["taskList__addBtn"]}>
            Додати
          </button>
        </div>
        <ul className={styles["taskList__list"]}>
          {TaskList.tasks.map((task) => (
            <li key={task.id} className={styles["taskList__item"]}>
              <span>{task.text}</span>
              <button
                onClick={() => this.deleteTask(task.id)}
                className={styles["taskList__deleteBtn"]}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
