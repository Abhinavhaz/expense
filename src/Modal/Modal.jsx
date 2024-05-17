import React, { useState } from 'react';
//styles
import "./Modal.css"
// import FormButtons from '../FormButtons/FormButtons';
import FormButtons from '../ButtonsForm/FormButtons';

import ModalForm from '../Form/ModalForm';

const Modal = ({ toggleModal, text, existingData } )=> {
    //props
    // const { toggleModal, text, existingData } = props;
    
    return (
        <div className='Modal' onClick={toggleModal}>
            <div className='modalBody' onClick={e => e.stopPropagation()}>
                <div className='modalHead'>{text}</div>
                <ModalForm existingData={existingData} formType={text} toggleModal={toggleModal}/>
            </div>
        </div>
    );
};

export default Modal;