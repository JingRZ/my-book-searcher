import React from 'react';
import axios from 'axios';

export default class BookList extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    const title = this.props.title;
    const author = this.props.author;

    let q = "";
    if(author === "" && title === ""){
        alert("Introduzca un autor o un titulo");
        return;
    }
    if(author !== ""){
      q=`inauthor:${author}`;
    }
    if(author !== "" && title !==""){
      q+="+";
    }
    if(title !== ""){
      q+=`intitle:${title}`;
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=40`;

    axios.get(url)
      .then(res => {
        const books = res.data.items;
        this.setState({ books });
      })
  }

  render() {
    const { books } = this.state;
    return (
        <div class="container">
            <div class="row">
            {books ? books.map(book =>
                <div class="col-md-12">
                    <div class="card m-2 p-2">
                        <div class="row no-gutters" key={book.id} onClick={() => this.handleBookClick(book.volumeInfo.previewLink)}>
                            <div class="col-md-2">
                                <img class="" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""} alt="Portada del libro" />
                            </div>
                            <div class="col-md-10">
                                <div class="card-body">
                                    <h5 class="card-title">{book.volumeInfo.title}</h5>
                                    <p class="card-text">Autor: {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Autor desconocido"}</p>
                                    <p class="card-text"><small class="text-muted">Fecha de publicación: {book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : "Desconocida"}</small></p>
                                    <p class="card-text">Puntuación: {book.volumeInfo.averageRating ? book.volumeInfo.averageRating + "/5" : "Sin calificar"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            ): (
                <div>
                    <p>No se encontraron libros</p>
                    <img src="https://i.kym-cdn.com/entries/icons/mobile/000/026/489/crying.jpg" alt="alternatetext"/>
                </div>
            )}
            </div>
          
        </div>
    )
  }
}