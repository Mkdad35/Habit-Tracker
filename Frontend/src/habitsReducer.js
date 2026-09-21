

export const HABIT_ACTIONS = {
    ADD: 'Add Habit.',
    EDIT: 'Edit Habit.',
    DELETE: 'Delete habit',
    TOGGLE_COMPLETE: 'Set habit as completed'
}

export function habitReducer(state, action){
    switch(action.type){
        case HABIT_ACTIONS.ADD:
            return [
                ...state,
                {
                    id: Date.now(),
                    habit: action.payload.habit,
                    category: action.payload.category,
                    completed: ["2026-10-01", "2026-11-01"],
                }
            ];
        case HABIT_ACTIONS.EDIT:
            return state.map(habit => 
                habit.id === action.payload.id ? action.payload : habit
            );
        case HABIT_ACTIONS.DELETE:
            return state.filter(habit => habit.id !== action.payload);

        case HABIT_ACTIONS.TOOGLE_COMPLETE:
            return state.map(habit => {
                if (habit.id !== action.payload) return habit;

                const todayDate = new Date().toISOString().split('T')[0];
                const isAlreadyCompleted = habit.completed.includes(todayDate);

                return {
                    ...habit,
                    completed: isAlreadyCompleted
                        ? habit.completed.filter(dateStr => dateStr !== todayDate)
                        : [...habit.completed, todayDate]
                };
            });
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}