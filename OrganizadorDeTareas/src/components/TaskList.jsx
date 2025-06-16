import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tareas, eliminarTarea, cambiarEstado }) {
  if (tareas.length === 0) return <p>No hay tareas para mostrar.</p>;

  return (
    <div className="horizontal-tasks-container">
      {tareas.map((tarea) => (
        <TaskItem
          key={tarea.id}
          tarea={tarea}
          eliminarTarea={eliminarTarea}
          cambiarEstado={cambiarEstado}
        />
      ))}
    </div>
  );
}