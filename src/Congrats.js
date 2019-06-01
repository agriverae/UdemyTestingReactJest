import React from 'react';
import Proptypes from "prop-types";

/**
 * Function react component for congratulatory message.
 * @function
 * @param {object} prop - React props.
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is)
 */

const Congrats = (props) => {
    if(props.success){
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        )
    }
}

Congrats.propTypes = {
    success: Proptypes.bool.isRequired,
}

export default Congrats;