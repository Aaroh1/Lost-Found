import './App.css';
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import LandingPage from './Components/LandingPage';
import LS from './Components/LS';
import Register from './Components/Register';
import FileUpload from './Components/FileUpload';
import MainPage from './Components/MainPage';
import Dashboard from './Components/Dashboard';
import ItemDisplay from './Components/ItemDisplay';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}  />
        <Route path="/login" element={<LS/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Routes>
    <Route path="/Home" element={<MainPage/>} >
      <Route index element={<ItemDisplay />} /> 
          <Route path="Upload" element={<FileUpload/>} /> 
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
    </BrowserRouter>
  
     
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>zsdcs
      </p>
    </div>
  );
}

export default App;
