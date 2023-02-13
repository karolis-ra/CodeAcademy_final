import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quiz/reducer';

export const store = configureStore({
  reducer: {
    quiz: quizReducer
  }
});
