
import React from 'react';
//styles
import "./FormButtons.css"
//components
import Button from '../Button/button';

const FormButtons = ({ text, toggleModal }) => {
    //props
    
    return (
        <div className='formButtons'>
            <Button 
            text={text} 
            background="backgroundOrange" 
            buttonSize="largeButton"
            buttonType="submit"
            />
            <Button 
            text="Cancel" 
            background="backgroundWhite" 
            buttonSize="largeButton"
            clickFunction={toggleModal}
            />
        </div>
    );
};

export default FormButtons;
