import styles from "./index.module.css";

const Utilities = () => (
  <div className={styles.wrapper}>
    <div className={`row justify-content-center ${styles.innerWrapper}`}>
      <div className="col">
        <button type="button" className={`btn btn-dark ${styles.responsesBtn}`}>
          Responses
        </button>
      </div>
      <div className="col">
        <button type="button" className={`btn btn-dark ${styles.timeBtn}`}>
          Time
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className={`btn btn-primary ${styles.downloadBtn}`}
        >
          Download
        </button>
      </div>
    </div>
  </div>
);

export default Utilities;
