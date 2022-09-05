import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/cards/cardsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import topicReducer from "../features/topics/topicSlice";

export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
});