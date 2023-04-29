import React, {useEffect,useState} from "react";
import {auth,provider} from "./config"
import { signInWithPopup } from 'firebase/auth';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../../img/logo.png';
import '../../StyleSheet/Header.css';

function NavBar(){
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    const [value,setValue] = useState('')
      const LogIn =()=>{
        signInWithPopup(auth,provider).then((data) =>{
          setValue(data.user.email)
          localStorage.setItem("name",data.user.displayName)
        })
    }

        useEffect(()=>{
            setValue(localStorage.getItem('name'))
          })

          const LogOut =() =>{
            localStorage.clear()    
            window.location.reload()    
        }

    return (
        <div className="header__middle">
            <div className="container-header">
                <div className="row">

                    {/* Add Logo  */}
                    <div className="header__middle__logo">
                        <NavLink to="/">
                            <img src={logo} alt="logo" /> 
                        </NavLink>
                    </div>
                

                    <div className="header__middle__menus">
                        <div className="main-nav " >
                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <> 
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                            </> : <> 
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                            </>}


                            <ul className={boxClass.join(' ')}>
                            <li  className="menu-item" >
                                <NavLink  onClick={toggleClass} to={`/`}> Home </NavLink> 
                            </li>
                            <li className="menu-item " ><NavLink onClick={toggleClass}  to={`/About`}> About </NavLink> </li>
                            <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> For <FiChevronDown /> </Link>
                                <ul className={boxClassSubMenu.join(' ')} > 
                                    <li> <NavLink onClick={toggleClass}   to={`/Adult`}> Adult </NavLink> </li>
                                    <li><NavLink onClick={toggleClass}  to={`/Children`}> Children </NavLink> </li>
                                </ul>
                            </li>
                            <li className="menu-item " ><NavLink onClick={toggleClass}  to={`/Contact`}> Contact </NavLink> </li>
                            <li className='sign-in-box'>
                            {localStorage.getItem("name") ? (
                                <a href="#" className='sign-in' onClick={LogOut}>
                                    <h4>Hi  {localStorage.getItem("name") }</h4>
                                    
                                     <i className="bi bi-person-fill" > Logout</i> 
                                </a>
                            ):( 
                                <a href="#" className='sign-in' onClick={LogIn}>     
                                         <i className="bi bi-person-fill" > LogIn</i> 
                                </a> 
                            )}
                            </li>
                            </ul>
                        </div> 
                        </div>  
                </div>
            </div>
        </div>
    )
}

export default NavBar
