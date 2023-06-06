import React from 'react'
import { Container,Row,Col,Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thank-you.css'
const Succesful = () => {
    return (
       <section>
        <Container>
            <Row>
                <Col lg='12' className='pt-5 text-center' >
         <div className="thank_you">
            <span><i className='ri-checkbox-circle-line'></i></span>
            <h1 className="mb3 fw-semibold">Thank You</h1>
            <h3 className="mb-4">You have Successful registered </h3>
        <Button className='btn primary__btn w-25'><Link to={'/home'}>Back to Home</Link></Button>
         </div>
                </Col>
            </Row>
        </Container>
       </section>
    )
}

export default Succesful
