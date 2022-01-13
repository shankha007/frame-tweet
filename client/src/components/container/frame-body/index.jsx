import { useEffect } from "react";
 import axios from "axios";
import styles from "./index.module.css";

const FrameBody = ({ tweetId }) => {
  // tweetId is always null , I don;t know how you are planning to pass the tweetId from the parent component
  tweetId = tweetId || "1481654484409655297"

  useEffect(() => {
  
    const fetchTweet = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/tweets/${tweetId}`)
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        } else console.log("Error: " + error);
      }
    };
     fetchTweet();
    console.log({tweetId});
  }, [tweetId]);

  return (
    <div className="row">
      <div className="col">
        <div className={styles.tweetBody}>
          <div className="container">
            <div className="row">
              <p className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                velit sapien, sollicitudin vitae erat non, gravida sagittis
                ipsum. Suspendisse potenti. Fusce nulla nunc, egestas ac ante
                at, cursus rhoncus libero. Quisque porttitor porta quam. Morbi
                id mollis lorem est.
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
};

export default FrameBody;
