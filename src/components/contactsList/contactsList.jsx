import PropTypes from 'prop-types';
import s from './contactsList.module.css';

export default function ContactsList({ contacts, removeContacs }) {
  return (
    <div>
      <h2>Contacts:</h2>
      <ul>
        {contacts.map((el, inx) => {
          const numbering = inx + 1;
          const { id, name, number } = el;
          return (
            <li key={id} className={s.item}>
              <span className={s.number}>{numbering}</span>
              <span>
                <b className={s.text}>name:</b> {name}{' '}
              </span>
              <span>
                <b className={s.text}>tel:</b>
                {number}
              </span>
              <button
                className={s.button}
                type="button"
                onClick={() => {
                  removeContacs(id);
                }}
              >
                <span className={s.unicode}></span>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ContactsList.propTypes = {
  removeContacs: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
