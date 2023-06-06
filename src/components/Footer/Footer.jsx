import React from 'react'
import './footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
const quick_links =[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/create-event',
        display:'Create Events'
    }
]
const quick_links2 =[
    {
        path:'/events',
        display:'Events'
    },
    {
        path:'/login',
        display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    }
]
const Footer = () => {
    const year = new Date().getFullYear
    return (
       <footer className="footer">
        <Container>
            <Row>
                <Col lg='3' >
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>Dinner International is proudly sponsored and assisted by limited resources event character.
                    </p>
                    <div className="social_links d-flex align-items-center gap-4">
                        <span><Link to='#' ><i className="ri-youtube-line"></i></Link></span>
                        <span><Link to='#' ><i className="ri-github-fill"></i></Link></span>
                        <span><Link to='#' ><i className="ri-facebook-circle-line"></i></Link></span>
                        <span><Link to='#' ><i className="ri-instagram-line"></i></Link></span>
                    </div>

                </div>
                </Col>
                <Col lg='3'>
                    <h5 className="footer_link-title">Discover</h5>
                    <ListGroup className='footer_quick-links' >
                    {
                        quick_links.map((item,index)=>(
                            <ListGroupItem key={index} className='ps-0 border-0' >
                            <Link to={item.path}>{item.display}</Link>
                            </ListGroupItem>
                        ))
                    }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <ListGroup className='footer_quick-links' >
                <h5 className="footer_link-title">Quick Links </h5>
                    {
                        quick_links2.map((item,index)=>(
                            <ListGroupItem key={index} className='ps-0 border-0' >
                            <Link to={item.path}>{item.display}</Link>
                            </ListGroupItem>
                        ))
                    }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className="footer_link-title">Contact</h5>
                    <ListGroup className='footer_quick-links' >
                    <ListGroupItem  className='ps-0 border-0  ' >
                    <h5>© DinnerInternational 2023 .</h5>
                            </ListGroupItem>
                            <ListGroupItem  className='ps-0 border-0  ' >
                            <h5>Terms of Service</h5>
                            </ListGroupItem>
                            
                            <ListGroupItem  className='ps-0 border-0  ' >
                            <h5>Privacy Policy</h5>
                            </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col lg='12' className='text-center pt-5'>
                    <p className="copyright">copyright{year},  All right Reserved</p>
                </Col>
            </Row>
        </Container>
       </footer>
      
    )
}

export default Footer
