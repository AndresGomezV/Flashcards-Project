import { configureStore } from "@reduxjs/toolkit";
// import { topicsSlice } from "../features/topics/topicsSlice";
// import reducers
//importamos el reducer desde topicsSlice (como fue exportada como default, le asignamos el nombre aca como topicsReducer) luego lo agregamos a los reducers de configureStore
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import cardsReducer from "../features/cards/cardsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
});

