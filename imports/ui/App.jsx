import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import AddNewBook from './components/AddNewBook.jsx';
import BooksList from './components/BooksList.jsx';

export const App = () => (
  <div className='container is-fluid'>
    <h1 className='title has-text-centered has-text-weight-bold	'>Control de Libros</h1>
    <AddNewBook />
    <BooksList />
  </div>
);
