import styles from "./index.module.css";

const Input = ({ url, setUrl, fetchUrl }) => {
  const urlChangeHandler = (event) => setUrl(event.target.value);

  const fetchUrlHandler = () => {
    fetchUrl(url);
  };

  return (
    <div className={`row ${styles.searchContainer}`}>
      <div className={`input-group mb-3 ${styles.inputEl}`}>
        <input
          type="text"
          value={url}
          className="form-control"
          id="link"
          placeholder="Paste your link here!"
          aria-label="Tweet's Link"
          aria-describedby="button-addon2"
          onChange={urlChangeHandler}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={fetchUrlHandler}
        >
          Go!
        </button>
      </div>
    </div>
  );
};

export default Input;
