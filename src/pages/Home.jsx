import React, {useEffect} from 'react'
import '../styles/home.css'
import axios from 'axios'
import { Container,Row,Col } from 'reactstrap'
import heroVideo1 from '../assets/img/video4.mp4'
import heroVideo2 from '../assets/img/video1.mp4'
import heroVideo3 from '../assets/img/video5.mp4'
import Subtitle from '../shared/Subtitle'
import item from '../assets/img/fork.png'
import experienceImg from '../assets/img/img17.jpeg'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedBookList from '../components/Featured-books/FeaturedBookList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import EventMap from './EventMap'
const Home = () => {
    return (
      <>
   <section>
        <Container>
          <Row>
            <Col lg='6'>
      <div className="hero_content">
        <div className="hero_subtitle d-flex align-items-center">
        <h3 className="services_subtitle"> Know before you go</h3>
          <img style={{width:'50px', height:'40px'}} src={item} alt="" />
        </div>
        <h1>Find your next hangout and meet cool <span className="highlight">People</span> </h1>
          <p>There's so much to experience  with DinnerInternational. Whether you're planning your first events or your next one, 
          take a look at some of our favorite ideas and begin planning your next occasion..</p>
      </div>
            </Col>
            <Col lg='2'>
      <div className="hero_img-box">
        <video loop autoPlay muted src={heroVideo1} alt="" />
      </div>
            </Col>
            <Col lg='2'>
      <div className="hero_img-box mt-4 hero_video_box ">
        <video loop autoPlay muted  src={heroVideo2}  alt="" />
      </div>
            </Col>
            <Col lg='2'>
      <div className="hero_img-box mt-5">
        <video loop autoPlay muted src={heroVideo3} alt="" />
      </div>
            </Col>
            <SearchBar/>
            <EventMap/>
          </Row>
        </Container>
       </section>
       <section>
        <Container>
          <Row>
            <Col lg='3'>
      <h3 className="services_subtitle"> What you stand to gain</h3>
      {/* <h2 className="services_title">We offer our best services</h2> */}
            </Col>
            <ServiceList/> 
          </Row>
        </Container>
       </section>
       <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5' >
            <h5 className="services_subtitle"> Explore</h5>
            <h2 className="featured_book-title">
              Our Featured Events
            </h2>
            </Col>
            <FeaturedBookList/>
          </Row>
        </Container>
       </section>
       <section>
        <Container>
          <Row>
            <Col lg='6'>
      <div className="experience_content">
      <h3 className="services_subtitle"> Experience</h3>
        <h2>With our all experience <br /> we will serve you </h2>
        <p>We make sure you meet your requirement events around the globe.
         <br />
        and assist in finding you desired occasions for your events.
        </p>    
      </div>
            </Col>
            <Col lg='6'>
              <div className="experience_img">
                <img  src={experienceImg} alt="" />
              </div>
              </Col>
          </Row>
        </Container>
       </section>
    
       <section>
        <Container>
          <Row>
            <Col lg='12'>
            <h5 className="services_subtitle">Past Events Pictures</h5>
          <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
       </section>
      
      </>
      
    )
}

export default Home
