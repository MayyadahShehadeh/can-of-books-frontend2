// import { useAuth0 } from '@auth0/auth0-react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React from 'react';
import BooksCards from './components/BooksCards';
import { Row, Button } from 'react-bootstrap';
import AddBookForm from './components/AddBookForm';
import UpdateBookInfo from './components/UpdateBookInfo';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
      selectedBook: {},
      showUpdateModal: false

    }
  }


  // ------------------ get all books data -----------------
  componentDidMount = async () => {
    const { user } = this.props.auth0;
    let getBooksData = await axios.get(`${process.env.REACT_APP_SERVER}/book?userEmail=${user.email}`);

    this.setState({
      books: getBooksData.data
    })
  }

  // ----------------- add new book ---------
  addBook = async (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;

    let bookInfo = {
      userEmail: user.email,
      bookName: e.target.bookName.value,
      bookDescription: e.target.description.value
    }

    let addBookData = await axios.post(`${process.env.REACT_APP_SERVER}/addBook`, bookInfo);

    this.setState({
      books: addBookData.data
    })
  }

  // ---------- delete book -------------
  deleteBook = async (bookID) => {
    const { user } = this.props.auth0;

    let deletBook = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteBook/${bookID}?userEmail=${user.email}`)
    this.setState({
      books: deletBook.data
    })

  }

  // ----------------- update book informations --------------
  updateBook = async (bookID) => {

    let choosenBook = this.state.books.find(item => {
      return item._id === bookID;
    })
    console.log({ choosenBook });

    this.setState({
      selectedBook: choosenBook,
      showUpdateModal: true
    })
  }

  updateBookInfo = async (e) => {
    const { user } = this.props.auth0;

    e.preventDefault();

    let bookInputs = {
      userEmail: user.email,
      bookName: e.target.bookName.value,
      description: e.target.description.value
    }
    let bookID = this.state.selectedBook._id;
    let bookData = await axios.put(`${process.env.REACT_APP_SERVER}/updateBook/${bookID}`, bookInputs);

    this.setState({
      books: bookData.data
    })
  }

  // -------------------- to show and hide the modal ------------------
  handleShow = () => {
    this.setState({show: true})}

  handleClose = () => {this.setState({show: false,showUpdateModal: false})}




  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2 style={{ textAlign: "center", margin: '10px' }}>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <br />

        <Button variant="primary" onClick={this.handleShow} style={{ marginLeft: '700px' }}> Add Book </Button>
        <br />

        {/*  ------------------ render all books in cards ------- */}
        <Row>
          {this.state.books.length ? (

            <BooksCards
              books={this.state.books}
              deleteBook={this.deleteBook}
              updateBook={this.updateBook}
            />

          ) : (
              <h3>No Books Found :(</h3>
            )}
        </Row>

        {/* -------------- Add new book form with modal --------- */}
        <AddBookForm
          show={this.state.show}
          handleClose={this.handleClose}
          addBook={this.addBook}
        />

        {/* --------------- update book form with Modal ---------- */}
        <br />
        <UpdateBookInfo
          showUpdateModal={this.state.showUpdateModal}
          handleClose={this.handleClose}
          updateBookInfo={this.updateBookInfo}
          bookName={this.state.selectedBook.bookName}
          description={this.state.selectedBook.description}
        />
      </>
    )
  }
}

export default withAuth0(BestBooks);
