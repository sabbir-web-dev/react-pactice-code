import React, { useReducer, useState } from 'react'

const bookData = [
  {id:1,name:"Java Script"},
  {id:2,name:"React Js"},
  {id:3,name:"Type Script"}
] 
function ReduceHook() {
  const [bookName,setbookName] = useState("");

  const reduce = (state,action) =>{
    if(action.type === "Add"){
      const allBook = [...state.books,action.payload];
      return{
        ...state,
        books : allBook,
        isMassage :true,
        massageText : "Book is add"
      };
    };
    if(action.type === "Remove"){
      const filterBook = [...state.books].filter(book => book.id !== action.payload);

      return{
        ...state,
        books : filterBook,
        isMassage :true,
        massageText : "Book is deleted"
      }
    }
    return state;
  }

  const [bookState,dipatch] = useReducer(reduce,{
    books : bookData,
    isMassage : false,
    massageText : ""
  })
  const hendleSubmit = (e) =>{
    e.preventDefault();
    const newBook = {id: new Date().getTime().toString(),name:bookName}
    dipatch({type: "Add",payload: newBook});
    setbookName("")
  }
  
  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <input type="text" 
          onChange={(e)=> setbookName(e.target.value)}
          value={bookName}
        />
        <button type="submit">Submit</button>
      </form>
      {bookState.isMassage && <p>{bookState.massageText}</p>}
      {bookState.books.map(book =>
        <div key={book.id}> 
          <h4>{book.name}</h4>
          <button onClick={() => dipatch({type:"Remove",payload:book.id})}>remove</button>
        </ div>)
      }
    </div>
  )
}

export default ReduceHook
