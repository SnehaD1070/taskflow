import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../services/taskService";

function TaskDetails() {
    const { id } = useParams();

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await getTaskById(id);

                setTask(response.data);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [id]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!task) {
        return <h2>Task not found</h2>;
    }

    return (
        <div>
            <h1>Task Details</h1>

            <h2>{task.title}</h2>

            <p>Task ID: {task.id}</p>

            <p>
                Status:{" "}
                {task.completed ? "Completed" : "Pending"}
            </p>
        </div>
    );
}

export default TaskDetails;