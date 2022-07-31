import { getMusicAll } from '@/services/music';

export default {
  namespace: 'music',
  state: {
    list: [],
  },
  effects: {
    *getMusicList({ payload }: any, { call, put }: any): any {
      const { data } = yield call(getMusicAll, { payload });
      yield put({ type: 'save', payload: { data } });
    },
  },
  reducers: {
    save(state: any, action: any) {
      return {
        ...state,
        list: [action.payload.data],
      };
    },
  },
};
