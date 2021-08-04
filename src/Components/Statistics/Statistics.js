import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({title, total, available, booked, cost}) => (
    
    <div className="Statistics__title">
        <h1>{title}</h1>
    
        <ul>
            <li className="Statistics__list">Total Bikes: {total} </li>
            <li className="Statistics__list">Available Bikes: {available} </li>
            <li className="Statistics__list">Booked Bikes: {booked} </li>
            <li className="Statistics__list">Average bike cost: {cost} UAH/hr</li>

        </ul>
        
    </div>
); 

Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    available: PropTypes.number.isRequired,
    booked: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
};

    export default Statistics;
