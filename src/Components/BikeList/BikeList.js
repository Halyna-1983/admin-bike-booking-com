import React from 'react';
import './BikeList.css';

const BikeList = ({bikes, deleteBike}) => (
  <ul className="bike-list">
      {bikes.map(bike => 
        <li className="bike-list-item" >
          <p className="bike"> {bike.name}</p>
          <p className="bike"> {bike.type}</p>
          <p className="bike"> {bike.color}</p>
          <p className="bike"> {bike.wheelSize}</p>
          <p className="bike"> {bike.price}</p>
          <p className="bike"> {bike.id}</p>


      <button type="button" className="delete-btn" onClick={() => deleteBike(bike.id)}>Delete</button>
        </li>)
      }

</ul>
)

export default BikeList;