import React, {useContext, useState,} from 'react'
import './create-event.css'
import '../../styles/book-details.css'
import logo from '../../assets/img/create.jpeg'
import { Row, Col, Form,FormGroup,Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'
const CreateEvent = () => {
    const [credentials, setCredentials] = useState({
        title:undefined,
        desc:undefined,
        address:undefined,
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
    const handleClick = async e =>{
            e.preventDefault()
            try {
                const res = await fetch (`${BASE_URL}/auth/events`,{
                    method:'post',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(credentials)
                })
                const result = await res.json()
                if (!res.ok)
                 console.log(result.message)
               
       
            } catch (error) {
                alert('Successful')
            }
            navigate('/thank-you')
    }
    
    
   
    return (
        <section>
           
            <Row>
                
                <Col lg='8'>
                    <div  className="book_content "> 
                        <img style={{width:'80%'}} src={logo} alt="" />
                       
                    </div>
                </Col>
                <Col lg='4'>
                <div className='booking'>
         <h5>Create An Event</h5>
         <div className="booking_top">
            <div className="booking_form">
           
               
                <Form className='booking_info-form' onSubmit={handleClick}  >
                <FormGroup className='d-flex align-items-center gap-2'>
                {/* <div>First name</div> */}
                    <input type="text" placeholder='title'
                     id='title' required onChange={handleChange} />
               
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-2'>
               
                    <input type="text" placeholder='description'
                     id='desc' required onChange={handleChange} />
                </FormGroup>
               
                <FormGroup>
                <input type="text" placeholder='description'
                     id='address' required onChange={handleChange} />
                </FormGroup>
               
               
                <FormGroup className='d-flex align-items-center gap-3'>
                <div>Date</div>
                    <input type='date' 
                     id='date' onChange={handleChange} />
                     
                   
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
               
                   
                     <div>Time</div>
                    <input type='time' 
                     id='time'  onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <div>Max. Attendee</div>
                    <input type='number'  placeholder='guest'
                     id='guestSize'  onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <div>Upload Images</div>
                    <input  type='file' 
                     id='file' className='form-control'  onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Button  className='btn btn primary__btn  w-100 mt-4'>
                     <Link to={'/thank-you'}>
                       
                     </Link>   
                     Create event 
                    </Button>
                </FormGroup>
                </Form>
            </div>
           
         </div>  
        </div>
                </Col>
            </Row>
          
           
        </section>
      
    )
}

export default CreateEvent


 
