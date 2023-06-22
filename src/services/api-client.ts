import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b4e71ec132f047af819b1ee886cdd98e",
  },
});
