import { LAYOUTS } from '/@/router/constant';

const material = {
  path: '/material',
  name: 'material',
  component: LAYOUTS,
  redirect: '/material/warehouse',
  meta: {
    title: '物料管理',
    icon: 'AppstoreOutlined',
  },
  children: [
    {
      path: '/material/warehouse',
      name: 'material-warehouse',
      redirect: '/material/warehouse/data',
      meta: { title: '仓库' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/material/warehouse/:type',
          name: 'material-warehouse-type',
          meta: { hideMenu: true },
          component: () => {
            return import('/@/views/material/warehouse/index.vue');
          },
        },
      ],
    },
    {
      path: '/material/material/',
      name: 'material-material',
      redirect: '/material/material/data',
      meta: { title: '物料' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/material/material/:type',
          name: 'material-material-type',
          component: () => {
            return import('/@/views/material/material/index.vue');
          },
          meta: { hideMenu: true },
        },
        {
          path: '/material/material/detail',
          name: 'material-material-detail',
          redirect: '/material/material/detail/list',
          meta: { hideMenu: true },
          component: { template: '<router-view />' },
          children: [
            {
              path: '/material/material/detail/:type',
              name: 'material-material-detail-type',
              component: () => {
                return import('/@/views/material/material/detail/index.vue');
              },
              meta: { title: '物料详情', hideMenu: true },
            },
          ],
        },
      ],
    },
    {
      path: '/material/stock',
      name: 'material-stock',
      redirect: '/material/stock/entryFactory',
      meta: { title: '库存' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/material/stock/:type',
          name: 'material-stock-type',
          meta: { hideMenu: true },
          component: () => {
            return import('/@/views/material/stock/index.vue');
          },
        },
      ],
    },
  ],
};

export default material;
