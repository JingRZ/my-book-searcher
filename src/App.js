import './App.css';

import BookList from './components/BookList';
import PageNavbar from './components/PageNavbar';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const title = "catedral";
  const author = "";
  return (
    <div ClassName="App">
      <PageNavbar/>
      <SearchForm/>
      <BookList title={title} author={author}/>
    </div>
  );
}

export default App;
