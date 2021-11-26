import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID qroBENBvqwHJ_7a1qqethbSXs8HTzCHeWPX8_o4g_40",
  }
});