import React, { useState } from 'react';

export default function TaskForm({ agregarTarea }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [prioridad, setPrioridad] = useState('Media');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: Date.now(),
      titulo,
      descripcion,
      prioridad,
      completada: false,
      fecha: new Date().toISOString()
    };
    agregarTarea(nuevaTarea);
    setTitulo('');
    setDescripcion('');
    setPrioridad('Media');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
        placeholder="Título"
        className="form-input"
      />
      <input
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción"
        className="form-input"
      />
      <select
        value={prioridad}
        onChange={(e) => setPrioridad(e.target.value)}
        className="form-select"
      >
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
      <button type="submit" className="form-button">
        Agregar
      </button>
    </form>
  );
}