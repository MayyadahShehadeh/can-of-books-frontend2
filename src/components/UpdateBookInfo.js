import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

export class UpdateBookInfo extends Component {
  render() {
    return (
      <>
         <Modal show={this.props.showUpdateModal} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.props.updateBookInfo}>
              <input type="text" name='bookName' defaultValue={this.props.bookName} />
              <input type="text" name='description' defaultValue={this.props.description} />
              <br />
              <input type="submit" value="update" />
              <button onClick={this.props.handleClose}>Close</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default UpdateBookInfo