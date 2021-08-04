import React, {Component} from 'react';
import shortid from 'shortid';
import './Form.css';


class Form extends Component {
    state = {
        name: '',
        type: '',  
        bikeType: '',
        // color: '',
        // wheelSize: '',
        // price: ''        
      };
      
  nameInputId = shortid.generate();
  typeInputId = shortid.generate();
  colorInputId = shortid.generate();
  wheelSizeInputId = shortid.generate();
  priceInputId = shortid.generate();
  idInputId = shortid.generate();
  descriptionInputId = shortid.generate();
  statusInputId = shortid.generate();

handleChange = event => {
    const {name, value} = event.currentTarget

    this.setState({ 
        [name]: value,
        id: shortid.generate(),
        bikeType: value,
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
          minlength="5" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.name} 
          onChange={this.handleChange}
          id={this.nameInputId}
          placeholder="Name" />
      </label>

      <label className="input" htmlFor={this.typeInputId}>
          <select className="label" type={this.state.type}  id={this.typeInputId} onChange={this.handleChange}>
            <option value="road">road</option>
            <option value="mountain">mountain</option>
            <option value="adventure">adventure</option>
            <option value="hybrid">hybrid</option>
          </select>
        </label>

        <label className="input" htmlFor={this.colorInputId}>
        {/* <select className="label" type={this.state.type} id={this.colorInputId} onChange={this.handleChange}>
            <option value="green">green</option>
            <option value="red">red</option>
            <option value="black">black</option>
        </select> */}
          <input 
          type="text"
          name="color"
          className="label"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.color} 
          onChange={this.handleChange}
          id={this.colorInputId}
          placeholder="Color"/>
        </label>

        <label className="input" htmlFor={this.wheelSizeInputId}>
        <select className="label" type={this.state.type} id={this.wheelSizeInputId} onChange={this.handleChange}>
            <option value="24">24</option>
            <option value="26">26</option>
            <option value="28">28</option>
        </select>
          {/* <input 
          type="num"
          name="wheelSize"
          className="label"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.wheelSize} 
          onChange={this.handleChange}
          id={this.wheelSizeInputId}
          placeholder="WheelSize"/> */}
        </label>

        <label className="input" htmlFor={this.priceInputId}>
        {/* <select className="label" type={this.state.type} id={this.priceInputId} onChange={this.handleChange}>
            <option value="300">300</option>
            <option value="550">550</option>
            <option value="770">770</option>
        </select> */}
          <input 
          type="num"
          name="price"
          className="label"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.price} 
          onChange={this.handleChange}
          id={this.priceInputId}
          placeholder="Price"/>
        </label>

        <label className="input" htmlFor={this.idInputId}>
     
          <input 
          type="num"
          name="id"
          className="label"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.id} 
          onChange={this.handleChange}
          id={this.idInputId}
          placeholder="ID"/>
        </label>

        <label className="input-description" htmlFor={this.descriptionInputId}>
     
          <input 
          type="text"
          name="description"
          className="label-description"
          minlength="5" 
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.description} 
          onChange={this.handleChange}
          id={this.descriptionInputId}
          placeholder="Description"/>
        </label>
           
      <button type="submit" className="button">SAVE</button>
      <button type="submit" className="button">CLEAR</button>
     
  </form>
        )
    }
}

export default Form;