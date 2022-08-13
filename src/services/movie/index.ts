import { request } from 'umi';
const BASEURL = 'http://127.0.0.1:7001';
export function getMovieAll() {
  return request(`${BASEURL}/movie/all`, {
    method: 'GET',
  });
}

export function addMovie(data: any) {
  return request(`${BASEURL}/movie/add`, {
    method: 'POST',
    data,
  });
}

export function delMovie(id: number) {
  return request(`${BASEURL}/movie/delete?id=${id}`, {
    method: 'DELETE',
  });
}
