import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Books from '../pages/Books'
import BookDetails from '../pages/BookDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import CreateEvent from '../components/Booking/CreateEvent'
import Succesful from '../pages/Succesful'
const Routers = () => {
    return (
       <Routes>
        <Route path='/' element={<Navigate to={'/home'} /> }  />
       <Route path='/home' element={<Home/>} />
       <Route path='/events' element={<Books/>} />
       <Route path='/events/:id' element={<BookDetails/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/home' element={<Home/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='/thank-you' element={<ThankYou/>} />
       <Route path='/successful' element={<Succesful/>} />
       <Route path='/books/search' element={<SearchResultList/>} />
       <Route path='/create-event' element={<CreateEvent/>} />
       </Routes>
    )
}

export default Routers
