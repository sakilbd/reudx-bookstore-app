import React, { useEffect } from 'react';
import Navbar from './Navbar'
import BookCard from './BookCard';
import Form from './Form'
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../redux/todos/thunk/fetchBooks';



function Body() {
    const books = useSelector(state=>state.books)
    const dispatch = useDispatch()
    useEffect(() => {
      
    dispatch(fetchBooks)
   
      return () => {
        
      }
    }, [dispatch])

    console.log(books);
    
    
  return (
    <div>
      <Navbar/>
        <main class="py-12 2xl:px-6">
          <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <div class="order-2 xl:-order-1">
              <div class="flex items-center justify-between mb-12">
                <h4 class="mt-2 text-xl font-bold">Book List</h4>

                <div class="flex items-center space-x-4">
                  <button class="filter-btn active-filter" id="lws-filterAll">
                    All
                  </button>
                  <button class="filter-btn" id="lws-filterFeatured">
                    Featured
                  </button>
                </div>
              </div>
              <div class="lws-bookContainer">
                {/* <!-- Card 1 --> */}
                {
                    books.map(item=>{
                        return (<BookCard bookInfo={item}/>)
                    })
                }
                
              </div>
            </div>
            <div>
            <Form/>
            
            </div>
          </div>
        </main>
    </div>
  )
}

export default Body
