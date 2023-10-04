import "./App.css";
import ChildA from "./components/ChildA";
import { createContext } from "react";

export const userContext =createContext();
function App() {

 

  return (
    <>
      <div>
        <h1>Siblings</h1>
       <userContext.Provider value ={"hello"}>
       <ChildA/>
       </userContext.Provider>
      </div>
    </>
  );
}

export default App;


 // let [count, setCount] = useState(0);
  // let [count2, setCount2] = useState(0);

  // every time we make a change it will get that number of times
  // useEffect(()=>{
  //   document.title =`${count} count`
  // })
  //only for the first time it gets triggered
  // useEffect(()=>{
  //   document.title =`${count} count`
  // },[])
  //when we give variable it will work only when that variable state is triggered
  // useEffect(()=>{
  //   document.title =`${count} count`
  // },[count2])

// {/* <>
//     <div>
//       <h1>  Count : {count}</h1>
//       <button onClick={()=> setCount(count+1)}>click me</button>
//     <br />
//     <h1>  Count : {count2}</h1>
//       <button onClick={()=> setCount2(count+1)}>click me</button>
//     </div>
//     </> */}
