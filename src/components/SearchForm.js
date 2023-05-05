import React, { useState } from 'react';
import axios from 'axios';


function SearchForm({ onSearch }) {

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

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
            onSearch(books);
        //   this.setState({ books });
        })
    };

    const handleChange = (e) => {
        const identif = e.target.id;
        const value = e.target.value;
        if (identif === 'author_input') {
          setAuthor(value);
        } else if (identif === 'title_input') {
          setTitle(value);
        }
    };
    
    return (
        <div class="w-100 main-banner">
            <div class="d-flex justify-content-center align-items-center">
                <div class="row col-md-10 search-box">
                <div class="d-flex justify-content-center align-items-center">
                    <form class="w-90" onSubmit={handleSubmit} onChange={handleChange}>
                        <div class="row form-group">
                            <input type="text" value={title} class="form-control form-control-lg m-2" id="title_input" placeholder="Book Title"/>
                            <input type="text" value={author} class="form-control form-control-lg m-2" id="author_input" placeholder="Book Author"/>
                            <div class="col col-md-10"></div>
                            <div class="col col-md-2 ">
                                <button type="submit" class="btn btn-secondary btn-lg w-100 m-3">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>  
        </div>
    )
}

export default SearchForm;

