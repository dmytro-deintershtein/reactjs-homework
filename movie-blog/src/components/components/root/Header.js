import React, {useState} from 'react';

import Search from "../contained/Search";
import Logo from "../contained/Logo";
import Modal from "../modal";

const Header = () => {
  const [modalIsOpen, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modalIsOpen);
  }

  return (
    <div className={'container__full-width header'}>
      <div className={'content__contained add-movie'}>
        <Logo/>
        <button
          className={'button'}
          onClick={toggleModal}
        >
          {'+ ADD MOVIE'}
        </button>
      </div>
      <Search/>
      <Modal
        modalIsOpen={modalIsOpen}
        close={toggleModal}
      />
    </div>
  )
}

export default Header