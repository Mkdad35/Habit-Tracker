import React from 'react';

export default function DynamicCheckboxList({ 
  options = [], 
  selectedCategories = [], 
  onCategoryChange,
  name, 
}) {
  const isAllChecked = options.length > 0 && options.every((option) => selectedCategories.includes(option));

  const handleIndividualChange = (event) => {
    const { value, checked } = event.target;
    
    const nextSelection = checked
      ? [...selectedCategories, value]
      : selectedCategories.filter((cat) => cat !== value);

    onCategoryChange(nextSelection);
  };

  const handleSelectAllChange = (event) => {
    const { checked } = event.target;
    const nextSelection = checked ? [...options] : [];

    onCategoryChange(nextSelection);
  };

  if (options.length === 0) return <p>No options available.</p>;

  return (
    <div>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={selectedCategories.includes(option)} 
              onChange={handleIndividualChange} 
            />
            <span> {option}</span>
          </label>
        </div>
      ))}
      <div>
        <label>
          <input
            type="checkbox"
            checked={isAllChecked}
            onChange={handleSelectAllChange}
          />
          <span style={{ fontWeight: 'bold' }}> Select All</span>
        </label>
      </div>
    </div>
  );
}
