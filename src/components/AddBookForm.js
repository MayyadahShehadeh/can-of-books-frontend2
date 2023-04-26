import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

export class AddBookForm extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.props.addBook} >
              <input type="text" name='bookName' placeholder='add book name' />
              <input type="text" name='description' placeholder='add description' />
              <input type="submit" value="Add Book" onClick={this.props.handleClose} />
            </form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>

        </Modal>
      </>
    )
  }
}

export default AddBookForm