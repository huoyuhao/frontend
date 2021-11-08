import { LAYOUTS } from '/@/router/constant';

const product = {
  path: '/product',
  name: 'product',
  component: LAYOUTS,
  redirect: '/product/warehouse/data',
  meta: {
    title: '物料管理',
    icon: 'AppstoreOutlined',
  },
  children: [
    {
      path: 'warehouse/:type',
      name: 'product-warehouse',
      meta: { title: '仓库', redirect: '/product/warehouse/data' },
      component: () => {
        return import('/@/views/product/warehouse/index.vue');
      },
    },
    {
      path: 'material/:type',
      name: 'product-material',
      component: () => {
        return import('/@/views/product/material/index.vue');
      },
      meta: { title: '物料', redirect: '/product/material/data' },
    },
    {
      path: 'materialParts/:type',
      name: 'product-materialParts',
      component: () => {
        return import('/@/views/product/materialParts/index.vue');
      },
      meta: { title: '库存管理', redirect: '/product/materialParts/list' },
    },
  ],
};

export default product;
