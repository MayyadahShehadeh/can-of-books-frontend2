// import { useAuth0 } from '@auth0/auth0-react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = async () => {
    const { user } = this.props.auth0;

    let getBooksData = await axios.get(`${process.env.REACT_APP_SERVER}/book?userEmail=${user.email}`);

    this.setState({
      books: getBooksData.data
    })
    // console.log("books dataaaa", this.state.books);

  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2 style={{ textAlign: "center", margin: '10px' }}>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Row>

          {this.state.books.length > 0 ? (
            this.state.books.map(data => {


              return (
                <Col>
                  <Card style={{ width: '18rem', marginTop: '20px', marginBottom: '20px' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title> {data.bookName}</Card.Title>
                      <Card.Text>
                        {data.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Text>
                      status : {data.status}
                    </Card.Text>
                  </Card>
                </Col>
              )


            })
          )
            : (
              <h3>No Books Found :(</h3>
            )}
        </Row>
      </>
    )
  }
}

export default withAuth0(BestBooks);
