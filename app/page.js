"use client";
import Create from "@/component/Create";
import Show from "@/component/Show";
import { useState } from "react";

const page = () => {
    const [title, settitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("due");
    const [tasks, setTasks] = useState([]);
    const [activeTask, setActiveTask] = useState(null);

    return (
        <div className="mt-3 container p-5">
            
            <Create
                tasks={tasks}
                setTasks={setTasks}
                title={title}
                settitle={settitle}
                description={description}
                setDescription={setDescription}
                status={status}
                setStatus={setStatus}
                activeTask={activeTask}
                setActiveTask={setActiveTask}
            />

            <h2 className="mt-5">Pending Tasks</h2>
            <hr />
            <Show
                tasks={tasks}
                setTasks={setTasks}
                settitle={settitle}
                setDescription={setDescription}
                setStatus={setStatus}
                setActiveTask={setActiveTask}
            />
        </div>
    );
};

export default page;