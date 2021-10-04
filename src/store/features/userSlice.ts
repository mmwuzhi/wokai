import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  // namespace 调用action时会默认设置为action的前缀
  name: 'user',
  // initial value
  initialState: {
    userData: {
      id: '',
      username: '',
      email: '',
    }, // 用户data，里面包含id，username，email
    error: null,
    logged: false,
  },
  // 这里的属性会自动到处为actions， 在组件里可以直接用dispatch触发
  reducers: {
    loginSuccess(state, { payload }) {
      state.logged = true
      state.userData = payload
    },
    loginFail(state, { payload }) {
      state.error = payload.error
    },
    logoutSuccess(state) {
      state.userData = {
        id: '',
        username: '',
        email: '',
      }
      state.logged = false
    },
  },
})

// 导出actions
export const { loginSuccess, loginFail, logoutSuccess } = userSlice.actions

// 默认导出reducer
export default userSlice.reducer
