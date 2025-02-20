
import axios from 'axios';

const ENDPOINT_URL = 'http://127.0.0.1:3003/todo';

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    console.log(result);
    return result.data;
  },
  async post(todo) {
    // todoがjson文字列に変換されてサーバーにリクエストされる
    const result = await axios.post(ENDPOINT_URL, todo);
    return result.data;
  },
  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + '/' + todo.id);
    return result.data;
  },
  async patch(todo) {
    const result = await axios.put(ENDPOINT_URL + '/' + todo.id, todo);
    return result.data;
  },
}

// todoApi.getAll();
// todoApi.patch({
//   id: "34324321",
//   content: 'updated!'
// });

export default todoApi;
