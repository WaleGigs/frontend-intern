import React, {useState} from 'react'
import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import user from '../assets/images/user.png'
import loginImg from '../assets/images/login.png'
import axios from 'axios'
const Login = () => {

   
    const navigate = useNavigate()
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const data = {email, password}
    const url = "http://localhost:5550/users/signin"

    const signIn = () =>{
        console.log(data)
        axios.post(url, data).then((res) => {
            console.log(res)
            alert(res.data.message)
            localStorage.setItem("token", res.data.token)
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
                    <img src={loginImg} alt="" />
                </div>
                <div className="login_form">
                    <div className="user">
                        <img src={user} alt="" />
                    </div>
                    <h2>Login</h2>
                    <Form>
                        <FormGroup>
                            <input type="email"
                             placeholder='email'
                             id='email' onChange={(e)=>setEmail(e.target.value)} 
                              />
                        </FormGroup>
                        <FormGroup>
                            <input type="password"
                             placeholder='password'
                             id='password' onChange={(e)=>setPassword(e.target.value)} 
                              />
                        </FormGroup>
                        <Button onClick={signIn} type='submit' className='btn primary__btn auth_btn'>
                        Login
                        </Button>
                    </Form>
                    <p>Don't have an account <Link to={'/register'}>Create</Link> </p>
                </div>
            </div>
            </Col>
            </Row>
        </Container>
       </section>
    )
}

export default Login
