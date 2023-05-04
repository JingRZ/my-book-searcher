import React from 'react';



export default class PageNavbar extends React.Component {

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
          <a class="navbar-brand" href="#">My Book Searcher</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Seach</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>

          {/* <div>
            <img class="w-25" src="usuario.png" />
              <label>username</label>
          </div> */}
      </nav>
    )
  }
}
