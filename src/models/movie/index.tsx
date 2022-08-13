import { addMovie, delMovie, getMovieAll } from '@/services/movie';

export default {
  namespace: 'movie',
  state: {
    movie: [],
  },
  effects: {
    *getMovieList({ payload }: any, { call, put }: any): any {
      const { data } = yield call(getMovieAll, { payload });
      yield put({ type: 'save', payload: { data } });
    },
    *saveMovies({ payload }: any, { call, put }: any): any {
      const { data } = yield call(addMovie, payload);
      yield put({ type: 'save', payload: { data } });
    },
    *deleteMovie({ payload }: any, { call, put }: any): any {
      const { data } = yield call(delMovie, payload);
      yield put({ type: 'save', payload: { data } });
    },
  },
  reducers: {
    save(state: any, action: any) {
      return {
        ...state,
        movie: [...action.payload.data],
      };
    },
  },
};
