// Redux Middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('変更前', action, store.getState())
      // 全てのdispatchで行われる処理
      // storeはaction前の状態
      // （store.getState()でステートを取得）
      next(action);
      console.log('変更後', action, store.getState())
      // storeはaction後の状態
    };
  }
}

export default logger;