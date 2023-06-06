import React, {useState,UseEffect, useEffect} from 'react'
import '../styles/book.css'
import BookCard from '../shared/BookCard'
import SearchBar from '../shared/SearchBar'
import CommonSection from '../shared/CommonSection'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { Col, Container, Row } from 'reactstrap'
const Books = () => {
    const [pageCount,SetPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const {data:books,loading,error} = useFetch(`${BASE_URL}/events?page=${page}`) 
    const {data:bookCount} = useFetch(`${BASE_URL}/events/search/getEventCount`)
    useEffect(()=>{
const pages = Math.ceil(bookCount/8)
            SetPageCount(pages)
            window.scrollTo(0,0)
    },[page,bookCount,books])
    return (
        <>
           <CommonSection title={"Find Your Next Event"} />
           <section>
            <Container>
                <Row>
                <SearchBar/>
                </Row>
            </Container>
           </section>
           <section className='pt-0'>
            <Container>
            {loading && <h4 className='text-center pt-5'>Loading....</h4> }
            {error && <h4 className='text-center pt-5'>{error}</h4> }
                {
                    !loading && !error  &&   <Row>
               {
                books?.map(book=> <Col lg='3' md='6' sm='6' className='mb-4' key={book.id} ><BookCard book={book} /></Col>)
               }
               <Col lg='12' >
               <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number=>(
                    <span key={number}
                     onClick={()=>setPage(number)}
                     className={page === number ? "active_page": ""}>
                        {number+ 1}
                    </span>
                ))}
               </div>
               </Col>
                </Row> 
                }
            </Container>
           </section>
        </>
    )
}

export default Books
