import React, {useRef} from 'react'
import './search-bar.css'
import {Col, Form, FormGroup} from 'reactstrap'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
    const locationRef = useRef('')
    // const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)
    const navigate = useNavigate()
    const searchHandler = async() =>{
        const location  = locationRef.current.value
        // const maxGroupSize  = maxGroupSizeRef.current.value
        if(location ===''){
            return alert('All fields are required!')
        }
        const res = await fetch(`${BASE_URL}/events/search/getEventBySearch?city=${location}`)
    if (!res.ok)
     alert('something went wrong')
    const result = await res.json()
    navigate(`/books/search?city=${location}`
    , {state:result.data})
    }
    return (
        <div  className='mx-auto'>
            <Col lg='12'>
                <div className="search_bar">
                    <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span><i className='ri-map-pin-line'></i></span>
                        <div>
                            <h6>location</h6>
                            <input type="text" placeholder='Any event around ?' ref={locationRef} />
                        </div>
                    </FormGroup>
                    {/* <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span><i className='ri-map-pin-time-line'></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder='Distance k/m' ref={distanceRef} />
                        </div>
                    </FormGroup> */}
                    {/* <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span><i className='ri-group-line'></i></span>
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup> */}
                    <span className="search_icon" type='submit' onClick={searchHandler} >
                    <i className="ri-search-line"></i>
                    </span>
                    </Form>
                </div>
            </Col>
        </div>
    )
}

export default SearchBar
