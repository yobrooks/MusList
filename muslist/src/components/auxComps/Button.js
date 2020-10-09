import React from 'react';
import "../../styles/Button.css"

//NOTE: Change these depending
//array holding class names for different button styles
const STYLES = ["btn-solid", "btn-outline", "btn-primary"];

//array holding class names for different button sizes
const SIZES = ["btn-sm", "btn-med", "btn-lg"];



//destructured props object in parameters of arrow function
export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    //check to see if button size and style are valid for button component or if they exist/passed in
    //if not, use default of first style
//this seems to be to prevent random button attributes/properties/styles/etc to be added
//stay in accordance to the style for button component used universally for this project
const setButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
const setButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

return (
        <button className={`btn ${setButtonStyle} ${setButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
}
