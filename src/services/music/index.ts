import { request } from 'umi';
const BASEURL = 'http://127.0.0.1:7001';
export function getMusicAll() {
  return request(`${BASEURL}/music/all`, {
    method: 'GET',
  });
}
