import { configureStore, createSlice } from '@reduxjs/toolkit';

// 메뉴 상태 slice
const menus = createSlice({
  name: 'menus',
  initialState: ['Home', 'Shop', 'About'],
  reducers: {
    setMenus: (state, action) => {
      return action.payload;
    },
  },
});

// Redux store 설정
const store = configureStore({
  reducer: {
    menus: menus.reducer,
  },
});

export const { setMenus } = menus.actions;
export default store;