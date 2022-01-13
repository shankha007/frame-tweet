import axios from "axios";

const token =
  "AAAAAAAAAAAAAAAAAAAAAN%2FrTwEAAAAAiNdiHy38D2wQVDtjmm%2FtqpCq8os%3Df0xdoxTFWi848gAFvGnVaJfEwfKcJ5bRjc4TqigCqGY9QrMMhW";

const tweeterClient = axios.create({
  baseURL: "https://api.twitter.com/2/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default tweeterClient;
