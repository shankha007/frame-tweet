import styles from "./index.module.css";

const FrameBody = ({ tweetBody, timeAndDate, replies, shares, likes }) => {
  return (
    <div className="row">
      <div className="col">
        <div className={styles.tweetBody}>
          <div className="container">
            <div className="row">
              <p className={styles.content}>{tweetBody}</p>
            </div>
            <div className="row">
              <p className={styles.timeAndDate}>{timeAndDate}</p>
            </div>
            <div className={`row ${styles.responses}`}>
              <div className="col">
                <span className={styles.replyValue}>{replies}</span>
                <br />
                <span className={styles.replies}>replies</span>
              </div>
              <div className="col">
                <span className={styles.shareValue}>{shares}</span>
                <br />
                <span className={styles.shares}>shares</span>
              </div>
              <div className="col">
                <span className={styles.likeValue}>{likes}</span>
                <br />
                <span className={styles.likes}>likes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameBody;
