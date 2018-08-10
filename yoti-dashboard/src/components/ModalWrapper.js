import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class ModalWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.hasBeenClicked) {
      this.setState({ modalIsOpen: true });
    }
  }

  openModal() {
    if (this.props.hasBeenClicked) {
      this.setState({ modalIsOpen: true });
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={this.closeModal}>X</button>
        <div>Modal</div>
      </Modal>
    );
  }
}

export default ModalWrapper;
