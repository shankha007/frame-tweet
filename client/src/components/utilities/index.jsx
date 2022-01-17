import styles from "./index.module.css";

const Utilities = ({ setShowResponses, setShowDate, downloadTweet }) => (
  <div className={styles.wrapper}>
    <div className={`row justify-content-center ${styles.innerWrapper}`}>
      <div className="col">
        <button
          type="button"
          className={`btn btn-dark ${styles.responsesBtn}`}
          onClick={setShowResponses}
        >
          Responses
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className={`btn btn-dark ${styles.timeBtn}`}
          onClick={setShowDate}
        >
          Time
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className={`btn btn-primary ${styles.downloadBtn}`}
          onClick={downloadTweet}
        >
          Download
        </button>
      </div>
    </div>
  </div>
);

export default Utilities;
