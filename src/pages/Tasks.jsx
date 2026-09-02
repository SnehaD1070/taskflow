import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService';
import TaskCard from '../components/TaskCard';
import {deleteTask} from "../services/taskService";

const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
        "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
        return;
    }

    try {
        await deleteTask(id);

        setTasks((currentTasks) =>
            currentTasks.filter((task) => task.id !== id)
        );
    }
    catch (error) {
        console.log(error);
    }
};

const Tasks = () => {
    let [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(()=>{
        const fetchTasks = async()=>{
            try{
                const response = await getTasks()
                setTasks(response.data)
            }
            catch (error) {
                console.log(error);
                setError("Failed to load tasks");
            }
            finally {
            setLoading(false);
    }
        }
        fetchTasks()
    },[])
    if (loading) {
        return <h2>Loading tasks...</h2>;
    }
    if (error) {
    return <h2>{error}</h2>;
}
  return (
        <div>
            <h1>My Tasks</h1>

            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}


export default Tasks;
