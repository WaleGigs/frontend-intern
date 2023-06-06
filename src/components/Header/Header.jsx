import React, {useRef,useEffect, useContext} from 'react'
import {Container,Row,Button} from 'reactstrap'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import logo from '../../assets/images/logo.png'
import './header.css'
const nav_links =[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/create-event',
        display:'Create event'
    },
    {
        path:'/events',
        display:'Events'
    },
    
]

const Header = () => {
    // var data = JSON.parse(localStorage.getItem('user'));
const navigate = useNavigate
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const {user,dispatch} = useContext(AuthContext)
    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
       
    }
    const StickyHeaderFunc = ()=> {
        window.addEventListener('scroll',()=>{
            if(document.scrollTop>80 || document.documentElement.scrollTop ){
                    headerRef.current.classList.add('sticky_header')
            }
            else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
        
    }
    useEffect(()=>{
        StickyHeaderFunc()
        return window.removeEventListener("scroll",StickyHeaderFunc)
    })
    const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')
    return (
        <header className="header" ref={headerRef} >
            <Container>
                <Row>
                <div className="nav_wrapper d-flex align-items-center 
                justify-content-between">
                {/* logo */}
                <div className="logo">
                    <img src={logo} alt="" />
                    <i>Dinner<span>International</span> </i>
                </div>
                {/* menu */}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu d-flex align-items-center gap-5">
                    {nav_links.map((item, index)=>(
                        <li className='nav_item' key={index}>
                         <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active_link': ''} >
                        {item.display}
                        </NavLink>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className='nav_right d-flex align-items-center gap-4'>
                    <div className="nav_btns d-flex align-items-center gap-4">
                
                         {
                            user? <>
                                <h5 className='mb-0'>{user.username}</h5>
                            <Button className='btn btn-dark' onClick={logout}>LogOut</Button>
                            </> : <>
                            <Button className='btn secondary__btn'><Link to={'/login'}>Login</Link></Button>
                        <Button id='register' className='btn primary__btn'><Link to={'/register'}>Register</Link></Button>
                            </>
                         }
                        
                    </div>
                    <span className="mobile_menu" onClick={toggleMenu}><i class="ri-menu-2-line"></i></span>
                </div>
                </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header
