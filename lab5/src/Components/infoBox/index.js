import { useState } from 'react';

function InfoBox () {
    const [Info, setInfo] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Info)
    }
     
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
            <p style={{color: "lightblue", fontWeight: "bold", textAlign: 'left'}}>Extra Comments: </p>
        <textarea style={{height: "200px", width: "500px" }} value={Info} type="textarea" onChange={(event) => {
      setInfo(event.target.value);}} /> <br></br> 

        <button onClick={() => "InfoBox()"} style={{height: "30px", width: "70px", background: "lightblue", color: "black", fontWeight: "bold", textAlign: 'center'}} >Submit</button>
        <br></br>
        </form>
    </div>
    )
}


export default InfoBox;