import { Component } from "react";
import shortid from "shortid";
import style from "./FormContact.module.css";

class FormContact extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { value, name } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { name, number } = this.state;
    event.preventDefault();

    this.props.onSubmit(name, number);
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label className={style.label} htmlFor={shortid.generate()}>
          Имя
          <input
            className={style.input}
            id={shortid.generate()}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>

        <label className={style.label} htmlFor={shortid.generate()}>
          Телефон
          <input
            className={style.input}
            id={shortid.generate()}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default FormContact;
