import { useState } from 'react';

function Form () {
    let [dropdown, setDropdown] = useState("");
     
    return (
        <form style={{justifyContent: "left", alignItems: "left"}} >
            <h2 style={{color: "lightblue", fontSize: 30}}>Were you able to find what you were looking for?  </h2>
            <p>You selected: {dropdown}</p>
            <select style={{color: 'Blue'}} value={dropdown} onChange={(event)=>{setDropdown(event.target.value)}}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </form>
    )
}

export default Form;

