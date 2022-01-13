import express from "express";
import tweeterClient from "./axios.config.js";
import cors from "cors";

// whitelist the domains that are allowed to make requests : This is cors policy in simple words
var corsOptions = {
  origin: ["http://localhost:3001","http://localhost:3000"]
};

const app = express();

// use cors as middleware , it means every request will be allowed from the above domains
app.use(cors(corsOptions));

// express js api that gets the tweet from tweeter and returns the tweet to the client
app.get("/api/tweets/:id", async (req, res) => {
  try {
    // get the tweet id from params
    const tweetId = req.params.id;

    // make the request to the tweeter api
    const response = await tweeterClient.get(`/tweets/${tweetId}`, {
      // add the params here
      params: {
        expansions: "author_id",
      },
    });

    // send the response to the client
    return res.status(200).json(response.data);
  } catch (error) {
    // send the error to the client if there is an error
    if (error.response) {
      console.log(error.response.data);
    } else console.log("Error: " + error);
    return res.status(400).json({ error: error.response.data });
  }
});

// start the server on port 8000
app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
