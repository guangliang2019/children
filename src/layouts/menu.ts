const menus =
  [{
    id: '1',
    name: '幼儿管理',
    path: '/children',
    children: [{
      id: '1-1',
      name: '入园儿童登记',
      path: '/new'
    }, {
      id: '1-2',
      name: '幼儿列表',
      path: '/list',
    }]
  }, {
    id: '2',
    name: '班级管理',
    path: '/class',
    children: [{
      id: '2-1',
      name: '新建班级',
      path: '/new',
    }, {
      id: '2-3',
      name: '班级列表',
      path: '/list',
    }]
  }, {
    id: '3',
    name: '职工管理',
    path: '/staff',
    children: [{
      id: '3-1',
      name: '职工登记',
      path: '/new',
    }, {
      id: '3-2',
      name: '职工管理',
      path: '/list',
    }]
  }
  ]
export default menus