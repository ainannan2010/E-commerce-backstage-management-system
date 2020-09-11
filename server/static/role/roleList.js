import Mock from "mockjs"
import rightConfig from "../right/config"

Mock.Random.extend({
  initRight() {
    return this.pick(rightConfig, 2, 4)
  }
})

const roleList = [
  {
    id: 10,
    roleName: '主管',
    roleDesc: '技术负责人',
    // rights: Mock.mock('@initRight')
    rights: [
      {
        authName: '用户管理',
        id: 100,
        level: '0',
        path: 'users'
      },
      {
        authName: '用户列表',
        id: 108,
        level: '1',
        path: 'users',
        parentId: 100
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
        authName: '商品管理',
        id: 101,
        level: '0',
        path: 'goods'
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

    ]
  },
  {
    id: 11,
    roleName: '测试角色',
    roleDesc: '测试人员',
    rights: Mock.mock('@initRight')
  },
  {
    id: 12,
    roleName: '超级管理员',
    roleDesc: 'boss',
    rights: Mock.mock('@initRight')
  },
  {
    id: 13,
    roleName: '开发',
    roleDesc: '搬砖的',
    rights: Mock.mock('@initRight')
  },
  {
    id: 14,
    roleName: '游客',
    roleDesc: '瞎逛的',
    rights: Mock.mock('@initRight')
  },
]

export default roleList
