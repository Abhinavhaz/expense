import React from 'react';
//styles
import "../TransactionBody/TransactionBody.css"
//assetes
import leftArrowIcon from "../assets/left.png";

import rightArrowIcon from "../assets/right.png";
//components
import Button from '../Button/button';

const PageNavigateBar =({pages, updatePage}) => {
    //props
    // const {pages, updatePage} = props;
    return ( 
        <div className='TransactionBar PageNavigateBar'>
            <Button 
            icon={leftArrowIcon} 
            buttonSize="smallButton" 
            background={pages.currentPage === 1 ? "" : "shadow"} 
            clickFunction={()=> updatePage("left")}
            />
            <Button 
            text={pages.currentPage} 
            buttonSize="mediumButton" 
            background="backgroundDarkGreen" 
            />
            <Button 
            icon={rightArrowIcon} 
            buttonSize="smallButton" 
            background={pages.currentPage === pages.totalPages ? "" : "shadow"} 
            clickFunction={()=> updatePage("right")}
            />
        </div>
    );
};

export default PageNavigateBar;