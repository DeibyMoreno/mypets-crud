import logo from './logo.svg';
import {React, useState, useEffect} from 'react';
import './App.css';
import Nav from './components/Nav';
import Table from "./components/Table";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppForm from "./components/AppForm";
import { getCollection, addDocument, deleteDocument } from "./actions";
import Backdrop from "./components/Backdrop";
import Snackbar from "./components/Snackbar";

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [alertBar, setAlertBar] = useState({
    type : 'success',
    msg : '',
    open : false
  });
  useEffect(() => {
    (async()=>{
      setLoad(true);
      const result = await getCollection('pets');
      setData(result.data);
      setLoad(false);
    })()
  }, []);

  const addData = async(dataNew)=>{
    //Terminar obtener el id de la base de datos y almacenar
    setLoad(true);
    const result = await addDocument("pets",dataNew);
    setLoad(false);
    if(!result.statusResponse){
      setAlertBar({
        type : 'error',
        msg : result.error,
        open : true
      });
      return
    }
    setData([...data, dataNew]);
    setAlertBar({
      type : 'success',
      msg : 'Created successfully',
      open : true
    });
  }

  const deleteData = async(id)=>{
    setLoad(true);
    const result = await deleteDocument("lpets", id);
    console.log(result);
    setLoad(false);
    if(!result.statusResponse){
      setAlertBar({
        type : 'error',
        msg : result.error,
        open : true
      });
      return
    }
    setAlertBar({
      type : 'success',
      msg : 'Successfully removed',
      open : true
    });
  }

  return (
    <div className="App">
      <Backdrop load={load}/>
      <Snackbar alertBar={alertBar} setAlertBar={setAlertBar}/>
      <Nav />
      <Container maxWidth="lg" style={{paddingTop:'20px'}}>
        <AppForm addData={addData}/>
        <Table data={data} deleteData={deleteData}/>
      </Container>
    </div>
  );
}

export default App;
