import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const Modal = ({closeModal, children, actionBar}) => {

    const stylesBackground = {
        backgroundColor: 'gray',
        opacity: 80,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    const stylesModal = {
        backgroundColor: 'white',
        position: 'fixed',
        top: 40,
        left: 40,
        right: 40,
        bottom: 40,
        color: 'black',
        textAlign: 'center',
    }

    useEffect(() => {
        document.body.classList.add('overflow-hidden')

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    },[])

    return ReactDOM.createPortal (
        <div>
          <div style={stylesBackground} onClick={closeModal}></div>
          <div style={stylesModal}>
            Modal
            {children}
            {actionBar}
          </div>
        </div>,
        document.querySelector('.modal-container')
    );
};

export default Modal;