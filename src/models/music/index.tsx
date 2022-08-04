import { deleteMusic, findMusic, getMusicAll, saveMusic, updateMusic } from '@/services/music';

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
    *findMusicOne({ payload }: any, { call, put }: any): any {
      const { data } = yield call(findMusic, { payload });
      yield put({ type: 'save', payload: { data } });
    },
    *saveMusic({ payload }: any, { call, put }: any): any {
      const { data } = yield call(saveMusic, payload);
      yield put({ type: 'save', payload: { data } });
    },
    *deleteMusic({ payload }: any, { call, put }: any): any {
      console.log(payload, 'payload');

      const { data } = yield call(deleteMusic, payload);
      yield put({ type: 'save', payload: { data } });
    },
    *updateMusic({ payload }: any, { call, put }: any): any {
      console.log(payload);
      const { data } = yield call(updateMusic, payload);
      yield put({ type: 'save', payload: { data } });
    },
  },
  reducers: {
    save(state: any, action: any) {
      return {
        ...state,
        list: [...action.payload.data],
      };
    },
  },
};
