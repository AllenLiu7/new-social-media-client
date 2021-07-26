import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice';

export const store = (function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./slice/index.ts', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
})();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;