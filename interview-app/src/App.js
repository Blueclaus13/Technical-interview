import './App.css';
import Navbar from './components/Navbar';
import SearchControl from './components/SearchControl';
import ListTable from './components/ListTable';


function App() {
  return (
    <div className="App">
      <Navbar title={"Interview App"}></Navbar>
      <SearchControl></SearchControl>
      {/* <Button size={"md"}>Accept</Button> */}
      <ListTable></ListTable>
     

      
      
    </div>
  );
}

export default App;
