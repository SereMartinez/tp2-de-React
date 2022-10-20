import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from "./home";
import Game from "./game";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/game" element ={<Game/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
