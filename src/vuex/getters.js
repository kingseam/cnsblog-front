export const unreadMessagesCount = state => state.messages.main.length
export const unreadNotificationsCount = state => state.notifications.main.length
export const remainTasksCount = state => state.tasks.main.length
export const currentUser = state => state.user.main
export const totalProduct = state => state.products.main
export const boardList = state => state.products.board
export const regexs = state => state.regex.main
export const registUser = state => state.regist.user
