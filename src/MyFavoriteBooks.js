import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyFavoriteBooks.css';

class MyFavoriteBooks extends React.Component {
  render() {
    return(
      // <Jumbotron>
      <div class="jumbotron">

        <h1  class="display-4">My Favorite Books</h1>
        <p class="lead">
          This is a collection of my favorite books
        </p>
        </div>

      // </Jumbotron> 
    )
  }
}

export default MyFavoriteBooks;