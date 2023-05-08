import './App.css';
import React, { Component } from 'react';
import axios from 'axios';


import BookList from './components/BookList';
import PageNavbar from './components/PageNavbar';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recommendations from './components/Recommendations';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: null,
      showResult: false,
      showRecom: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(books) {
    this.setState({ books: books, showResult: true, showRecom: false });
  }

  render() {
    const { books, showResult, showRecom } = this.state;
    return (
      <div className="App">
        <PageNavbar />
        <SearchForm onSearch={this.handleSubmit} />
        {showResult && <BookList books={books} />}
        {showRecom && <Recommendations/>}
      </div>
    );
  }
  
}

export default App;
