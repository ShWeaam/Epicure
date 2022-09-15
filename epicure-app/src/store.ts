import { configureStore } from '@reduxjs/toolkit';
import chefsReducer from './components/chefsComponents/chefs/chefsSlicer';
import dishesReducer from './components/dishes/dishesSlicer';
import resturantsReducer from './components/resturants/resturantsSlicer';
import menuModalSlicer from 'components/headerComponents/headerModals/menuModal/menuModalSlicer';

export default configureStore({
// export const store = configureStore({
  reducer: {
    resturants: resturantsReducer,
    chefs: chefsReducer,
    dishes: dishesReducer,
    menuModal: menuModalSlicer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

