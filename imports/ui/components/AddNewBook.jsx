import axios from "axios";
import React, { useState, useEffect } from "react";
import books_api from "../../api/services/books_api";
import AsyncSelect from 'react-select/async';

const AddNewBook = () => {

    const [items, setItems] = useState([]);
    const [inputValue, setValue] = useState("");
    const [isSearchable, setSearchable] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    //handle input change event
    const handleInputChange = value => {
        setValue(value)
    }

    //handle selection
    const handleChange = value => {
        setSelectedValue(value);
    }

    const fetchBooks = () => {
        const apiUrl = `https://openlibrary.org/search.json?q=${inputValue}`
        if (inputValue.length > 5) {
            axios.get(apiUrl).then((resp) => {
                const books = resp.data.docs;
                console.log('respuesta obtenida:', resp)
                setItems(books);
            });
        }
    }

    return(
        <div className="container">
            <form action="">
                <AsyncSelect 
                    cacheOptions
                    defaultOptions
                    value={selectedValue}
                    getOptionValue={e => e.id}
                    getOptionLabel={e => e.title}
                    loadOptions={fetchBooks}
                    onInputChange={handleInputChange}
                    onChange={handleChange}
                />
            </form>
            <br />
            <button className="button is-fullwidth is-primary has-text-weight-bold is-size-4-mobile">Agregar</button>
            <br />
        </div>
    );
}

export default AddNewBook;