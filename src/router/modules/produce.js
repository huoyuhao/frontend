import { LAYOUTS } from '/@/router/constant';

const produce = {
  path: '/produce',
  name: 'produce',
  component: LAYOUTS,
  redirect: '/produce/task',
  meta: {
    title: '生产管理',
    icon: 'AimOutlined',
  },
  children: [
    {
      path: '/produce/task',
      name: 'produce-task',
      redirect: '/produce/task/list',
      meta: { title: '工序' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/produce/task/:type',
          name: 'produce-task-type',
          meta: { title: '工序', hideMenu: true },
          component: () => {
            return import('/@/views/produce/task/index.vue');
          },
        },
      ],
    },
    {
      path: '/produce/plan',
      name: 'produce-plan',
      redirect: '/produce/plan/list',
      meta: { title: '计划' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/produce/plan/:type',
          name: 'produce-plan-type',
          meta: { title: '计划', hideMenu: true },
          component: () => {
            return import('/@/views/produce/plan/index.vue');
          },
        },
      ],
    },
  ],
};

export default produce;
