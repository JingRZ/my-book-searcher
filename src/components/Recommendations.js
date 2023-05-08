import React, { useState } from 'react';
import axios from 'axios';


export default class Recommendations extends React.Component {

    constructor(props) {
        super(props);

        const storedGenre = JSON.parse(localStorage.getItem('searchedGenre'));


        this.state = {
            books: null,
            genre: storedGenre,
        };
    
    }

    componentDidMount() {
        if(this.state.genre){
            let q = "subject:"+this.state.genre;
            
            let url = `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=4`;

            axios.get(url)
            .then(res => {
                this.setState({books: res.data.items});
            })
        }
        
    };

    handleBookClick(url){
        window.open(url);
    };

    render() {
        const books = this.state.books;
        const genre = this.state.genre;

        if(genre!=null){
            return (
                <div class="mx-auto w-100">
                    <h4 class="py-3">Recomendaciones: {genre}</h4>
                    <div class="d-flex">
                        {books ? books.map(book =>
                        <div class="col-sm-12 col-md-6 col-lg-3 text-left">
                            <div class="card m-2 p-2">
                                <div class="row" key={book.volumeInfo.id} onClick={() => this.handleBookClick(book.volumeInfo.previewLink)}>
                                
                                    <img class="card-img-top book-cover" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : process.env.PUBLIC_URL + '/images/default-book.png'} alt="Portada del libro" />
                                    <div class="card-body">
                                        <h5 class="card-title text-md-start text-sm-center">{book.volumeInfo.title}</h5>
                                        <p class="card-text text-md-start text-sm-center">Autor: {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Autor desconocido"}</p>
                                        <p class="card-text text-md-start text-sm-center">Puntuación: {book.volumeInfo.averageRating ? book.volumeInfo.averageRating + "/5" : "Sin calificar"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ): (
                            <div class="mx-auto">
                                <p>No se han encontrado resultados para este género</p>
                            </div>
                        )}
                    </div>
                    
                </div>
            )
        }
    }
    
}


