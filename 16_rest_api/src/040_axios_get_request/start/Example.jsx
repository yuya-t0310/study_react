import { useEffect } from "react";
import axios from "axios";

// axiosでリクエストを送信
const Example = () => {
  useEffect(() => {
    axios.get("http://127.0.0.1:3003/user").then((res) => {
      console.log(res.data);
    });
  });
};

export default Example;
