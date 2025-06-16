import { useState, useMemo } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filters from './components/Filters';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('Todas');

  const contadoresPrioridad = useMemo(() => ({
    Alta: tareas.filter(t => t.prioridad === 'Alta').length,
    Media: tareas.filter(t => t.prioridad === 'Media').length,
    Baja: tareas.filter(t => t.prioridad === 'Baja').length,
    Total: tareas.length
  }), [tareas]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const cambiarEstado = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const tareasFiltradas = tareas
    .filter((tarea) =>
      tarea.titulo.toLowerCase().includes(busqueda.toLowerCase())
    )
    .filter((tarea) => (filtro === 'Todas' ? true : tarea.prioridad === filtro));

return (
  <div className="app-container">
    <div className="app-header">
      <h1>ORGANIZADOR DE TAREAS</h1>
      <p>Gestión minimalista de tareas</p>
    </div>

    <div className="main-content">
      {/* Sección de búsqueda */}
      <div className="search-section">
        <Filters setFiltro={setFiltro} setBusqueda={setBusqueda} />
      </div>

      {/* Sección de estadísticas */}
      <div className="stats-section">
        <div className="stat-card total">
          <span className="stat-label">Total</span>
          <span className="stat-value">{contadoresPrioridad.Total}</span>
        </div>
        <div className="stat-card alta">
          <span className="stat-label">Alta</span>
          <span className="stat-value">{contadoresPrioridad.Alta}</span>
        </div>
        <div className="stat-card media">
          <span className="stat-label">Media</span>
          <span className="stat-value">{contadoresPrioridad.Media}</span>
        </div>
        <div className="stat-card baja">
          <span className="stat-label">Baja</span>
          <span className="stat-value">{contadoresPrioridad.Baja}</span>
        </div>
      </div>

      {/* Formulario */}
      <div className="form-section">
        <TaskForm agregarTarea={agregarTarea} />
      </div>

      {/* Lista de tareas */}
      <div className="tasks-section">
        <div className="tasks-header">
          <h2>Tareas</h2>
          <span className="tasks-count">{tareasFiltradas.length}</span>
        </div>
        <div className="tasks-grid">
          <TaskList
            tareas={tareasFiltradas}
            eliminarTarea={eliminarTarea}
            cambiarEstado={cambiarEstado}
          />
        </div>
      </div>
    </div>
  </div>
);
}

export default App;