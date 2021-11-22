import { LAYOUTS } from '/@/router/constant';

const setting = {
  path: '/setting',
  name: 'setting',
  component: LAYOUTS,
  redirect: '/setting/account',
  meta: {
    title: '系统管理',
    icon: 'SettingOutlined',
  },
  children: [
    // {
    //   path: 'role',
    //   name: 'setting-role',
    //   component: () => {
    //     return import('/@/views/material/warehouse/index.vue');
    //   },
    //   meta: { title: '角色管理', hideMenu: true },
    // },
    {
      path: 'account',
      name: 'setting-account',
      component: () => {
        return import('/@/views/setting/account/index.vue');
      },
      meta: { title: '账号管理' },
    },
  ],
};

export default setting;
