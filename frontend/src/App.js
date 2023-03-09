import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      
<div className="container">
    <h1>To DO APP</h1>

    <div className="top">
      <input type="text" placeholder="ADD TODOS..."/>
      

    <div className="add">ADD</div>
    </div>

    <div className="list">

    <ToDo text="ffffgfh " />
    <ToDo text="hiiii " />
    <ToDo text="hiiii " />
    <ToDo text="hiiii " />
    </div>

</div>


    </div>
  );
}

export default App;
