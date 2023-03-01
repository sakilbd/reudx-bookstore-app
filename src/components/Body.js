import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BookCard from "./BookCard";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";

function Body() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [catagory,setCatagory] = useState('all');
  let filteredBooks=[];
  useEffect(() => {
    dispatch(fetchBooks);

    return () => {};
  }, [dispatch]);
  if(catagory=='featured'){
    filteredBooks = [...books.filter(item=>item.featured==true)]
  }
  else{
    filteredBooks = [...books];
  }
  console.log(books);
 
  return (
    <div>
      <Navbar />
      <main class="py-12 2xl:px-6">
        <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div class="order-2 xl:-order-1">
            <div class="flex items-center justify-between mb-12">
              <h4 class="mt-2 text-xl font-bold">Book List</h4>

              <div class="flex items-center space-x-4">
                <button class={`filter-btn ${catagory=="all" && "active-filter"}`} id="lws-filterAll" onClick={()=>setCatagory("all")}>
                  All
                </button>
                <button
                  class={`filter-btn ${catagory=="featured" && "active-filter"}`}
                  id="lws-filterFeatured"
                  onClick={()=>setCatagory("featured")}
                >
                  Featured
                </button>
              </div>
            </div>
            <div class="lws-bookContainer">
              {/* <!-- Card 1 --> */}
              {filteredBooks.map((item) => {
                return <BookCard bookInfo={item} />;
              })}
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Body;
