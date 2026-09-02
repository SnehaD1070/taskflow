const getStoredTasks = () => {
    const tasks = localStorage.getItem("tasks");

    return tasks ? JSON.parse(tasks) : [];
};

const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTasks = async () => {
    return {
        data: getStoredTasks()
    };
};

export const getTaskById = async (id) => {
    const tasks = getStoredTasks();

    const task = tasks.find((task) => task.id === Number(id));

    return {
        data: task
    };
};

export const createTask = async (task) => {
    const tasks = getStoredTasks();

    const newTask = {
        id: Date.now(),
        ...task
    };

    tasks.push(newTask);

    saveTasks(tasks);

    return {
        data: newTask
    };
};

export const updateTask = async (id, updatedTask) => {
    const tasks = getStoredTasks();

    const updatedTasks = tasks.map((task) =>
        task.id === Number(id)
            ? { ...task, ...updatedTask }
            : task
    );

    saveTasks(updatedTasks);

    const updatedTaskData = updatedTasks.find(
        (task) => task.id === Number(id)
    );

    return {
        data: updatedTaskData
    };
};

export const deleteTask = async (id) => {
    const tasks = getStoredTasks();

    const remainingTasks = tasks.filter(
        (task) => task.id !== Number(id)
    );

    saveTasks(remainingTasks);

    return {
        data: {}
    };
};