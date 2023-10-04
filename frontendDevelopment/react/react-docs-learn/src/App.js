
import './App.css';
import Square from "./components/Square"

function App() {
  return (
    <div className='game'>
        <div className="board-row">
       <Square/>
       <Square />
       <Square/>

      </div>
      <div className="board-row">
      <Square />
      <Square />
      <Square/>
       
      </div>
      <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
      
      </div>
      
    </div>
  );
}

export default App;
