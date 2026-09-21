import React from 'react';
import { useHabits } from './HabitsContext';

export default function HabitCard() { 

  const { filteredHabits: habits, handleHabitAction: onToggle } = useHabits();

  if (!habits || habits.length === 0) {
    return <p>No habits added yet!</p>;
  }

  return (
    <div>
      {habits.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <ul>
                <li><strong>ID:</strong> {item.id}</li>
                <li><strong>Habit:</strong> {item.habit}</li>
                <li><strong>Category:</strong> {item.category.join(', ')}</li>
                <li><strong>Completed Tracks:</strong> {item.completed?.length > 0 ? item.completed.join(', ') : "None yet"}</li>
            </ul>
            
            <button onClick={() => onToggle(item.id)}>Complete Habit</button>
            <button style={{ marginLeft: '8px', backgroundColor: '#ffc107' }} onClick={() => onToggle(item.id, 'EDIT')}>Edit</button>
            <button style={{ marginLeft: '8px', backgroundColor: '#dc3545', color: '#fff' }} onClick={() => onToggle(item.id, 'DELETE')}>Delete</button>
        </div>
      ))}
    </div>
  );
}
