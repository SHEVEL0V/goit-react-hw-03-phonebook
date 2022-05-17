import PropTypes from 'prop-types';
import s from './filter.module.css';

export default function Filter({ onChange, value }) {
  return (
    <div className={s.thamb}>
      <label>
        <p className={s.text}>Find contacts by name:</p>
        <input
          className={s.input}
          tyte="text"
          name="filter"
          value={value}
          onChange={e => {
            onChange(e.target.value);
          }}
        ></input>
      </label>
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
