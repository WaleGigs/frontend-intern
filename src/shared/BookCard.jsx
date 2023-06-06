import React from 'react'
import {Card, CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
import './book-card.css'
const BookCard = ({book}) => {
    const {_id,city, title,photo,featured,date,time,maxGroupSize} = book

    return (
        <div className='book_card'>
          <Card>
            <div className='book_img'>
                <img src={photo} alt="book-img" />
                {featured &&  <span>New Group</span> }          
            </div>
            <CardBody>
            <h5 className="book_title"><Link to={`/events/${_id}`} >{title}</Link></h5>
            <div className="card_top d-flex  justify-content-between">
              <span style={{whiteSpace:'nowrap'}} className='book_location d-flex align-items-center gap-1'>
                <i className='ri-map-pin-line'></i>{city}
              </span>
              
              
            </div>
            <div style={{whiteSpace:'nowrap'}} className='book_location d-flex align-items-center gap-1'>
               {date}.{time}
              </div>
            
            <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
              <button className="btn booking_btn">
                <Link to={`/successful`}>Join this event</Link>
              </button>
            </div>
                <br />
            <h5 className="antendee">{maxGroupSize} antendees </h5>
          </CardBody>
          </Card>
        
        </div>
    )
}

export default BookCard
