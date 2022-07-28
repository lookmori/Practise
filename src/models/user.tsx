import { Tmock } from '@/services/ant-design-pro/api';
export default {
  namespace: 'user',
  state: {
    users: [],
    count: 0,
  },
  effects: {
    *getUser({ payload }, { call, put, select }) {
      const { list } = yield call(Tmock);
      let a = yield select((state) => state.user.count);
      console.log(a, 'a value');

      yield put({ type: 'logData', payload: { list } });
    },
  },
  reducers: {
    logData(state, action) {
      console.log(action, 'actions');

      return {
        ...state,
        users: [...action.payload.list],
      };
    },
  },
};
