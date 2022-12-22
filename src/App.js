import './App.css';
import { Routes, Route,BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import JobPosting from './pages/jobPosting/JobPosting';


const App = () => {
  return (
   
    <Router>
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='jobPosting' element={<JobPosting/>}/>
     </Route>
    </Routes>
    </Router>
   
  );
}

export default App;
