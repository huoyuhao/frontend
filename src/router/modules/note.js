import { LAYOUTS } from '/@/router/constant';

const note = {
  path: '/note',
  name: 'note',
  component: LAYOUTS,
  redirect: '/note/data',
  meta: {
    title: '单据管理',
    icon: 'OrderedListOutlined',
  },
  children: [
    {
      path: '/note/data',
      name: 'note-data',
      redirect: '/note/data/data',
      meta: { title: '单据列表' },
      component: { template: '<router-view />' },
      children: [
        {
          path: '/note/data/:type',
          name: 'note-data-type',
          meta: { hideMenu: true },
          component: () => {
            return import('/@/views/note/index.vue');
          },
        },
      ],
    },
  ],
};

export default note;
