import React, { useState } from 'react';

import "./App.css";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

export default ({onSubmit}) => {
  const {resetValue, ...text} = useInputValue("");

  return (
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}>
        <input placeholder="Add Task..." {...text} />
      </form>
  );
};
