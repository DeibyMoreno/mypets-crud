import logo from './logo.svg';
import {React, useState, useEffect} from 'react';
import './App.css';
import Nav from './components/Nav';
import Table from "./components/Table";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppForm from "./components/AppForm";
import { getCollection, addDocument, deleteDocument, updateDocument } from "./actions";
import Backdrop from "./components/Backdrop";
import Snackbar from "./components/Snackbar";
import Modal from "./components/Modal";
import ModalConfirm from "./components/ModalConfirm";

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [open, setOpen] = useState(isOpenModal);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [idDelete, setIdDelete] = useState('');
 
  const [alertBar, setAlertBar] = useState({
    type : 'success',
    msg : '',
    open : false
  });
  useEffect(() => {
    (async()=>{
      getPets();
    })()
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    setDataEdit({});
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenConfirm = (id) => {
    setIdDelete(id);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = (confirm) => {
    if(confirm){
      deleteData(idDelete);
    }
    setOpenConfirm(false);
  };

  const getPets = async()=>{
    setLoad(true);
    const result = await getCollection('pets');
    setData(result.data);
    setLoad(false);
  }

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
    dataNew.id = result.data.id;
    setData([...data, dataNew]);
    setAlertBar({
      type : 'success',
      msg : 'Created successfully',
      open : true
    });
  }

  const deleteData = async(id)=>{
    setLoad(true);
    const result = await deleteDocument("pets", id);
    setLoad(false);
    if(!result.statusResponse){
      setAlertBar({
        type : 'error',
        msg : result.error,
        open : true
      });
      return
    }
    const arrayFilter = data.filter(item => item.id !== id);
    setData(arrayFilter);
    setAlertBar({
      type : 'success',
      msg : 'Successfully removed',
      open : true
    });
  }

  const editData = (data)=>{
    setDataEdit(data);
    setOpen(true);
  }

  const updateData = async (dataUpdate)=>{
    setLoad(true);
    const id = dataUpdate.id;
    delete dataUpdate.id;
    const result = await updateDocument("pets", id, dataUpdate)
    setLoad(false);
    if(!result.statusResponse){
      setAlertBar({
        type : 'error',
        msg : result.error,
        open : true
      });
      return
    }
    getPets();
    setAlertBar({
      type : 'success',
      msg : 'Successfully updated',
      open : true
    });
  }


  return (
    <div className="App">
      <Backdrop load={load}/>
      <Snackbar alertBar={alertBar} setAlertBar={setAlertBar}/>
      <Nav />
      <Container maxWidth="lg" style={{paddingTop:'20px'}}>
        <AppForm handleClickOpen={handleClickOpen}/>
        <ModalConfirm open={openConfirm} handleClickOpen={handleClickOpenConfirm} handleClose={handleCloseConfirm}/>
        <Modal addData={addData} updateData={updateData} dataEdit={dataEdit} handleClose={handleClose} open={open}/>
        <Table data={data} handleClickOpenConfirm={handleClickOpenConfirm} editData={editData}/>
      </Container>
    </div>
  );
}

export default App;
