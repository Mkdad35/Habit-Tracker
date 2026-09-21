import { useState } from 'react'
import DynamicCheckboxList from './DynamicCheckBoxList';

export default function Category({ list, selectedCategories, onCategoryChange, newCategory }) {
    if (!list || list.length === 0) return null;

    const [newItem, setNewItem] = useState('')

    function handleClick(){
        if (newItem.trim()){
            newCategory(newItem.trim())
            setNewItem('')
        }
    }

    return (
        <div>
            <DynamicCheckboxList 
                options={list}
                selectedCategories={selectedCategories}
                onCategoryChange={onCategoryChange}
                name='category'
            />
            <div style={{ marginTop: '10px' }}>
                <input 
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)} 
                />
                <button type='button' onClick={handleClick}>Add new Category</button>
            </div>
        </div>
    );
}
