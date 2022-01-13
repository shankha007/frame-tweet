import { useState } from "react";
import Input from "./components/input";
import Container from "./components/container";
import Utilities from "./components/utilities";

const App = () => {
  const [url, setUrl] = useState("");
  const [tweetId, setTweetId] = useState("");

  const fetchUrl = (url = "") => {
    const id = url.substring(url.indexOf("status/") + 7);
    setTweetId(id);
    setUrl("");
  };

  return (
    <div className="container">
      <Input fetchUrl={fetchUrl} url={url} setUrl={setUrl} />
      <Container tweetId={tweetId} />
      <Utilities />
    </div>
  );
};

export default App;
