import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
const servicesData =[
    {
        imgUrl:weatherImg,
        title:"Dine out together",
        desc:"Connect and experience delightful dining events with friends and family. ",
    },
    {
        imgUrl:guideImg,
        title:"Foodie Gatherings",
        desc:"Join fellow food enthusiasts for memorable culinary adventures.",
    },
    {
        imgUrl:customizationImg,
        title:"Discover",
        desc:"Discover and reserve seats for exciting dining events near you..",
    },
]
const ServiceList = () => {
   
    return (
        <>
         {
            servicesData.map((item,index)=>
             <Col className='mb-4' lg='3' md='6' sm='12' key={index}><ServiceCard item={item} /></Col>)
         }   
        </>
    )
}

export default ServiceList
