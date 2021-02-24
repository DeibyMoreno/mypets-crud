import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Table from "./components/Table";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppForm from "./components/AppForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <Container maxWidth="lg" style={{paddingTop:'20px'}}>
        <AppForm />
        <Table />
      </Container>
    </div>
  );
}

export default App;
