import styles from "./index.module.css";

const FrameHeader = ({ userName, fullName, dp }) => {
  return (
    <div className="row">
      <div className="col col-lg-2">
        <div className={styles.dp}>
          <img src={dp} alt="Profile Pic" />
        </div>
      </div>
      <div className="col col-lg-6">
        <div className="row">
          <div className={styles.name}>
            <h1>{fullName}</h1>
          </div>
        </div>
        <div className="row">
          <div className={styles.handle}>
            <h5>@{userName}</h5>
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
