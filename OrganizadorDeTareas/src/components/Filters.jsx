import React from 'react';

export default function Filters({ setFiltro, setBusqueda }) {
  return (
    <div className="search-filters">
      <input
        placeholder="Buscar tarea..."
        onChange={(e) => setBusqueda(e.target.value)}
        className="search-input"
      />
      <select 
        onChange={(e) => setFiltro(e.target.value)} 
        className="filter-select"
      >
        <option value="Todas">Todas</option>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
    </div>
  );
}