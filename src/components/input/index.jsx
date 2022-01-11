import styles from "./index.module.css";

const Input = () => {
  return (
    <div className={`row ${styles.searchContainer}`}>
      <div className={`input-group mb-3 ${styles.inputEl}`}>
        <input
          type="text"
          className="form-control"
          id="link"
          placeholder="Paste your link here!"
          aria-label="Tweet's Link"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-primary" type="button" id="button-addon2">
          Go!
        </button>
      </div>
    </div>
  );
};

export default Input;
