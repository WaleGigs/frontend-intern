import React, { useContext, useState, useEffect } from 'react'
import '../styles/book-details.css'
import { Container,Row,Col, FormGroup , Form, Button} from 'reactstrap'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
const BookDetails = () => {
    const {id} = useParams() 
    const {user} = useContext(AuthContext)
    const [credentials, setCredentials] = useState({
        userId:undefined,
        firstName:undefined,
        lastName:undefined,
        eventName:undefined,
        email:undefined,
        guestSize:undefined,
        date:undefined,
        time:undefined,
        file:undefined
    })
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
   
    const handleChange = e =>{
        setCredentials(prev =>({ ...prev, [e.target.id]:e.target.value}))
    }
const {data:book,loading,error} = useFetch(`${BASE_URL}/events/${id}`)
const {photo,title,address,desc,city,maxGroupSize} = book
    useEffect(()=>{
    window.scrollTo(0,0)
    },[book])
    const handleClick = async e =>{
            e.preventDefault()
            try {
                const res = await fetch (`${BASE_URL}/auth/booking`,{
                    method:'post',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(credentials)
                })
                const result = await res.json()
                if (!res.ok) console.log(result.message)
                dispatch({type:'REGISTER_SUCCESS'})
               
        navigate('/successful')
            } catch (error) {
                // alert(error.message)
            }
    }
    return (
       <section>
        <Container>
        {loading && <h4 className='text-center pt-5'>Loading....</h4> }
        {error && <h4 className='text-center pt-5'>{error}</h4> }
           {
            !loading && !error &&  <Row>
                <Col lg='8'>
                    <div className="book_content"> 
                        <img src={photo} alt="" />
                        <div className="book_info">
                            <h2>{title}</h2>
                            <div className="d-flex align-items-center">
                                <span className="d-flex align-items-center gap-1">
                                    <i className="ri-map-pin-fill"></i> {address}
                                </span>
                            </div>
                            <div className="tour_extra-details">
                                <span><i className='ri-map-2-line'></i>{city}</span>
                                {/* <span><i className='ri-map-pin-time-line'></i>{distance} k/m</span> */}
                                <span><i className='ri-group-line'></i>{maxGroupSize}</span>
                               
                               
                            </div>
                            <h5>Description</h5>
                            <p>{desc}</p>
                        </div>
                        <Form>
                        <FormGroup>
                    <Button onClick={handleClick} className='btn btn primary__btn  w-100 mt-4'>
                       <Link to={'/successful'}>
                       Join this event
                       </Link>
                      
                    </Button>
                </FormGroup>
                        </Form>
                        
                    </div>
                </Col>
                
            </Row>
           }
        </Container>
       </section>
    )
}

export default BookDetails
