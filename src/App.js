import './App.css';
import React, { Component } from 'react';
import axios from 'axios';


import BookList from './components/BookList';
import PageNavbar from './components/PageNavbar';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: null,
      error: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(books) {
    this.setState({ books: books });
  }

  componentDidUpdate() {
    localStorage.setItem('myAppData', JSON.stringify(this.state));
  }

  render() {
    const { books } = this.state;
    return (
      <div className="App">
        <PageNavbar />
        <SearchForm onSearch={this.handleSubmit} />
        {books && <BookList books={books} />}
      </div>
    );
  }
  
}

export default App;
