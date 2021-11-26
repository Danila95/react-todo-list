import { Component } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 1, title: "Create todo-react app", done: false },
        { id: 2, title: "Make a cake about it", done: true },
        { id: 3, title: "Be one with Yuri", done: false },
        { id: 4, title: "Create a new world", done: true },
      ],
    };
    //this.maxId = this.state.tasks.length;
  }

  addTask = (task) => {
    let newTasks = {
      id: this.state.tasks.length + 1,
      title: task,
      done: false,
    };

    this.setState(({ tasks }) => {
      return { tasks: [...tasks, newTasks] };
    });
  };

  doneTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    console.log(index);
    this.setState((state) => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = (id) => {
    let newTask = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: newTask,
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);

    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map((task) => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task}
            key={task.id}
          />
        ))}
        <TaskInput addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
