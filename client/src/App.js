import { useState } from "react";
import Input from "./components/input";
import Container from "./components/container";
import Utilities from "./components/utilities";

import html2canvas from "html2canvas";

// convert the canvas to image and download the image as a png
const downloadAsImage = () => {
  html2canvas(document.querySelector("#containerBody"), {
    allowTaint: true, // Allow taint to canvas
    useCORS: true, // for cross-origin images
  }).then((canvas) => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "tweet.png";
    a.click();
  });
};

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

  const downloadTweetHandler = () => {
    downloadAsImage();
  };

  return (
    <div className="container">
      <Input fetchUrl={fetchUrl} url={url} setUrl={setUrl} />
      <Container containerId="containerBody" tweetId={tweetId} showResponses={showResponses} showDate={showDate} />
      <Utilities
        setShowResponses={showResponsesHandler}
        setShowDate={showDateHandler}
        downloadTweet={downloadTweetHandler}
      />
    </div>
  );
};

export default App;
