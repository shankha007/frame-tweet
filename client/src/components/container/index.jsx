import { useEffect, useState } from "react";
import axios from "axios";
import FrameBody from "./frame-body";
import FrameHeader from "./frame-header";
import styles from "./index.module.css";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Container = ({ tweetId }) => {
  const [tweetBody, setTweetBody] = useState("");
  const [timeAndDate, setTimeAndDate] = useState("");
  const [replies, setReplies] = useState("");
  const [likes, setLikes] = useState("");
  const [shares, setShares] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [dp, setDp] = useState("");

  tweetId = tweetId || "1481654484409655297";

  const getTweetBody = (obj) =>
    obj
      .replaceAll("&amp;", "&")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .replaceAll("&quot;", '"');

  const getTimeAndDate = (obj) => {
    const dateObj = new Date(obj);
    const date = dateObj.getDate().toString();
    const month = monthNames[dateObj.getMonth()].toString();
    const year = dateObj.getFullYear().toString();
    const hour = dateObj.getHours().toString();
    const minutes = dateObj.getMinutes().toString();
    const dateAndTimeStr =
      hour + ":" + minutes + " " + date + "-" + month + "-" + year;

    return dateAndTimeStr;
  };

  const getPublicMetrics = ({
    retweet_count,
    reply_count,
    like_count,
    quote_count,
  }) => [like_count, reply_count, retweet_count + quote_count];

  const getHeaderData = ({ username, name, profile_image_url }) => [
    username,
    name,
    profile_image_url,
  ];

  useEffect(() => {
    const fetchTweet = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/tweets/${tweetId}`
        );

        const tweetBody = getTweetBody(response.data.data.text);
        const timeAndDate = getTimeAndDate(response.data.data.created_at);
        const [likes, replies, shares] = getPublicMetrics(
          response.data.data.public_metrics
        );
        const [userName, fullName, dp] = getHeaderData(
          response.data.includes.users[0]
        );

        setFullName(fullName);
        setUserName(userName);
        setDp(dp);
        setLikes(likes);
        setReplies(replies);
        setShares(shares);
        setTimeAndDate(timeAndDate);
        setTweetBody(tweetBody);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        } else console.log("Error: " + error);
      }
    };
    fetchTweet();
  }, [tweetId]);

  return (
    <div className={`container ${styles.wrapper}`}>
      <FrameHeader userName={userName} fullName={fullName} dp={dp} />
      <FrameBody
        tweetBody={tweetBody}
        timeAndDate={timeAndDate}
        replies={replies}
        shares={shares}
        likes={likes}
      />
    </div>
  );
};

export default Container;
