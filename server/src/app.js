import express from "express";
import tweeterClient from "./axios.config.js";
import cors from "cors";

var corsOptions = {
  origin: ["http://localhost:3001", "http://localhost:3000"],
};

const app = express();

app.use(cors(corsOptions));

app.get("/api/tweets/:id", async (req, res) => {
  try {
    const tweetId = req.params.id;
    const response = await tweeterClient.get(`/tweets/${tweetId}`, {
      params: {
        "tweet.fields":
          "attachments,created_at,entities,public_metrics,referenced_tweets,text",
        expansions: "referenced_tweets.id.author_id,attachments.media_keys",
        "user.fields": "profile_image_url",
      },
    });

    return res.status(200).json(response.data);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else console.log("Error: " + error);

    return res.status(400).json({ error: error.response.data });
  }
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
