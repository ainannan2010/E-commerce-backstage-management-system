const list = [
  {
    id: 100,
    authName: '用户管理',
    path: 'users',
    children: [
      {
        id: 108,
        authName: '用户列表',
        path: 'users',
      }
    ],
    order: '1'
  },
  {
    id: 103,
    authName: '权限管理',
    path: 'rights',
    children: [
      {
        id: 109,
        authName: ' 角色列表',
        path: 'rights',
      },
      {
        id: 110,
        authName: '权限列表',
        path: 'roles',
      },
    ],
    order: '2'
  },
  {
    id: 101,
    authName: '商品管理',
    path: 'goods',
    children: [
      {
        id: 104,
        authName: '商品列表',
        path: 'goods',
      },
      {
        id: 119,
        authName: '分类参数',
        path: 'goods',
      },
      {
        id: 124,
        authName: '商品分类',
        path: 'goods',
      },
    ],
    order: '3'
  },
  {
    id: 102,
    authName: '订单管理',
    path: 'orders',
    children: [
      {
        id: 106,
        authName: '订单列表',
        path: 'orders',
      },
    ],
    order: '4'
  },
  {
    id: 145,
    authName: '数据统计',
    path: 'reports',
    children: [
      {
        id: 146,
        authName: '数据列表',
        path: 'reports',
      },
    ],
    order: '5'
  },
]

export default list
