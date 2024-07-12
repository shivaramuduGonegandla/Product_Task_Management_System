import React, { useState } from 'react';


const C1 = () => {
  const [category, setCategory] = useState("newTasks");
  const [taskDescription, setTaskDescription] = useState("");
  
  const [tasks, setTasks] = useState({
    newTasks: [],
    inProgressTasks: [],
    inReviewTasks: [],
    completedTasks: []
  });
  
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEdit = () => {
    if (taskDescription.trim() === "") {
      return;
    }

    if (editIndex !== null) {
      // Edit existing task
      setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };
        updatedTasks[category][editIndex] = taskDescription;
        return updatedTasks;
      });
      setEditIndex(null);
    } else {
      // Add new task
      setTasks((prevTasks) => ({
        ...prevTasks,
        [category]: [...prevTasks[category], taskDescription]
      }));
    }
    
    setTaskDescription("");
  };

  const handleEdit = (task, index) => {
    setTaskDescription(task);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      updatedTasks[category] = updatedTasks[category].filter((_, i) => i !== index);
      return updatedTasks;
    });
  };

  return (
    <div className="container">
      <h1 className="main-heading">Project Task Management</h1>
      <input 
        onChange={(e) => setTaskDescription(e.target.value)}
        value={taskDescription}
        placeholder="Enter Task Description"
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="newTasks">New Task</option>
        <option value="inProgressTasks">In Progress</option>
        <option value="inReviewTasks">In Review</option>
        <option value="completedTasks">Completed</option>
      </select>

      <div className="add-edit-buttons">
        <button onClick={handleAddOrEdit}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <div>
        {tasks.newTasks.length > 0 && (
          <div>
            <h3>New Tasks</h3>
            <ul>
              {tasks.newTasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <div className="task-buttons">
                    <button className="edit" onClick={() => handleEdit(task, index)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tasks.inProgressTasks.length > 0 && (
          <div>
            <h3>In Progress Tasks</h3>
            <ul>
              {tasks.inProgressTasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <div className="task-buttons">
                    <button className="edit" onClick={() => handleEdit(task, index)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tasks.inReviewTasks.length > 0 && (
          <div>
            <h3>In Review Tasks</h3>
            <ul>
              {tasks.inReviewTasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <div className="task-buttons">
                    <button className="edit" onClick={() => handleEdit(task, index)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tasks.completedTasks.length > 0 && (
          <div>
            <h3>Completed Tasks</h3>
            <ul>
              {tasks.completedTasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <div className="task-buttons">
                    <button className="edit" onClick={() => handleEdit(task, index)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const C2 = () => {
  return <C1 />;
};

export default C1;
