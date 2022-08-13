import { request } from 'umi';
const BASEURL = 'http://127.0.0.1:7001';

export function getBooksList() {
  return request(`${BASEURL}/book/all`, {
    method: 'GET',
  });
}

export function addBook(data: any) {
  return request(`${BASEURL}/book/save`, {
    method: 'POST',
    data,
  });
}
export function deleteBook(id: string) {
  return request(`${BASEURL}/book/delete?id=${id}`, {
    method: 'DELETE',
  });
}
