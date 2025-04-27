import React, { useState } from 'react';
import './App.css'; // Make sure this line is present to import the CSS

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (!task.trim()) return alert("Please enter a task!");

    const newTodo = { task, priority, completed: false };

    if (editIndex !== null) {
      // Update existing todo
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      setEditIndex(null); // Reset edit mode
    } else {
      // Add new todo
      setTodos([...todos, newTodo]);
    }

    // Clear form
    setTask('');
    setPriority('medium');
  };

  const handleEdit = (index) => {
    setTask(todos[index].task);
    setPriority(todos[index].priority);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
    // If deleting the task currently being edited, reset the form
    if (editIndex === index) {
      setTask('');
      setPriority('medium');
      setEditIndex(null);
    }
  };

  const handleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    // Assuming you have a root element with className="App" in your index.html or index.js if needed
    // Or you can wrap this whole return in a div with className="App"
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 text-center bg-primary text-white py-3 rounded">
          <h1>Todos Application</h1>
        </div>
      </div>

      <div className="row mt-4">
        {/* Task List Section */}
        <div className="col-sm-6 border-end">
          <h3 className="text-center mb-3">Tasks List</h3>
          <table className="table table-hover align-middle"> {/* align-middle vertically centers content */}
            <thead className="table-light">
              <tr>
                <th style={{ width: '45%' }}>Task</th> {/* Added width for better layout */}
                <th style={{ width: '15%' }}>Priority</th>
                <th style={{ width: '40%' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center text-muted fst-italic py-3">
                    No tasks yet! Add one using the form.
                  </td>
                </tr>
              )}
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td className={todo.completed ? 'text-decoration-line-through text-muted' : ''}>
                    {todo.task}
                  </td>
                  <td>
                     {/* Optional: Add styling based on priority */}
                     <span className={`badge ${
                       todo.priority === 'high' ? 'bg-danger' :
                       todo.priority === 'medium' ? 'bg-warning text-dark' : 'bg-secondary'
                     }`}>
                       {todo.priority}
                     </span>
                  </td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Task Actions"> {/* Group buttons */}
                      <button
                        className={`btn btn-sm ${todo.completed ? 'btn-secondary' : 'btn-success'}`}
                        onClick={() => handleComplete(index)}
                        title={todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                      >
                        {/* Using icons for actions can be clearer */}
                        {todo.completed ? 'Undo' : '✓'} {/* Checkmark for complete */}
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleEdit(index)}
                        disabled={editIndex === index} // Disable edit if already editing this item
                        title="Edit Task"
                      >
                        {/* Icon suggestion: Pencil */}
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(index)}
                        title="Delete Task"
                      >
                         {/* Icon suggestion: Trash can */}
                         X {/* Simple X for delete */}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Task Section */}
        <div className="col-sm-6">
          <h3 className="text-center mb-3">{editIndex !== null ? 'Edit Task' : 'Add New Task'}</h3>
          <div className="mb-3">
            <label htmlFor="taskInput" className="form-label">Task Description</label> {/* Added htmlFor */}
            <input
              id="taskInput" // Added id
              type="text"
              className="form-control"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="e.g., Buy groceries"
              aria-label="Task Description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prioritySelect" className="form-label">Priority Level</label> {/* Added htmlFor */}
            <select
              id="prioritySelect" // Added id
              className="form-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              aria-label="Priority Level"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <button className="btn btn-primary w-100" onClick={handleAddOrUpdate}>
            {editIndex !== null ? 'Update Task' : 'Add Task'}
          </button>
          {editIndex !== null && ( // Add a cancel button when editing
            <button
              className="btn btn-secondary w-100 mt-2"
              onClick={() => {
                setEditIndex(null);
                setTask('');
                setPriority('medium');
              }}
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;