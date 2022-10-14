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
    path: '/musics',
    name: '音乐',
    icon: 'icon-music1',
    component: './music',
  },
  {
    path: '/movies',
    name: '电影',
    icon: 'icon-movie',
    component: './movie',
  },
  {
    path: '/books',
    name: '书籍',
    icon: 'icon-book',
    component: './book',
  },
  {
    path: '/canvas',
    name: '签字板',
    icon: 'icon-book',
    component: './canvas',
  },
  {
    path: '/',
    redirect: '/musics',
  },
  {
    component: './404',
  },
];
