import { useEffect } from "react";
// import axios from "axios";
import styles from "./index.module.css";

const FrameBody = ({ tweetId }) => {
  // const token =
  //   "AAAAAAAAAAAAAAAAAAAAAN%2FrTwEAAAAAiNdiHy38D2wQVDtjmm%2FtqpCq8os%3Df0xdoxTFWi848gAFvGnVaJfEwfKcJ5bRjc4TqigCqGY9QrMMhW";

  useEffect(() => {
    // const endpointURL = "https://api.twitter.com/2/tweets/" + tweetId;
    // console.log(endpointURL);
    // const fetchTweet = async () => {
    //   const params = {
    //     "tweet.fields":
    //       "attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,reply_settings,source,text,withheld",
    //     expansions:
    //       "created_atattachments.poll_ids,attachments.media_keys,author_id,geo.place_id,in_reply_to_user_id,referenced_tweets.id,entities.mentions.username,referenced_tweets.id.author_id",
    //   };
    //   try {
    //     const response = await axios.get(endpointURL, {
    //       params,
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //         "Access-Control-Allow-Origin": "*",
    //       },
    //     });
    //     console.log(response);
    //   } catch (e) {
    //     console.log("Error: " + e);
    //   }
    // };
    // if (tweetId !== "") fetchTweet();
    console.log(tweetId);
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
