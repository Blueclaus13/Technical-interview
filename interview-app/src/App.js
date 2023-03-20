import './App.css';
import Navbar from './components/Navbar';
import SearchControl from './components/SearchControl';
import ListTable from './components/ListTable';
import Button from './components/Button';
import { useEffect, useState } from 'react';
import Axios  from 'axios';
import Modal from './components/Modal';
import Toast from './components/Toast';


function App() {
  const [data, setData]= useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [list, setList] = useState([]);
  let toastProperties = null;


  const showToast=(type, description)=>{
    switch(type){
      case 'success':
        toastProperties ={
            id: list.length+1,
            title: 'Success',
            description: description,
            backgroundColor: '#5cb85c',
          }
          break;
      case 'fail':
          toastProperties ={
              id:1,
              title: 'Fail',
              description: description,
              backgroundColor: '#d9534f',
            }
            break;
      default:
        toastProperties=[];

    }
  
    setList([...list, toastProperties]);
  };

  useEffect (()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
    .then(result=>{
      setData(result.data);
    })
    .catch(err=>console.log(err))
  }, []);

  const handleModalData =(userId,title,body) =>{
        // console.log(`userID: ${userId}`);
        // console.log(`Title: ${title}`);
        // console.log(`Body: ${body}`);

        //Post to Add a new item
        Axios.post("https://jsonplaceholder.typicode.com/posts",{
          title: title, 
          body: body, 
          userId: userId,
        })
        .then((response)=>{ 
          console.log(response);
          setOpenModal(false)})
        .catch((err)=>{console.log(err)});
  };

  const handleSearch =(data)=>{
    setData([data]);
  };

  
  return (
    <div className="App">
      <Navbar title={"Interview App"}></Navbar>
      <Toast toastList={list} setList={setList}></Toast>
      <SearchControl
        setData={handleSearch}></SearchControl>
        <Button onClick={()=>showToast('success', "The message wasn't sent")}>Toast Success</Button>

      {openModal && 
        <Modal
          titleModal={"New Item"}
          stateModal={setOpenModal}
          handleChange={handleModalData}
          ></Modal>}
      
      <Button size={"lg"} className={"newItem"}
          onClick={()=>{setOpenModal(true)}}>Add New Item</Button>
      
      {data.length !== 0 ? <ListTable data={data}></ListTable> :
      <h1 className='not-data-message'>Sorry, Data isn't available</h1>}
    </div>
  );
}

export default App;
