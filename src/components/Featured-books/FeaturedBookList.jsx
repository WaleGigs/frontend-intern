import React from 'react'
import BookCard from '../../shared/BookCard'
import { Col } from 'reactstrap'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
const FeaturedBookList = () => {
    const {data:FeaturedBooks,loading,error} = useFetch(`${BASE_URL}/events/search/getFeaturedEvent `)
    console.log(FeaturedBooks);
    return (
        <>
        {
            loading && <h4>Loading.......</h4>
        }
        {
            error && <h4>{error}</h4>
        }
           { !loading && !error &&
                 FeaturedBooks?.map(book=>(
                <Col lg='3' md='6' sm='6' className='mb-4' key={book._id} ><BookCard book={book} /></Col> ))
                
           } 
        </>
    )
}

export default FeaturedBookList
