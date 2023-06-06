import React, {useState} from 'react'
import CommonSection from '../shared/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import BookCard from '../shared/BookCard'
const SearchResultList = () => {
  const location = useLocation()
  const [data] = useState(location.state)
       console.log(data);
    return (
        <>
         <CommonSection title={"Event search result"}  />
         <section>
          <Container>
          <Row>
              {
                data.length === 0 ? <h4 className='text-center'>Events not found</h4>
                 : data?.map(book => (
                  <Col key={book._id} lg='3' className='mb-4' ><BookCard book={book} /></Col>))
              }
            </Row>
          </Container>
         </section>
        </>
    )
}

export default SearchResultList
