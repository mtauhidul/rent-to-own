import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    content: {
        border: 0,
        width: '100%',
        height: '100%',
        top: 0,
        padding: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
};


const CustomModal = ({children,isOpen,customClasses}) => {
    return (
        <Modal
            style={customStyles}
            isOpen={isOpen}>
            <div className={customClasses ? customClasses : "rounded-2xl px-6 py-3 m-auto bg-white w-3/4 md:w-2/3 lg:w-2/5 xl:1/3"} >
                {/* Children goes here */}
                {children}
            </div>
        </Modal>
    );
};

export default CustomModal;