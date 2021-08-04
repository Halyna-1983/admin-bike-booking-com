import React from 'react';
import './BikeList.css';
import {ReactComponent as Logo} from '../../img/Vector.svg';

const BikeList = ({bikes, deleteBike}) => (
  <ul className="bike-list">
      {bikes.map(bike => 
        <li className="bike-list-item" >
          <p className="bike-name"> {bike.name} -</p>
          <p className="bike"> {bike.type}</p>
          <p className="bike"> {bike.color}</p>
          <p className="bike"> {bike.wheelSize}</p>
          {/* <label className="input" htmlFor={this.statusInputId}>
          <select className="bike" type={this.state.type} id={this.statusInputId} onChange={this.handleChange}>
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="unavailable">Unavailable</option>
        </select></label> */}
          <p className="bike"> {bike.price}</p>
          <p className="bike"> {bike.id}</p>


      <button 
        type="button" 
        className="delete-btn" 
        onClick={()=>deleteBike(bike.id)}>
        <Logo alt="delete"/>
      </button>
        </li>)
      }

</ul>
)

export default BikeList;