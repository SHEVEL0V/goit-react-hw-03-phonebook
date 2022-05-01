import s from "./filter.module.css";

export default function Filter({ onInputFilter }) {
  return (
    <div className={s.thamb}>
      <label>
        <p className={s.text}>Find contacts by name:</p>
        <input
          className={s.input}
          tyte="text"
          name="filter"
          onChange={(e) => {
            onInputFilter(e.target.value);
          }}
        ></input>
      </label>
    </div>
  );
}
