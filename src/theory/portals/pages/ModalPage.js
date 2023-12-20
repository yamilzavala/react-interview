import React, {useState} from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => {
        setShowModal(false)
    }

    const actionBar = <Button onClick={closeModal}>Close modal</Button>;
    const modal = <Modal closeModal={closeModal} actionBar={actionBar}>
                    <p>Some tex for the modal</p>
                  </Modal>;

    return (
        <div>                
            <Button primary onClick={() => setShowModal(!showModal)}> {showModal ? 'Close modal!' : 'Open modal!'}</Button>
            {showModal && (modal)}  
        </div>
    );
};

export default ModalPage;