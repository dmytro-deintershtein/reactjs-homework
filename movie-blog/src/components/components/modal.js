import React, {Component} from 'react';

const Modal = ({modalIsOpen, close}) => {
  if (!modalIsOpen) {
    return false;
  }

  return (
    <>
      <div className={'modal-overlay'}/>
      <div className={'modal'}>
        <div className="modal-header">
          <button
            type="button"
            className="modal-close-button"
            onClick={close}>
            Close
          </button>
        </div>
        <div className={'modal-content'}>
          <label htmlFor="movie-slug">Add movie</label>
          <input type="text" id={'movie-slug'}/>
          <button>ADD</button>
        </div>
      </div>
    </>
  )
}

export default Modal