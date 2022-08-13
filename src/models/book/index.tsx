import { addBook, deleteBook, getBooksList } from '@/services/book';

export default {
  namespace: 'book',
  state: {
    books: [],
  },
  effects: {
    *getBookList({ payload }: any, { call, put }: any): any {
      const { data } = yield call(getBooksList, {
        payload,
      });
      yield put({ type: 'save', payload: { data } });
    },
    *addBookOne({ payload }: any, { call, put }: any): any {
      const { data } = yield call(addBook, payload);
      yield put({ type: 'save', payload: { data } });
    },
    *deleteBookOne({ payload }: any, { call, put }: any): any {
      const { data } = yield call(deleteBook, {
        payload,
      });
      yield put({ type: 'save', payload: { data } });
    },
  },
  reducers: {
    save(state: any, action: any) {
      return {
        ...state,
        books: [...action.payload.data],
      };
    },
  },
};
