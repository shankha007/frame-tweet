import { useState } from "react";
import Input from "./components/input";
import Container from "./components/container";
import Utilities from "./components/utilities";

const App = () => {
  const [url, setUrl] = useState("");
  const [tweetId, setTweetId] = useState("1459826422348849155");
  const [showResponses, setShowResponses] = useState(true);
  const [showDate, setShowDate] = useState(true);

  const fetchUrl = (url = "") => {
    const id = url.substring(url.indexOf("status/") + 7);
    setTweetId(id);
    setUrl("");
  };

  const showResponsesHandler = () => setShowResponses(!showResponses);

  const showDateHandler = () => setShowDate(!showDate);

  const downloadTweetHandler = () => {};

  return (
    <div className="container">
      <Input fetchUrl={fetchUrl} url={url} setUrl={setUrl} />
      <Container
        containerId="containerBody"
        tweetId={tweetId}
        showResponses={showResponses}
        showDate={showDate}
      />
      <Utilities
        setShowResponses={showResponsesHandler}
        setShowDate={showDateHandler}
        downloadTweet={downloadTweetHandler}
      />
    </div>
  );
};

export default App;
