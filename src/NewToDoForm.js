import './NewToDoForm.css'
import { useState } from "react";


export default function NewToDoForm({addTodo}) {  // <= destructing
    // if you wanted to use props, you would need to use props. going forward.


    const [newTodo, setNewTodo] = useState({text: "", completed: false});

    function handleAddTodo(event) {
        event.preventDefault();
        addTodo(newTodo) // or props.addTodo 
        setNewTodo({text: "", completed: false}); // resets the state so text box is empty and completed is false
    }


    return(
        <div className="NewToDoForm">
        <h2>New To Do</h2>
        
        <form onSubmit={handleAddTodo}> 
       
        <input 
            value={newTodo.text}
            onChange={(e) => setNewTodo({...newTodo, text: e.target.value})} // on the event, 
                    // call the function & update the state to the user's input. 
                    // This only updates the state though, it doesn't do anything alone. 
            placeholder='Add a new todo task...' 
            required // if you dont put this in, if you click the button without anything in there, then it will add a blank todo list item. 
            />
            
        <button type="submit">ADD TO-DO</button> 
        {/* changing the event from onClick to form submit */}

        </form>

        </div>
        
    )
}

// Note: this form cannot alter the state of todos alone. So you need to use props. 
// you want the NewToDoForm to know there is already a list so it doesn't replace the existing, only adds to it
