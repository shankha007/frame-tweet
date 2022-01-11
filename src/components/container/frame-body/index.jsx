import styles from "./index.module.css";

const FrameBody = () => (
  <div className="row">
    <div className="col">
      <div className={styles.tweetBody}>
        <div className="container">
          <div className="row">
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              velit sapien, sollicitudin vitae erat non, gravida sagittis ipsum.
              Suspendisse potenti. Fusce nulla nunc, egestas ac ante at, cursus
              rhoncus libero. Quisque porttitor porta quam. Morbi id mollis
              lorem est.
            </p>
          </div>
          <div className="row">
            <p className={styles.timeAndDate}>2:17 PM 24-Oct-2021</p>
          </div>
          <div className={`row ${styles.responses}`}>
            <div className="col">
              <span className={styles.replyValue}>4648</span>
              <br />
              <span className={styles.replies}>replies</span>
            </div>
            <div className="col">
              <span className={styles.shareValue}>199</span>
              <br />
              <span className={styles.shares}>shares</span>
            </div>
            <div className="col">
              <span className={styles.likeValue}>9601</span>
              <br />
              <span className={styles.likes}>likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FrameBody;
