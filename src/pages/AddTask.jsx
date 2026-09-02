import React from 'react';
import { useState } from "react";
import { createTask } from "../services/taskService";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        const newTask = {
            title: title,
            completed: completed
        };

        try {

            const response = await createTask(newTask);

            console.log("Created Task:", response.data);

            setTitle("");
            setCompleted(false);

        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div>

            <h1>Add Task</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Task Title</label>

                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Enter task"
                    />
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={(event) =>
                                setCompleted(event.target.checked)
                            }
                        />

                        Completed
                    </label>
                </div>

                <button type="submit">
                    Add Task
                </button>

            </form>

        </div>
    );
}

export default AddTask;
