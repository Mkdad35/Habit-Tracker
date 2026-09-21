import React, { createContext, useContext, useState, useReducer, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage'
import { habitReducer, HABIT_ACTIONS } from './habitsReducer';

const HabitsContext = createContext(null);

const DEFAULT_CATEGORIES = [
  "Health & Fitness",
  "Mental Health & Mindfulness",
  "Learning & Growth",
  "Finance & Money",
  "Work & Productivity",
  "Home & Daily Life",
];

const INITIAL_FORM_STATE = { id: null, habit: '', category: [], completed: [] };


export function HabitsProvider({ children }) {
 
  const [categoryList, setCategoryList] = useLocalStorage('categoryList', DEFAULT_CATEGORIES);
  const [localHabits, setLocalHabits] = useLocalStorage('habitsList', []);
  

  const [dataArray, dispatch] = useReducer(habitReducer, localHabits);
  const [currentFilter, setCurrentFilter] = useState("All");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

 
  useEffect(() => {
    setLocalHabits(dataArray);
  }, [dataArray, setLocalHabits]);

 
  function addNewCategory(item) {
    if (!item.trim()) return;
    setCategoryList(prev => [...prev, item.trim()]);
  }

  function handleFormSubmit(submittedData) {
    if (isEditing) {
      dispatch({ type: HABIT_ACTIONS.EDIT, payload: submittedData });
      setIsEditing(false);
    } else {
      dispatch({ type: HABIT_ACTIONS.ADD, payload: submittedData });
    }
    setFormData(INITIAL_FORM_STATE);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setFormData(INITIAL_FORM_STATE);
  }

  function handleHabitAction(id, actionType) {
    if (actionType === 'DELETE') {
      dispatch({ type: HABIT_ACTIONS.DELETE, payload: id });
      if (formData.id === id) handleCancelEdit();
    } else if (actionType === 'EDIT') {
      const habitToEdit = dataArray.find(habit => habit.id === id);
      if (habitToEdit) {
        setFormData({ ...habitToEdit });
        setIsEditing(true);
      }
    } else {
      dispatch({ type: HABIT_ACTIONS.TOGGLE_COMPLETE, payload: id });
    }
  }

  const filteredHabits = currentFilter === "All"
    ? dataArray
    : dataArray.filter(habit => habit.category.includes(currentFilter));


  const value = {
    categoryList,
    dataArray,
    filteredHabits,
    currentFilter,
    setCurrentFilter,
    isEditing,
    formData,
    setFormData,
    addNewCategory,
    handleFormSubmit,
    handleCancelEdit,
    handleHabitAction,
  };

  return (
    <HabitsContext.Provider value={value}>
      {children}
    </HabitsContext.Provider>
  );
}


export function useHabits() {
  const context = useContext(HabitsContext);
  if (!context) {
    throw new Error('useHabits must be executed within a HabitsProvider template wrapper');
  }
  return context;
}
