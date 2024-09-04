import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {},
};

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      //Cuando se crea un nuevo quiz, topicId y cardIds son valores importantes que deben ser proporcionados en el payload.topicId indica a qué tema pertenece el quiz. cardIds contiene los IDs de las tarjetas asociadas con el quiz. Por eso, es necesario desestructurar topicId y cardIds del payload para asegurarse de que estos valores se asignen correctamente en el estado
      state.quizzes[id] = { id, name, topicId, cardIds };
      //1. state.quizzes es el objeto que contiene todos los quizzes en el estado. 2. state.quizzes[id] accede al quiz con el id especificado. Si no existe, se crea una nueva entrada en el objeto quizzes con la clave id. 3. { id, name, topicId, cardIds } es el nuevo objeto que se asigna a state.quizzes[id]. Este objeto contiene las propiedades id, name, topicId y cardIds que se desestructuraron del payload.
    },
  },
});

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;

export const selectQuizzes = (state) => state.quizzes.quizzes;
