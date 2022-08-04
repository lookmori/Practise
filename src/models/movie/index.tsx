import { getMovieAll } from '@/services/movie';

export default {
  namespace: 'movie',
  state: {
    movie: [],
  },
  effects: {
    *getMusicList({ payload }: any, { call, put }: any): any {
      const { data } = yield call(getMovieAll, { payload });
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
