import NewToDoForm from "./NewToDoForm";
import ToDoList from "./ToDoList";
import ToDoListItem from "./ToDoListItem";
import { useState } from "react";

//Creating the todos Array:
const todos = [

];

function App() {
  const [todos, setTodos] = useState([
    {text: "Have Fun", completed: true},
    {text: "Learn React", completed: false},
    {text: "Learn the MERN-Stack", completed: false}
  ]);

  const [showTodos, setShowToDos] = useState(true); 

  function addTodo(todo){
// Replace the state, not mutate it
    setTodos([...todos, todo])
  }



  return (
    <>
    <div className="App">
      <h1>React To-Do</h1>

    <button onClick={() => setShowToDos(!showTodos)}>{showTodos ? "HIDE" : "SHOW"}</button> 
    {/* depending on the state, the text changes
     if the state is true, then text is "true, if it is false, text shows "show" */}


    {/* Passing todos Array as a prop */}
    {/* Conditionally render  */}
       { showTodos && <ToDoList todos={todos} addTodo={addTodo} /> } 
       {/* if showTodos is true, then render the todos function (show the list of todos) */}
       {/* Think of this as a function call */}
    
    <hr />
    <NewToDoForm addTodo={addTodo} />


    </div>

    </>
  );
}

export default App;
