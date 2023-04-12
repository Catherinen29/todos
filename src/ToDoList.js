import ToDoListItem from "./ToDoListItem";
import './ToDoList.css'

export default function ToDoList(props) {

    // create an array of <ToDoListItem> components
    const toDoListItems = 
    props.todos.map(function(item, index) {
        return <ToDoListItem todo={item.text} completed={item.completed} key={index} index={index}/>
        
    })
    console.log(toDoListItems)


    return (
        <ul className="ToDoList" type="1">
            {toDoListItems}

        </ul>

        
    )
}





            {/* <li>Number: {score}</li>
            <li>String: {str}</li>
            <li>Math.random(): {Math.random()}</li>
            <li>Template Literal: {`${str} rocks!`}</li>
            <li>Ternary: {score > 90 ? "A" : "B or less"}</li>
            <li>Booleans, null & undefined: {true}{false}{null}{undefined}</li>
            <li>Logical &&: {score > 90 &&  <div>You get an "A"!</div>}</li>
            <li>{misc}</li> */}