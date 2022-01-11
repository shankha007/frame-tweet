import FrameBody from "./frame-body";
import FrameHeader from "./frame-header";
import styles from "./index.module.css";

const Container = () => (
  <div className={`container ${styles.wrapper}`}>
    <FrameHeader />
    <FrameBody />
  </div>
);

export default Container;
