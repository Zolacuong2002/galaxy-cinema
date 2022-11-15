
import { useState } from 'react';
import { Routes, Route , Link} from 'react-router-dom';
import Header from './components/layout/Header';
import Slider from './components/layout/Slider';
import MovieComming from './components/MovieComming';
import MovieShowing from './components/MovieShowing';
import Footer from './components/layout/Footer'
import Modal from './components/Modal';
import BuyTicket from './components/BuyTicket';
import './App.css';

import Home from './components/layout/Menu/Home';
import About from './components/layout/Menu/About';
import Adult from './components/layout/Menu/Adult';
import Children from './components/layout/Menu/Children';
import Contact from './components/layout/Menu/Contact';

function App() {
  const[showModal, setShowModal] = useState(false);
  const[showModalTicket, setShowModalTicket] = useState(false);
  const[film, setFilm] = useState();
  const[filmTicket, setFilmTicket] = useState();
  const[active, setActive] = useState(false);


  // Function to show/ hide modal
  const handleToggleModal = () =>{
    setShowModal(!showModal);
  }

    // Function to show/ hide modal
    const handleToggleModalTicket = () =>{
      setShowModalTicket(!showModalTicket);
    }

 // Set data and show
  const handleClick = (film) => {
    setFilm(film)
    setShowModal(!showModal);
  }

  const handleClickTicket = (film) => {
    setFilmTicket(film)
    setShowModalTicket(!showModalTicket);
  }

  // take the list class name of both showing and comming
  var showing = document.getElementsByClassName('movie-showing');
  var comming = document.getElementsByClassName('movie-comming');

  const activeShowing= () => {
    // if active is false do nothing
    if(active){
      // assign class 'active' to showing
      showing[0].classList.add('active');
      // remove class 'active' from comming
      comming[0].classList.remove('active');

      // set active for showing
      setActive(false)
    }
  }

  const activeComming= () => {
    // if active is true do nothing
    if(!active){
      // remove class 'active' from showing
      showing[0].classList.remove('active');
      // assign class 'active' to coming
      comming[0].classList.add('active');

      // set active for showing
      setActive(true)
    }
  }

  return (
    <div className="App">
      <Header/>
      <Slider/>
      {/* NavBar */}
     <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/adult' element={<Adult handleClick={handleClick} handleClickTicket={handleClickTicket}/>}/>
                <Route path='/children' element={<Children handleClick={handleClick} handleClickTicket={handleClickTicket}/>}/>
                <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <nav >
       <ul className='nav nav-tabs movie-home'>
         <li >
           <Link className='movie-showing active' onClick={activeShowing} style={{textDecoration: 'none'}} to='/'>Movie Showing</Link>
         </li>
         <li>
           <Link className='movie-comming' onClick={activeComming} style={{textDecoration: 'none'}} to='/comming'>Movie Comming</Link>
         </li>
       </ul>
     </nav>
     
      {/* ShowAndComming */}
     <Routes>
        <Route path='/' element={<MovieShowing handleClick={handleClick} handleClickTicket={handleClickTicket}/>}>
        </Route>
        <Route path='/comming' element={<MovieComming handleClick={handleClick} handleClickTicket={handleClickTicket}/>}></Route>
    </Routes> 
      {/* {state ? <Modal film={film}/> : ''} */}
      <Modal show={showModal} hide={handleToggleModal} film={film}/>
      <BuyTicket show={showModalTicket} hide={handleToggleModalTicket} film={filmTicket}/>
    <Footer/>
    </div>
  );
}

export default App;
