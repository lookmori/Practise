import mockjs from 'mockjs';
export default {
  'GET /music/all': mockjs.mock({
    'data|23': [{ name: '@city', author: '@cname', date: '@date' }],
  }),
};
