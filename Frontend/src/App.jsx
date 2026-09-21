
import HabitCard from './HabitCard'
import Form from './Form'
import { useHabits } from "./HabitsContext"

export default function App(){
  const {
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
         } = useHabits();
  return (
    <div>
      
      {/* RENDER DYNAMIC MOUNTED FORM */}
      <Form 
        isEdit={isEditing}
        formData={formData}
        setFormData={setFormData}
        categoryList={categoryList}
        addNewCategory={addNewCategory}
        onCancel={handleCancelEdit}
        onSubmitHabit={handleFormSubmit}
        completionHistory={dataArray.find(h => h.id === formData.id)?.completed || []}
      />

      {/* FILTER BAR */}
      <div>
        <button 
          type="button"
          
          onClick={() => setCurrentFilter("All")}
        >
          All Habits
        </button>
        {categoryList.map(cat => (
          <button
            key={cat}
            type="button"
            
            onClick={() => setCurrentFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* HABIT CARD DISPLAY FEED */}
      <HabitCard
       habits={filteredHabits}
       onToggle={handleHabitAction}
      />
    </div>
  )
}
