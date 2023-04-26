import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'

export class BooksCards extends Component {
  render() {
    return (
      <>
        {
          this.props.books.map((data, idx) => {
            return (
              <Col>
                <Card key={idx} style={{ width: '18rem', marginTop: '20px', marginBottom: '20px' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title>{data.bookName}</Card.Title>
                    <Card.Text> Book description :
                      {data.description}
                    </Card.Text>
                  </Card.Body>
                  <button onClick={() => { this.props.deleteBook(data._id) }}>Delete</button>
                  <button onClick={() => { this.props.updateBook(data._id) }} > update </button>

                </Card>
              </Col>

            )
          })
        }
      </>
    )
  }
}

export default BooksCards