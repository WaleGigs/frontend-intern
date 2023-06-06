import React, {useState} from 'react'
import './booking.css'
import logo from '../../assets/img/logo.png'
import { Form,FormGroup,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { Container,Row,Col} from 'reactstrap'
const Booking = ({book}) => {
    const navigate = useNavigate()
    const [credientials, setCredientials] = useState({
        userId:'01',
        firstName:'',
        lastName:'',
        eventName:'',
        email:'name@gmail.com',
        guestSize:1,
        date:'',
        time:'',
        photo:''

    })
    const handleChange = e =>{
        setCredientials(prev =>({...prev, [e.target.id]:e.target.value}) )
    } 
    const handleClick = e =>{
        e.preventDefault();
        console.log(credientials);
        navigate('/thank-you')
    }
    return (
        <section>
            <Container>
                <Row>
                <Col lg='6'>
                <div className='booking '>
         <h5>Create An Event </h5>
         <div className="booking_top d-flex align-items-center justify-content-between">
            <div className="booking_form">
           
               
                <Form className='booking_info-form' onSubmit={handleClick} >
                <FormGroup className='d-flex align-items-center gap-2'>
                {/* <div>First name</div> */}
                    <input type="text" placeholder='first name'
                     id='firstName' required onChange={handleChange} />
                {/* <div>Last name</div> */}
                    <input type="text" placeholder='last name'
                     id='lastName' required onChange={handleChange} />
                </FormGroup>
               
                <FormGroup>
                <div>Event name</div>
                    <input type="text" placeholder="yetunde's birthday"
                     id='eventName' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <div>Email</div>
                    <input type="text" placeholder='name@gmail.com'
                     id='email' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <div>Search venues/hangout spots</div>
                    <input type='search' placeholder='simply type a name or location'
                     id='searchEvent' required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                <div>Date</div>
                    <input type='date' 
                     id='date' required onChange={handleChange} />
                     <div>Time</div>
                    <input type='time' 
                     id='time' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <div>Max. Attendee</div>
                    <input type='number'  placeholder='guest'
                     id='guestSize' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <div>Upload Images</div>
                    <input type='file' 
                     id='photo' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Button onClick={handleClick} className='btn btn primary__btn  w-100 mt-4'>
                        Create Event
                    </Button>
                </FormGroup>
                </Form>
            </div>
           
         </div>  
        </div>
                </Col>
                <Col lg='6'>
                <div className="book_content">
                        <img src={logo} alt="" />
                    </div> 
                </Col>
               
                </Row>
            </Container>
         
        </section>
      
    )
}

export default Booking
