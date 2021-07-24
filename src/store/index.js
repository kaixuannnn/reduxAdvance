import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './ui-slide'

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
})

export default store
