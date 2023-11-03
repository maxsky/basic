import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw[] = [
  {
    path: '/official',
    redirect: '/official/fantastic-startkit',
    component: Layout,
    meta: {
      title: '官方周边',
      icon: 'ion:apps',
    },
    children: [
      {
        path: 'fantastic-startkit',
        redirect: '',
        name: 'officialFantasticStartkit',
        meta: {
          title: 'Fantastic-startkit 项目启动套件',
          link: 'https://hooray.gitee.io/fantastic-startkit/',
        },
      },
      {
        path: 'one-step-admin',
        redirect: '',
        name: 'officialOneStepAdmin',
        meta: {
          title: 'One-step-admin 干啥都快人一步的中后台框架',
          link: 'https://one-step-admin.gitee.io',
        },
      },
    ],
  },
  {
    path: '/cooperation',
    redirect: '/cooperation/vform',
    component: Layout,
    meta: {
      title: '战略合作',
      icon: 'ic:outline-handshake',
    },
    children: [
      {
        path: 'vform',
        redirect: '',
        name: 'cooperationVform',
        meta: {
          title: 'VForm 低代码表单',
          link: 'https://www.vform666.com',
        },
      },
      {
        path: 'quickadmin',
        redirect: '',
        name: 'cooperationQuickadmin',
        meta: {
          title: 'QuickAdmin 快速开发管理框架',
          link: 'https://gitee.com/sciqtw/quickadmin',
        },
      },
    ],
  },
]

export default routes