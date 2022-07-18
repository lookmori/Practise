import Tdata from '../../mock/user';
export default {
  namespace: 'user',
  state: 0,
  effects: {
    *getUser({ payload }, { call, put }) {
      const list = yield call(Tdata);
      console.log(list, 'list');

      yield put({ type: 'logData' });
      yield put({ tyep: 'add' });
    },
  },
  reducers: {
    logData(state, { payload }) {
      return {
        ...state,
        user: 'world',
      };
    },
    add(state) {
      return state + 1;
    },
  },
};
