import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible,setAlertVisibility]=useState(false)

  let items = [
    "Mohammed Faizan",
    "Qazi Hassan Siddiqui",
    "Syed Abdul Rahman",
    "Mohammed Zeeshan",
    "Dummy",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Names"
        onSelectItem={handleSelectItem}
      />
      <br /><br />
      {alertVisible  && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={()=>setAlertVisibility(true)
      }>hello</Button>
    </div>
  );
}

export default App;
