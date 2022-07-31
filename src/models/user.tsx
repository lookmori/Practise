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
