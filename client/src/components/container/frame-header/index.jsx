import styles from "./index.module.css";

const FrameHeader = () => {
  return (
    <div className="row">
      <div className="col col-lg-2">
        <div className={styles.dp}>
          <img src="Alberto_conversi_profile_pic.jpg" alt="Profile Pic" />
        </div>
      </div>
      <div className="col col-lg-6">
        <div className="row">
          <div className={styles.name}>
            <h1>John Doe</h1>
          </div>
        </div>
        <div className="row">
          <div className={styles.handle}>
            <h5>@JohnDoe05</h5>
          </div>
        </div>
      </div>
      <div className="col col-lg-2"></div>
      <div className="col col-lg-2">
        <img
          src="twitter-bird.png"
          alt="Twitter Icon"
          className={styles.twitterIcon}
        />
      </div>
    </div>
  );
};

export default FrameHeader;
