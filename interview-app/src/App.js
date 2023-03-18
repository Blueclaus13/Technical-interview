import './App.css';
import Navbar from './components/Navbar';
import SearchControl from './components/SearchControl';
import ListTable from './components/ListTable';
import Button from './components/Button';
import { useEffect, useState } from 'react';
import Axios  from 'axios';
import Modal from './components/Modal';


function App() {
  const [data, setData]= useState([])

  useEffect (()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
    .then(result=>{
      setData(result.data)})
    .catch(err=>console.log(err))
  }, []);


  return (
    <div className="App">
      <Navbar title={"Interview App"}></Navbar>
      <SearchControl></SearchControl>
      <Modal></Modal>
      
      <Button size={"lg"} className={"newItem"}
          onClick={()=>console.log("Opening Modal")}>Add New Item</Button>
      <ListTable data={data}></ListTable>
    </div>
  );
}

export default App;
