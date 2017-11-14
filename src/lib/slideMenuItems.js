module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'CNS BLOG MENU'
  },
  {
    type: 'item',
    icon: 'fa fa-th',
    name: 'Login',
    badge: {
      type: 'String',
      data: 'new'
    },
    router: {
      name: 'Login',
      param: {
        loginYn: 'N'
      }
    }
  },
  {
    type: 'item',
    icon: 'fa fa-th',
    name: 'Logout',
    badge: {
      type: 'String',
      data: 'new'
    },
    router: {
      name: 'Logout',
      param: {
        loginYn: 'Y'
      }
    }
  },
  {
    type: 'item',
    icon: 'fa fa-th',
    name: 'Register',
    badge: {
      type: 'String',
      data: 'new'
    },
    router: {
      name: 'Register'
    }
  },
  {
    type: 'item',
    icon: 'fa fa-th',
    name: 'Api Test_axios',
    badge: {
      type: 'String',
      data: 'new'
    },
    router: {
      name: 'AxiosExample'
    }
  },
  {
    type: 'item',
    icon: 'fa fa-th',
    name: 'Editor',
    router: {
      name: 'editor'
    }
  },
  {
    type: 'item',
    icon: 'fa fa-th',
    name: 'BoardList',
    router: {
      name: 'board'
    }
  }
]
