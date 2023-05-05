import React from 'react';
import EditableField from './EditableUsername';

export default class PageNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "nu123ll",
    };

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave = (value) => {
    this.setState({ username: value });
    localStorage.setItem('username', JSON.stringify(value));
  }


  componentDidMount() {
    const storedUsername = JSON.parse(localStorage.getItem('username'));
    if (storedUsername) {
      this.setState({ username: storedUsername });
    }
  }

  // componentDidUpdate() {
  //   localStorage.setItem('username', JSON.stringify(this.state.username));
  // }

  render() {

    const storedUsername = JSON.parse(localStorage.getItem('username'));
    const defaultUsername = storedUsername? storedUsername: "Default";
    
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
          <div class="app-icon mx-2"/>
          <a class="navbar-brand" href="#">My Book Searcher</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
          
          <EditableField value={defaultUsername} onSave={this.handleSave}/>
          <div class="user-icon"></div>
      </nav>
    )
  }
}
