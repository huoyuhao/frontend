import { LAYOUTS } from '/@/router/constant';

const product = {
  path: '/product',
  name: 'product',
  component: LAYOUTS,
  redirect: '/product/warehouse',
  meta: {
    title: '物料管理',
    icon: 'AppstoreOutlined',
  },
  children: [
    {
      path: '/product/warehouse',
      name: 'product-warehouse',
      redirect: '/product/warehouse/data',
      meta: { title: '仓库' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/product/warehouse/:type',
          name: 'product-warehouse-type',
          meta: { title: '仓库', hideMenu: true },
          component: () => {
            return import('/@/views/product/warehouse/index.vue');
          },
        },
      ],
    },
    {
      path: '/product/material/',
      name: 'product-material',
      redirect: '/product/material/data',
      meta: { title: '物料' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/product/material/:type',
          name: 'product-material-type',
          component: () => {
            return import('/@/views/product/material/index.vue');
          },
          meta: { title: '物料', hideMenu: true },
        },
        {
          path: '/product/material/detail',
          name: 'product-material-detail',
          component: () => {
            return import('/@/views/product/material/detail.vue');
          },
          meta: { title: '物料', hideMenu: true },
        },
      ],
    },
    {
      path: '/product/stock',
      name: 'product-stock',
      redirect: '/product/stock/bom',
      meta: { title: '仓库' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/product/stock/:type',
          name: 'product-stock-type',
          meta: { title: '库存', hideMenu: true },
          component: () => {
            return import('/@/views/product/stock/index.vue');
          },
        },
      ],
    },
  ],
};

export default product;
