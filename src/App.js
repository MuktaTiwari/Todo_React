import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: "",
            description: "",
            tasks: [],
        };
    }

    updateInput = (field, value) => {
        this.setState({ [field]: value });
    };

    addTask = () => {
        const { taskName, description, tasks } = this.state;
        if (taskName.trim() !== "" && description.trim() !== "") {
            const newTask = {
                id: Math.random(),
                name: taskName,
                description: description,
            };

            this.setState({
                tasks: [...tasks, newTask],
                taskName: "",
                description: "",
            });
        }
    };

    deleteTask = (id) => {
        const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
        this.setState({ tasks: updatedTasks });
    };

    render() {
        const { taskName, description, tasks } = this.state;

        return (
            <div className="container mt-5">
                <h1 className="text-center">To-Do List</h1>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Task Name"
                                value={taskName}
                                onChange={(e) =>
                                    this.updateInput("taskName", e.target.value)
                                }
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={description}
                                onChange={(e) =>
                                    this.updateInput("description", e.target.value)
                                }
                            />
                            <button
                                className="btn btn-success"
                                onClick={this.addTask}
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Task Name</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.description}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                    this.deleteTask(task.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
