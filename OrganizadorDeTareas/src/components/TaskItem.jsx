import React from 'react';

export default function TaskItem({ tarea, eliminarTarea, cambiarEstado }) {
  return (
    <div className="task-card" data-prioridad={tarea.prioridad}>
      <div className="task-content">
        <h3 className={`task-title ${tarea.completada ? 'completed' : ''}`}>
          {tarea.titulo}
        </h3>
        <p className="task-description">{tarea.descripcion}</p>
        <span className="task-priority">Prioridad: {tarea.prioridad}</span>
      </div>
      <div className="task-actions">
        <button 
          className="complete-btn" 
          onClick={() => cambiarEstado(tarea.id)}
          aria-label="Completar tarea"
        >
          ✓
        </button>
        <button 
          className="delete-btn" 
          onClick={() => eliminarTarea(tarea.id)}
          aria-label="Eliminar tarea"
        >
          ✕
        </button>
      </div>
    </div>
  );
}