import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDo} from "./utils/HandleApi";

function App() {

  const [toDo, setToDo] = useState([])

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  return (
    <div className="App">
      
      <div className="container">

        <h1>To DO APP</h1>

     <div className="top">
      <input 
      type="text" 
      placeholder="ADD TODOS..."
     /* value={text}
      onChange={(e) => setText(e.target.value)}*/
      />
      

    <div className="add" /*onClick={addToDo}*/>ADD</div>
    </div>

    <div className="list">

      {toDo.map((item) => <ToDo key={item._id} text={item.text} />)}

  
    </div>

</div>


    </div>
  );
}

export default App;
