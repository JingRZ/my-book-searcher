import React from 'react';

function BookList({ books }) {

  function handleBookClick(url){
    window.open(url);
  };

  return (
      <div class="container">
          <div class="row">
          {books ? books.map(book =>
              <div class="col-md-12 text-left">
                  <div class="card m-2 p-2">
                      <div class="row no-gutters" key={book.volumeInfo.id} onClick={() => handleBookClick(book.volumeInfo.previewLink)}>
                        <div class="col-md-3">
                            <img class="book-cover" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : process.env.PUBLIC_URL + '/images/default-book.png'} alt="Portada del libro" />
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <h5 class="card-title text-md-start text-sm-center">{book.volumeInfo.title}</h5>
                                <p class="card-text text-md-start text-sm-center">Autor: {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Autor desconocido"}</p>
                                <p class="card-text text-md-start text-sm-center"><small class="text-muted">Fecha de publicación: {new Date(book.volumeInfo.publishedDate).toLocaleDateString(navigator.language, {year: 'numeric', month: 'long', day: 'numeric'})}</small></p>
                                <p class="card-text text-md-start text-sm-center">Puntuación: {book.volumeInfo.averageRating ? book.volumeInfo.averageRating + "/5" : "Sin calificar"}</p>
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
export default BookList;
