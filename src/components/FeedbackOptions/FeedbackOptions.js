import React from "react";
import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css'

function FeedbackOptions({ options, onLeaveFeedback }) {
    
    return <ul className={s.btnList}>
        {options.map(option => (<li key={option}><button type="button" className={s.btn} data-state={option} onClick={onLeaveFeedback}>{option}</button></li>))
        }
    </ul>   
}
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,  
    onLeaveFeedback:PropTypes.func.isRequired,
};


export default FeedbackOptions