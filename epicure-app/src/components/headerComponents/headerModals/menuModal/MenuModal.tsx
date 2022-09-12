import Footer from 'components/footer/Footer';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setMenuModalIsOpen } from './menuModalSlicer';
import { Close, ModalBackground, ModalHeader, ModalItemsContainer, XIcon } from './MenuModalStyle';
import CloseIcon from 'assets/navBar/x.svg'
import HeaderLinks from 'components/headerComponents/headerLinks/HeaderLinks';
import ReactModal from 'react-modal';

export default function MenuModal() {
  const modalState = useSelector((state: any) => state.menuModal.value)
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setMenuModalIsOpen(false));
  }

  return (

    <ModalBackground isOpen={modalState} ariaHideApp={false} onRequestClose={closeModal} >
      <ModalItemsContainer>
        <ModalHeader>
          <Close onClick={closeModal}>
            <XIcon src={CloseIcon} />
          </Close>
        </ModalHeader>
        <HeaderLinks />
        <Footer />
      </ModalItemsContainer>
      {/* <Modal 
         isOpen={showModal}
         contentLabel="Minimal Modal Example"
      >
        <button onClick={closeModal}>Close Modal</button>
      </Modal> */}
    </ModalBackground>


  );
}
