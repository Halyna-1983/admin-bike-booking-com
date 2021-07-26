import React, {Component} from 'react';
import shortid from 'shortid';
import './Form.css';


class Form extends Component {
    state = {
        name: '',
        type: '',  
        // color: '',
        // wheelSize: '',
        // price: ''        
      };
      
  nameInputId = shortid.generate();
  typeInputId = shortid.generate();
  colorInputId = shortid.generate();
  wheelSizeInputId = shortid.generate();
  priceInputId = shortid.generate();

handleChange = event => {
    const {name, value} = event.currentTarget

    this.setState({ 
        [name]: value,
        id: shortid.generate(),
    });
};
    
handleSubmit = e => {
  e.preventDefault();
    
    this.props.onSubmit(this.state);

    this.reset();
};

reset = () => {
    this.setState({ name: '', number: '' })
};

render() {
  return (

    <form  className="input-form" onSubmit={this.handleSubmit}>
      <label className="input" htmlFor={this.nameInputId}>
      
        <input 
          type="text" 
          name="name"
          className="label"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.name} 
          onChange={this.handleChange}
          id={this.nameInputId}
          placeholder="Name" />
      </label>

      <label className="input" htmlFor={this.typeInputId}>
     
          <input 
          type="text"
          name="type"
          className="label"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.type} 
          onChange={this.handleChange}
          id={this.typeInputId}
          placeholder="Type"/>
        </label>

        <label className="input" htmlFor={this.colorInputId}>
     
          <input 
          type="text"
          name="color"
          className="label"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.color} 
          onChange={this.handleChange}
          id={this.colorInputId}
          placeholder="Color"/>
        </label>

        <label className="input" htmlFor={this.wheelSizeInputId}>
     
          <input 
          type="number"
          name="wheelSize"
          className="label"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.wheelSize} 
          onChange={this.handleChange}
          id={this.wheelSizeInputId}
          placeholder="WheelSize"/>
        </label>

        <label className="input" htmlFor={this.priceInputId}>
     
          <input 
          type="number"
          name="price"
          className="label"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.price} 
          onChange={this.handleChange}
          id={this.priceInputId}
          placeholder="Price"/>
        </label>
           
      <button type="submit" className="button">Add contact</button>
     
  </form>
        )
    }
}

export default Form;