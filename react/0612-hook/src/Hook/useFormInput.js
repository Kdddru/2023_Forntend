import React, { useState } from 'react'

export const useFormInput = () => {
  const [value, setValue] = useState();

  
  function handleChange(e) {
    setValue(e.target.value);
  }
  

  //내 보낼 값
  const inputProps = {
    value: value,
    onChange: handleChange
  };

  

  return (
    inputProps
  )
}
