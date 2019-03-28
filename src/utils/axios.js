import axios from "axios";

const instance = axios.create({
  baseURL: `http://${process.env.HOST || "localhost"}:${process.env.PORT ||
    3000}`,
  timeout: 20000,
  withCredentials: true,
  transformResponse(res) {
    res = JSON.parse(res);
    if (res.code === 0) {
      return res.data;
    } else {
      return {
        code: -1,
        msg: res.msg
      };
    }
  }
});
export default instance;
