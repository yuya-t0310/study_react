// POINT axiosでGetリクエスト
// https://axios-http.com/

import { useEffect } from "react";
import axios from "axios";

// axiosでリクエストを送信
const Example = () => {
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("http://127.0.0.1:3003/user");
      console.log(res.data);
    };
    getUser();
  });
};

export default Example;
