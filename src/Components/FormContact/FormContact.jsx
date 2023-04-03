import { useState } from 'react';
import shortid from 'shortid';
import style from './FormContact.module.css';

const FormContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = e => {
    setName(e.currentTarget.value);
  };

  const onChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(name, number);

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor={shortid.generate()}>
        Имя
        <input
          className={style.input}
          id={shortid.generate()}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeName}
        />
      </label>

      <label className={style.label} htmlFor={shortid.generate()}>
        Телефон
        <input
          className={style.input}
          id={shortid.generate()}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeNumber}
        />
      </label>
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default FormContact;
