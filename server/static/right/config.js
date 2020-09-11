const rightConfig = [
  {
    authName: '用户管理',
    id: 100,
    level: '0',
    path: 'users'
  },
  {
    authName: '商品管理',
    id: 101,
    level: '0',
    path: 'goods'
  },
  {
    authName: '订单管理',
    id: 102,
    level: '0',
    path: 'orders'
  },
  {
    authName: '权限管理',
    id: 103,
    level: '0',
    path: 'rights'
  },
  {
    authName: '商品列表',
    id: 104,
    level: '1',
    path: 'goods',
    parentId: 101
  },
  {
    authName: '添加商品',
    id: 105,
    level: '2',
    path: 'goods',
    parentId: 104
  },
  {
    authName: '订单列表',
    id: 106,
    level: '1',
    path: 'orders',
    parentId: 102
  },
  {
    authName: '添加订单',
    id: 107,
    level: '2',
    path: 'orders',
    parentId: 106
  },
  {
    authName: '用户列表',
    id: 108,
    level: '1',
    path: 'users',
    parentId: 100
  },
  {
    authName: '角色列表',
    id: 109,
    level: '1',
    path: 'rights',
    parentId: 103
  },
  {
    authName: '权限列表',
    id: 110,
    level: '1',
    path: 'rights',
    parentId: 103
  },
  {
    authName: '添加用户',
    id: 111,
    level: '2',
    path: 'users',
    parentId: 108
  },
  {
    authName: '删除用户',
    id: 112,
    level: '2',
    path: 'users',
    parentId: 108
  },
  {
    authName: '商品修改',
    id: 113,
    level: '2',
    path: 'goods',
    parentId: 104
  },
  {
    authName: '商品删除',
    id: 114,
    level: '2',
    path: 'goods',
    parentId: 104
  },
  {
    authName: '更新商品图片',
    id: 115,
    level: '2',
    path: 'goods',
    parentId: 104
  },
  {
    authName: '更新商品属性',
    id: 116,
    level: '2',
    path: 'goods',
    parentId: 104
  },
  {
    authName: '更新商品属性',
    id: 117,
    level: '2',
    path: 'goods',
    parentId: 104
  },
  {
    authName: '获取商品详情',
    id: 118,
    level: '2',
    path: 'goods',
    parentId: 104
  },

  {
    authName: '分类参数',
    id: 119,
    level: '1',
    path: 'goods',
    parentId: 101
  },

  {
    authName: '获取参数列表',
    id: 120,
    level: '2',
    path: 'goods',
    parentId: 119
  },
  {
    authName: '创建商品参数',
    id: 121,
    level: '2',
    path: 'goods',
    parentId: 119
  },
  {
    authName: '删除商品参数',
    id: 122,
    level: '2',
    path: 'goods',
    parentId: 119
  },
  {
    authName: '更新分类参数',
    id: 123,
    level: '2',
    path: 'goods',
    parentId: 119
  },
  {
    authName: '商品分类',
    id: 124,
    level: '1',
    path: 'goods',
    parentId: 101
  },

  {
    authName: '添加分类',
    id: 125,
    level: '2',
    path: 'goods',
    parentId: 124
  },
  {
    authName: '删除分类',
    id: 126,
    level: '2',
    path: 'goods',
    parentId: 124
  },
  {
    authName: '修改分类',
    id: 127,
    level: '2',
    path: 'goods',
    parentId: 124
  },
  {
    authName: '获取分类详情',
    id: 128,
    level: '2',
    path: 'goods',
    parentId: 124
  },

  {
    authName: '订单更新',
    id: 129,
    level: '2',
    path: 'orders',
    parentId: 106
  },
  {
    authName: '获取订单详情',
    id: 130,
    level: '2',
    path: 'orders',
    parentId: 106
  },

  {
    authName: '添加角色',
    id: 131,
    level: '2',
    path: 'rights',
    parentId: 109
  },
  {
    authName: '删除角色',
    id: 132,
    level: '2',
    path: 'rights',
    parentId: 109
  },
  {
    authName: '角色授权',
    id: 133,
    level: '2',
    path: 'rights',
    parentId: 109
  },

  {
    authName: '取消角色授权',
    id: 134,
    level: '2',
    path: 'rights',
    parentId: 109
  },
  {
    authName: '取消角色列表',
    id: 135,
    level: '2',
    path: 'rights',
    parentId: 109
  },
  {
    authName: '获取角色授权',
    id: 136,
    level: '2',
    path: 'rights',
    parentId: 109
  },
  {
    authName: '获取角色详情',
    id: 137,
    level: '2',
    path: 'rights',
    parentId: 109
  },
  {
    authName: '更新角色信息',
    id: 138,
    level: '2',
    path: 'rights',
    parentId: 109
  },
  {
    authName: '更新角色权限',
    id: 139,
    level: '2',
    path: 'rights',
    parentId: 109
  },
  {
    authName: '查看权限',
    id: 140,
    level: '2',
    path: 'rights',
    parentId: 110
  },
  {
    authName: '更新用户',
    id: 141,
    level: '2',
    path: 'users',
    parentId: 108
  },
  {
    authName: '获取用户详情',
    id: 142,
    level: '2',
    path: 'users',
    parentId: 108
  },
  {
    authName: '分配用户角色',
    id: 143,
    level: '2',
    path: 'users',
    parentId: 108
  },
  {
    authName: '设置管理状态',
    id: 144,
    level: '2',
    path: 'users',
    parentId: 108
  },

  {
    authName: '数据统计',
    id: 145,
    level: '0',
    path: 'dataes',
  },
  {
    authName: '数据列表',
    id: 146,
    level: '1',
    path: 'dataes',
    parentId: 145
  },
  {
    authName: '查看数据',
    id: 147,
    level: '2',
    path: 'dataes',
    parentId: 146
  },
]

export default rightConfig
