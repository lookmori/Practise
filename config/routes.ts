export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/music',
    name: '音乐',
    icon: 'smile',
    component: './music',
  },
  {
    path: '/movie',
    name: '电影',
    icon: 'smile',
    component: './movie',
  },
  {
    path: '/',
    redirect: '/music',
  },
  {
    component: './404',
  },
];
