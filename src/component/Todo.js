import React { useState } from 'react';


/*function App() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const addTodo = () => {
        setTodos([...todos, input]);
        setInput('');
    };
*/

export default function Todo(){
    const [todo,setToDo]=useState(["ok","done"]);
    const[formData,setformData]=useState("");
    const handlechange=(e)=>{
        setformData(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setToDo([...todo,formData]);
        setformData("");
    };




    return(
        <div>
            <h2>ToDo List</h2>
            <form>
                <input type="text" placeholder="enter task" name="task" value={formData} onChange={handlechange}/>
                <button type="submit">Add</button>

            </form>
            <ul>
                {todo.map((item,index)=>(
                    <li key={index}>{item} <button>remove</button></li>
                ))}
            </ul>
        </div>
    )
}
