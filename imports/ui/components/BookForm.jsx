import React, { useState } from "react";

export const BookForm = () => {
    const [book, setBook] = useState("");

    return(
        <form action="">
            <input type="text" placeholder="Ingresa el nombre del libro"/>
        </form>
    );
}