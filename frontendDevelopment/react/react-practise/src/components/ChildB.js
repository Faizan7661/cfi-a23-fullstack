import React, { useContext } from 'react';
import { userContext } from '../App';


function ChildB() {
    const user = useContext(userContext)
  return (
    <div><h1>{user} Faizan</h1></div>
  )
}

export default ChildB