import React from 'react';
import { useHabits } from './HabitsContext';
import Category from "./CategoryList"; 
import Completed from './CompletedList'; 
import { COMPONENT_STYLES as styles } from './styles';
export default function Form() {
  const {
    isEditing: isEdit,
    formData,
    setFormData,
    categoryList,
    addNewCategory,
    handleCancelEdit: onCancel,
    handleFormSubmit: onSubmitHabit,
    dataArray 
  } = useHabits();


  const savedHabitRecord = dataArray.find(h => h.id === formData.id);
  

  const staticCompletionHistory = savedHabitRecord ? savedHabitRecord.completed : [];

  function handleArrayStateChange(fieldName, nextSelectionArray) {
    setFormData(prev => ({ ...prev, [fieldName]: nextSelectionArray }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.habit || formData.category.length === 0) return;
    onSubmitHabit(formData);
  }

  return (
    <form onSubmit={handleSubmit}
      
    >
      <h1 >{isEdit ? "Edit Form" : "Create Habit Form"}</h1>

      {isEdit && formData.id && (
        <div ><strong>ID: {formData.id}</strong></div>
      )}

      {/* Habit Text Input */}
      <div>
        <label htmlFor='habit' >Habit: </label>
        <input 
          type='text' 
          id='habit' 
          
          value={formData.habit || ''} 
          onChange={(e) => setFormData(prev => ({ ...prev, habit: e.target.value }))} 
        />
      </div>

      {/* Categories Wrapper */}
      <div>
        <h4>Categories</h4>
        <Category
          list={categoryList}
          selectedCategories={formData.category || []}
          onCategoryChange={(nextArr) => handleArrayStateChange('category', nextArr)}
          newCategory={addNewCategory}
        />
      </div>

      {/* Completed History Tracker */}
      {isEdit && (
        <div>
          <h4>Track Completion Status</h4>
          <Completed 
            list={staticCompletionHistory}
            selectedCompleted={formData.completed || []}
            onCompletedChange={(nextArr) => handleArrayStateChange('completed', nextArr)}
          />
        </div>
      )}

      <div>
        <button type='submit' >{isEdit ? "Save Changes" : "Submit"}</button>
        {isEdit && <button type='button' onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}
