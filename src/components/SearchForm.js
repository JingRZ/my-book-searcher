import React from 'react';

export default class PageNavbar extends React.Component {
    

  render() {
    return (
        <div class="w-100 main-banner">
            <div class="container">
                <div class="row col-md-10 search-box">
                <div class="d-flex justify-content-center align-items-center">
                    <form class="row w-90">
                        <div class="row">
                            <input type="text" class="form-control form-control-lg m-2" id="title_input" placeholder="Book Title"/>
                            <input type="text" class="form-control form-control-lg m-2" id="author_input" placeholder="Book Author"/>
                            <div class="col col-md-10"></div>
                            <div class="col col-md-2 ">
                                <button type="button" class="btn btn-secondary btn-lg w-100 m-3">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>  
            
        </div>
    )
  }
}


