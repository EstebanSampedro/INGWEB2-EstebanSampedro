import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Registration/>} />
          <Route path='login' element={<Login/>} />
          
        </Routes>
      
      <Registration />
      </Router>
    </div>
  );
}

export default App;
