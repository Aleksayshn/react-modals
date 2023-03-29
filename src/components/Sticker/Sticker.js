import { useState } from 'react';
import Modal from 'react-modal';
import { Actions, CardWrapper, Image, Label } from './Sticker.styled';
import { ImageModal } from 'components/ImageModal/ImageModal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const Sticker = ({ sticker }) => {
  const [openedModal, setOpenedModal] = useState(null);

  const openModal = (type) => {
    setOpenedModal(type);
  };

  const closeModal = () => {
    setOpenedModal(null);
  };

  const { img, label } = sticker;

  return (
    <>
      <CardWrapper>
        <Image
          src={img}
          alt={label}
          onClick={() => openModal('image')}
        />
        <Label>{label}</Label>
        <Actions>
          <button onClick={() => openModal('edit')}>Edit</button>
          <button onClick={() => openModal('fav')}>Fav</button>
          <button onClick={() => openModal('delete')}>Delete</button>
        </Actions>
      </CardWrapper>

      <ImageModal
        isOpen={openedModal === 'image'}
        img={img}
        onClose={closeModal}
      />

      <Modal
        isOpen={openedModal === 'edit'}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <button onClick={closeModal}>Close</button>
        <div>Edit modal</div>
      </Modal>

      <Modal
        isOpen={openedModal === 'fav'}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <button onClick={closeModal}>Close</button>
        <div>Fav modal</div>
      </Modal>

      <Modal
        isOpen={openedModal === 'delete'}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <button onClick={closeModal}>Close</button>
        <div>Delete modal</div>
      </Modal>
    </>
  );
};
