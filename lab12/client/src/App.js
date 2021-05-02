import logo from './logo.svg';
import './App.css';
import SendPut from './Components/SendPut';
import SendGet from '.Components/SendGet/';
import SendDelete from '.Components/SendDelete';

function App() {
  return (
    <div className="App">
     <SendPut/>
     <SendGet/>
     <SendDelete/>
    </div>
  );
}

export default App;
