import { Request, Response } from 'express';
export default {
  '/api/auth_routes': {
    '/form/advanced-form': { authority: ['admin', 'user'] },
  },
  'api/menuDataRoute': [
    {
      name: '你好',
      icon: 'table',
      path: '/list',
      component: './TableList',
    },
  ],
};
