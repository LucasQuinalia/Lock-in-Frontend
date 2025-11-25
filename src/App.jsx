import { useState, useEffect } from "react";
import "./App.css";
import { Focus } from "./components/Focus";
import { focusAPI } from "./services/api";

function App() {
  const [focuses, setFocuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadFocuses();
  }, []);

  const loadFocuses = async () => {
    try {
      setLoading(true);
      const data = await focusAPI.getAll();
      setFocuses(data.content || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error loading focuses:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateFocus = async (focusData) => {
    try {
      await focusAPI.create(focusData);
      await loadFocuses();
    } catch (err) {
      console.error('Error creating focus:', err);
      alert('Failed to create focus');
    }
  };

  const handleUpdateFocus = async (focusData) => {
    try {
      await focusAPI.update(focusData);
      await loadFocuses();
    } catch (err) {
      console.error('Error updating focus:', err);
      alert('Failed to update focus');
    }
  };

  const handleDeleteFocus = async (id) => {
    try {
      await focusAPI.delete(id);
      await loadFocuses();
    } catch (err) {
      console.error('Error deleting focus:', err);
      alert('Failed to delete focus');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="focuses">
      {focuses.map((focus) => (
        <Focus
          key={focus.id}
          id={focus.id}
          title={focus.title}
          timer={focus.timer}
          shortBreak={focus.short_break}
          longBreak={focus.long_break}
          tasks={focus.tasks || []}
          onUpdate={handleUpdateFocus}
          onDelete={handleDeleteFocus}
          onRefresh={loadFocuses}
        />
      ))}
    </div>
  );
}

export default App;