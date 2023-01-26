import React from "react";

const BookCard = (props) => {
    return (
        <div class="card has-shadow">
            <div class="card-image">
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{ props.book.title }</p>
                        <p class="subtitle is-6">@{ props.book.author }</p>
                    </div>
                </div>

                <div class="content">{ props.book.description }</div>
            </div>
        </div>
    );
}

export default BookCard;