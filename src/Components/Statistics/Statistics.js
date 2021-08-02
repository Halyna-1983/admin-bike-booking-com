import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({total, available, booked, cost}) => (
    
    <div className="Statistics__title">
    
        <ul>
            <li>Total Bikes: {total} </li>
            <li>Available Bikes: {available} </li>
            <li>Booked Bikes: {booked} </li>
            <li>Average bike cost: {cost} UAH/hr</li>

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
