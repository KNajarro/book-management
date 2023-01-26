import axios from "axios";
import React, { useState } from "react";

const AddNewBook = () => {

    const [ cover, setCover ] = useState("");
    const [ description, setDescription ] = useState("");

    return(
        <div className="container">
            <form action="">
                <input className="input is-fullwidth" type="text" placeholder="Ingresa el nombre del libro" />
            </form>
            <br />
            <button className="button is-fullwidth is-primary has-text-weight-bold is-size-4-mobile">Agregar Nuevo Libro</button>
            <br />
        </div>
    );
}

export default AddNewBook;