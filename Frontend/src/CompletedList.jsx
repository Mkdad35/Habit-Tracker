import React from 'react';
import DynamicCheckboxList from './DynamicCheckBoxList';

export default function Completed({ list, selectedCompleted, onCompletedChange }) {
    if (!list || list.length === 0) return <p>No items to complete.</p>;

    return (
        <div>
            <DynamicCheckboxList 
                options={list}
                selectedCategories={selectedCompleted} 
                onCategoryChange={onCompletedChange}   
                name="completed"                       
            />
        </div>
    );
}