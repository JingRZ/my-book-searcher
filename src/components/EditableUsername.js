import React, { useState } from 'react';
import './EditableField.css';


function EditableField(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(props.value);

  const handleClick = () => {
    setIsEditable(true);
  };

  const handleBlur = () => {
    setIsEditable(false);
    props.onSave(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div className="editable-field" onClick={handleClick}>
      {isEditable ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export default EditableField;