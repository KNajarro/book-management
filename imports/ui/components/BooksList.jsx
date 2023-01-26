import React from "react";
import BookCard from "./BookCard";
import { BooksCollection } from "../../api/BooksCollection";
import { useTracker } from 'meteor/react-meteor-data';

book = {
    title:'Contacto',
    author: 'Carl Sagan',
    description: 'Book 1'
}

const BooksList = () => {
    const books = useTracker(() => BooksCollection.find({}).fetch())
    return(
        <div className="">
            <BookCard book={book} />
        </div>
    );
}

export default BooksList;