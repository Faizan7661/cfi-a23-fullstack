import React from 'react'
import { useState } from 'react';

function Square() {

  const [value, setValue] = useState(null);
  function handleChange(){
    setValue('X');
  }

  return (
    <button className="square" onClick={handleChange}>{value}</button>
  )
}

export default Square