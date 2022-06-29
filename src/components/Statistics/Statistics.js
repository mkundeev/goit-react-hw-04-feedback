import React from "react";
import PropTypes from 'prop-types';

import s from './Statistics.module.css'

function Statistics({ good, bad, neutral, total, positivePercentage }) {
    return (
            <ul className={s.list} >
                {good>0 && (<li className={s.item} key='good'>Good: <span className={s.value}>{good}</span></li>)}
                {neutral>0 && (<li className={s.item} key='neutral'>Neutral: <span className={s.value}>{neutral}</span></li>)}
                {bad>0 && (<li className={s.item} key='bad'>Bad: <span className={s.value}>{bad}</span></li>)}
                {total>0 && (<li className={s.item} key='total'>Total: <span className={s.value}> {total}</span></li>)}
                {positivePercentage>0 && (<li className={s.item} key='percentage'>Positive feedback: <span className={s.value}>{positivePercentage}%</span></li>)}
            </ul>
    )
}
Statistics.propTypes = {
    good: PropTypes.number,  
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total:PropTypes.number,
    positivePercentage:PropTypes.number,
};


export default Statistics