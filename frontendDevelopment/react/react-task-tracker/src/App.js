import {useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks,setTasks]= useState([{
    id:1,
    text:'Mohammed Faizan',
    day:'12 March 3:00pm',
    reminder:true,
},
{
    id:2,
    text:'Mohammed Zeeshan',
    day:'24 august 3:00pm',
    reminder:true,
},
{
    id:3,
    text:'Qazi Hassan Siddiqui',
    day:'17 sept 3:00pm',
    reminder:false,
},
])

//function to delete a task
const deleteTask =(id)=>{

      setTasks(tasks.filter((task)=>task.id !== id))
    
}

//funnction for toggleReminder

const toggleReminder =(id)=>{
  setTasks(
    tasks.map((task)=>
    task.id === id ? {...task,reminder : !task.reminder} : task)
  )
}
  return (
    <div className="container">
    <Header />
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete ={deleteTask} onToggle={toggleReminder}  /> : 'No Tasks To show'}
    </div>
  );
}

export default App;
