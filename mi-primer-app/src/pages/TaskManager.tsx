/* import { Button } from "../components/Button";
import { IoIosAdd } from "react-icons/io"; */

import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineX } from "react-icons/hi";

interface Task {
  id: number;
  title: string;
  isEditing?: boolean;
}

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: newTask.trim(), isEditing: false },
    ]);
    setNewTask("");
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEditToggle = (id: number, editing: boolean) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isEditing: editing } : t))
    );
  };

  const handleEditChange = (id: number, newTitle: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t))
    );
  };

  return (
    <div className="w-full h-[calc(100vh-5rem)] mt-20 bg-neutral-100 overflow-x-hidden overflow-y-auto p-10 scrollbar-custom">
      {/* Buscar */}
      <input
        type="text"
        placeholder="Buscar tarea..."
        className="w-full p-2 mb-4 border rounded-md outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Nueva tarea */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Nueva tarea..."
          className="flex-1 p-2 border rounded-md outline-none"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Agregar
        </button>
      </div>

      {/* Lista */}
      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <li className="text-center text-gray-500">No hay tareas</li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-2 border rounded-md"
            >
              {task.isEditing ? (
                <input
                  type="text"
                  className="flex-1 p-2 mr-2 border rounded-md outline-none"
                  value={task.title}
                  onChange={(e) => handleEditChange(task.id, e.target.value)}
                />
              ) : (
                <span className="flex-1">{task.title}</span>
              )}

              <div className="flex gap-2">
                {task.isEditing ? (
                  <>
                    <button
                      onClick={() => handleEditToggle(task.id, false)}
                      className="p-1 text-green-500 hover:text-green-700"
                    >
                      <FaCheck size={18} />
                    </button>
                    <button
                      onClick={() => handleEditToggle(task.id, false)}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <HiOutlineX size={18} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditToggle(task.id, true)}
                      className="p-1 text-blue-500 hover:text-blue-700"
                    >
                      <FiEdit3 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="p-1 text-red-500 hover:text-red-700"
                    >
                      <FaRegTrashAlt size={18} />
                    </button>
                  </>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
