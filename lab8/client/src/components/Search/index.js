

import Axios from 'axios';
import {useState} from 'react';

function Search() {
    const [searchName, setSearchName] = useState("");
    const [searchResults, setSearchResults] = useState([]);


const getNames = (name) => {
    Axios.get("http://localhost:45030/search/" + name)
    .then(response => {
        console.log(response.data);
        setSearchResults(response.data.name);
    })
    .catch(error => {
        console.log("Error" + error);
    });
};

return (
    <div className ="Search">
        <input type="text" onChange={(event) => setSearchName(event.target.value)}/>
        <button onClick={() => getNames(searchName)}>Search for Name</button>
        {
            searchResults.map((value, index) => {
                return <p key= {index}>{value}</p>
            })
        }
    </div>
);

}

export default Search;



