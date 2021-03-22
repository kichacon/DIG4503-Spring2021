import Axios from 'axios';
import {useState} from 'react';

function Add() {
    const [additionalName, setAdditionalName] = useState("");
   

const putName = (name) => {
    Axios.put("http://localhost:45030/people/" + name)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log("Error" + error);
    });
};

return (
    <div className ="Add">
        <input type="text" onChange={(event) => setAdditionalName(event.target.value)}/>
        <button onClick={() => putName(additionalName)}>Add Name</button>
       
    </div>
);

}

export default Add;