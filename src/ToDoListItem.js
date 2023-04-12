import './ToDoListItem.css'
import { useState } from "react";

export default function ToDoListItem (props) {

const [todoStatus, setTodoStatus] = useState({text: "", completed: false});

function confirmComplete(event) {
  
  console.log("CLICKED *********")
  setTodoStatus({completed: true})
  // console.log(todoStatus)
  // props.addTodo(todoStatus)
}

  return (

        <li 
          className="ToDoListItem"
          style={{
            backgroundColor: props.index % 2 ? 'hotpink' : 'coral'
          }}
        > 
        <span className= "indexSpan">
            {props.index+1}
           
        </span>
        
        {props.todo} 
        <button onClick={confirmComplete}>✅</button>

        </li>

    )
}


{/* <li>Logical &&: {score > 90 &&  <div>You get an "A"!</div>}</li> */}