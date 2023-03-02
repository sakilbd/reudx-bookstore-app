import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBooks from "../redux/books/thunk/addBooks";
import { bookEdit } from "../redux/booksAction/actions";
import updateBook from "../redux/books/thunk/updateBook";
import { updated } from "../redux/books/actions";
function Form() {
  const books = useSelector((state) => state.books);
  const bookEditAction = useSelector((state) => state.booksAction);
  const dispatch = useDispatch();
  const [checkBox, setCheckBox] = useState(false);
  const [input, setInput] = useState({});

  const changeHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  let updateBookInfo = {};
  useEffect(() => {
    if (bookEditAction.book_edit.status) {
      let filterdBook = books.filter(
        (item) => item.id == bookEditAction.book_edit.id
      );
      updateBookInfo = { ...filterdBook[0] };
      // console.log("ghorer dim");
      // console.log(updateBookInfo.name);
      setInput({ ...input, ...updateBookInfo });
    }

    return () => {};
  }, [bookEditAction]);

  const getFromData = (e) => {
    let fields = e.target;
    let fieldsCount = fields.length - 1; //as there is a button so we have to exclued that
    let formData = {};

    for (let i = 0; i < fieldsCount; i++) {
      if (fields[i].type == "checkbox") {
        formData[fields[i].name] = checkBox;
      } else if (fields[i].type == "number") {
        formData[fields[i].name] = parseInt(fields[i].value);
      } else {
        formData[fields[i].name] = fields[i].value;
      }
    }
    return formData;
  };

  const clearFormData =(e)=>{
    let fields = e.target;
    let fieldsCount = fields.length - 1; //as there is a button so we have to exclued that
    let formData = {};
    console.log(fields);
    console.log(input)
    for (let i = 0; i < fieldsCount; i++) {
      if (fields[i].type == "checkbox") {
       setInput({...input,[fields[i].name] : 'off'});
      } else if (fields[i].type == "number") {
        setInput({...input,[fields[i].name]:'22'});
      } else {
        setInput({...input,[fields[i].name]:'Sexy'});
      }
    }
  };
 

  const submitHandler = (e) => {
    e.preventDefault();
    // console.group("Update Check ");
    // console.log(e.target[6].id)
    // console.groupEnd();
    if (e.target[6].id == "update") {
      dispatch(bookEdit(false, ""));
      // clearFormData(e);
      const formData = getFromData(e);
      console.group("updated From Data")
      console.log(formData);
      console.groupEnd()
      dispatch(updated(1,formData))
    } else {
      const formData = getFromData(e);
      // console.log(JSON.stringify(formData));
      dispatch(addBooks(formData));
    }
  };
  console.log(input);

  return (
    <div>
      <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form class="book-form" onSubmit={submitHandler}>
          <div class="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              class="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={input.name}
              onChange={changeHandle}
            />
          </div>

          <div class="space-y-2">
            <label for="category">Author</label>
            <input
              required
              class="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={input.author}
              onChange={changeHandle}
            />
          </div>

          <div class="space-y-2">
            <label for="image">Image Url</label>
            <input
              required
              class="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={input.thumbnail}
              onChange={changeHandle}
            />
          </div>

          <div class="grid grid-cols-2 gap-8 pb-4">
            <div class="space-y-2">
              <label for="price">Price</label>
              <input
                required
                class="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={input.price}
                onChange={changeHandle}
              />
            </div>

            <div class="space-y-2">
              <label for="quantity">Rating</label>
              <input
                required
                class="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={input.rating}
                onChange={changeHandle}
              />
            </div>
          </div>

          <div class="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              class="w-4 h-4"
              onClick={() => setCheckBox(!checkBox)}
              checked={input.featured}
              onChange={changeHandle}
            />
            <label for="featured" class="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>
          {bookEditAction.book_edit.status ? (
            <button type="submit" class="submit" id="update">
              Update Book
            </button>
          ) : (
            <button type="submit" class="submit" id="submit">
              Add Book
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;
