// 新規ターミナルで npm run json-server を実行し、jsonサーバを起動すること

import GetUserData from "./components/GetUserData";

export const ENDPOINT_URL = "http://localhost:4030/users/1";

const Example = () => {
  return (
    <>
      <GetUserData url={ENDPOINT_URL} />
    </>
  );
};

export default Example;
