import React from 'react'
import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import user from '../assets/images/user.png'
import registerImg from '../assets/images/register.png'
import axios from 'axios'
const Register = () => {    
    const navigate = useNavigate()
    const signUp = async () => {
        const firstName = document.getElementById("firstName").value
        const lastName = document.getElementById("lastName").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const data = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }
       
       
        axios.post("http://localhost:5550/users/signup", data).then((res) => {
          console.log(res)
          alert('Account successfully created')
        }).catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
        navigate('/')
      }
   
    return (
       <section>
        <Container>
            <Row>
            <Col lg='8' className='m-auto'>
            <div className="login_container
             d-flex justify-content-between">

                <div className="login_img">
                    <img src={registerImg} alt="" />
                </div>
                <div className="login_form">
                    <div className="user">
                        <img src={user} alt="" />
                    </div>
                    <h2>Register</h2>
                    <Form>
                    <FormGroup>
                            <input type="text"
                             placeholder='Firstname'
                             id='firstName' 
                              />
                        </FormGroup>
                        <FormGroup>
                            <input type="text"
                             placeholder='Lastname'
                             id='lastName' 
                              />
                        </FormGroup>
                        <FormGroup>
                            <input type="email"
                             placeholder='email'
                             id='email' 
                              />
                        </FormGroup>
                        <FormGroup>
                            <input type="password"
                             placeholder='password'
                             id='password' 
                              />
                        </FormGroup>
                        <Button onClick={signUp} type='submit' className='btn primary__btn auth_btn'>
                       Create Account
                        </Button>
                    </Form>
                    <p>Already have an account <Link to={'/login'}>Login</Link> </p>
                </div>
            </div>
            </Col>
            </Row>
        </Container>
       </section>
    )
}

export default Register
