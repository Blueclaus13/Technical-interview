import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import SearchControl from './components/SearchControl';


function App() {
  return (
    <div className="App">
      <Navbar title={"Interview App"}></Navbar>
      <SearchControl></SearchControl>
      <Button size={"md"}>Accept</Button>
     

      
      
    </div>
  );
}

export default App;
