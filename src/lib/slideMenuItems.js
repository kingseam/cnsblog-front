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
      name: 'Login'
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
  }
]
