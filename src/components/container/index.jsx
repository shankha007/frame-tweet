import FrameBody from "./frame-body";
import FrameHeader from "./frame-header";
import styles from "./index.module.css";

const Container = ({ tweetId }) => (
  <div className={`container ${styles.wrapper}`}>
    <FrameHeader />
    <FrameBody tweetId={tweetId} />
  </div>
);

export default Container;
