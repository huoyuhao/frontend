import { LAYOUTS } from '/@/router/constant';

const produce = {
  path: '/produce',
  name: 'produce',
  component: LAYOUTS,
  redirect: '/produce/process',
  meta: {
    title: '生产管理',
    icon: 'OrderedListOutlined',
  },
  children: [
    {
      path: '/produce/process',
      name: 'produce-process',
      redirect: '/produce/process/data',
      meta: { title: '标准工序' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/produce/process/:type',
          name: 'produce-process-type',
          meta: { hideMenu: true },
          component: () => {
            return import('/@/views/produce/process/index.vue');
          },
        },
      ],
    },
    {
      path: '/produce/task/',
      name: 'produce-task',
      redirect: '/produce/task/data',
      meta: { title: '生产计划' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/produce/task/:type',
          name: 'produce-task-type',
          component: () => {
            return import('/@/views/produce/task/index.vue');
          },
          meta: { hideMenu: true },
        },
        {
          path: '/produce/task/detail',
          name: 'produce-task-detail',
          redirect: '/produce/task/detail/detail',
          meta: { hideMenu: true },
          component: { template: '<router-view />' },
          children: [
            {
              path: '/produce/task/detail/:type',
              name: 'produce-task-detail-type',
              component: () => {
                return import('/@/views/produce/task/detail/index.vue');
              },
              meta: { title: '生产计划详情', hideMenu: true },
            },
          ],
        },
      ],
    },
  ],
};

export default produce;
