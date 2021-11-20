import { getToken } from '/@/utils/http/auth';

// eslint-disable-next-line no-duplicate-imports
import { createRouter, createWebHashHistory } from 'vue-router';
import { PageEnum } from '/@/enums/pageEnum';
import { clearPending } from '/@/utils/http/pending';

// const modules = import.meta.globEager('./modules/**/*.js');
// const routeModuleList = [];

// Object.keys(modules).forEach((key) => {
//   const mod = modules[key].default || {};
//   const modList = Array.isArray(mod) ? [...mod] : [mod];
//   routeModuleList.push(...modList);
// });
import material from './modules/material';
import produce from './modules/produce';
import setting from './modules/setting';
export const RootRoute = {
  path: '/',
  name: 'home',
  redirect: PageEnum.BASE_HOME,
  meta: { title: '首页', hideMenu: true },
};

export const LoginRoute = {
  path: '/login',
  name: 'login',
  component: () => {
    return import('/@/views/sys/login.vue');
  },
  meta: { title: '登录', hideMenu: true, ignoreAuth: true },
};

export const ErrorRoute = {
  path: '/404',
  name: '404',
  component: () => {
    return import('/@/views/sys/404.vue');
  },
  meta: { title: '找不到', hideMenu: true, ignoreAuth: true },
};

export const basicRoutes = [LoginRoute, RootRoute, ErrorRoute, material, produce, setting];

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => {
    return { left: 0, top: 0 };
  },
});

router.beforeEach((_to, _from, next) => {
  // 在跳转路由之前，先清除所有的请求
  clearPending();
  const { ignoreAuth } = _to.meta;
  if (ignoreAuth || getToken()) {  // 页面无需校验权限 或者有token)
    next();
  } else {
    next('/login');
  }
});

// config router
export const setupRouter = (app) => {
  app.use(router);
};
