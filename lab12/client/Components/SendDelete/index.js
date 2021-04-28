import Axios from 'axios';

async function SendDelete() {

        const response = await Axios.delete("http://localhost:45030/books", 
        {
            title: "The Great Gatsby", 
            author: "F. Scott Fitzgerald" , 
            description: "Based off the 1920's about a wealthy man pursing a woman who he has always loved"
        });
        console.log(response.data);
   
    return (
        <div>
            <p>Delete Data</p>
            <button onClick ={() => {put()}}>Delete</button>
        </div>
    );
}

 SendDelete();