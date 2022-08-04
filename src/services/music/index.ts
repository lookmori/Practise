import { request } from 'umi';
const BASEURL = 'http://127.0.0.1:7001';
export function getMusicAll() {
  return request(`${BASEURL}/music/all`, {
    method: 'GET',
  });
}

export function findMusic(data: string) {
  return request(`${BASEURL}/music/find?params=${data}`, {
    method: 'GET',
  });
}

export function saveMusic(data: any) {
  return request(`${BASEURL}/music/save`, {
    method: 'POST',
    data,
  });
}

export function deleteMusic(id: number) {
  return request(`${BASEURL}/music/delete?id=${id}`, {
    method: 'DELETE',
  });
}
export function updateMusic(data: any) {
  return request(`${BASEURL}/music/update`, {
    method: 'POST',
    data,
  });
}
