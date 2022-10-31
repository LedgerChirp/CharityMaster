import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/contact/Contact';
import Footer from './components/contact/Footer'
import {Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div className='overflow-hidden'>
    <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
