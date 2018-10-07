
export default {
  // 命名空间
  namespace: 'index',

  // 数据存放
  state: {
  },

  // 订阅功能
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步改变
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log('payload...', payload);
      // 拉取数据
      let data = yield fetch('/data.json').then(res=>res.json()).then(body=>body);
      console.log('data...', data);
      yield put({ type: 'save' , payload: data});
    },
  },

  // 同步改变
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
