import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {getTaskById, updateTask} from "../services/taskService";

const EditTask = () => {
   const { id } = useParams();

    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);

    useEffect(() => {

        const fetchTask = async () => {

            try {

                const response = await getTaskById(id);

                setTitle(response.data.title);
                setCompleted(response.data.completed);

            }
            catch (error) {
                console.log(error);
            }
        };

        fetchTask();

    }, [id]);

    const handleSubmit = async (event) => {

        event.preventDefault();

        const updatedTask = {
            title: title,
            completed: completed
        };

        try {

            const response = await updateTask(id, updatedTask);

            console.log("Updated Task:", response.data);

        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div>

            <h1>Edit Task</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Task Title</label>

                    <input
                        type="text"
                        value={title}
                        onChange={(event) =>
                            setTitle(event.target.value)
                        }
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
                    Update Task
                </button>

            </form>

        </div>
    );
}

export default EditTask;
