//First, create the slice for the corresponding component
//Then import createStlice to create the slice that'll containg the initial state, name and reducers/extrareducers.
import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice"; //Importamos addQuiz para agregarlo al extraReducer
//Stablish the initialState
const initialState = {
  topics: {},
};

export const topicsSlice = createSlice({
  name: "topics",
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload; //Cuando se crea un nuevo topic, quizIds siempre se inicializa como un array vacío porque un nuevo topic no tiene quizzes asociados inicialmente. Por eso, no es necesario desestructurar quizIds del payload; simplemente se inicializa como un array vacío dentro del reducer.
      state.topics[id] = { id, name, icon, quizIds: [] };
      //quizIds se inicializa como un array vacío porque, al crear un nuevo topic, aún no tiene quizzes asociados. Este array se llenará más tarde cuando se añadan quizzes al topic.
    },
    addQuizId: (state, action) => {
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id); //Usa topicId para encontrar el topic correcto en el estado. luego se usa para añadir el id de un quiz al array quizIds de un topic específico.
    },
  },
  extraReducers: (builder) => {
    //extraReducers se usa para responder a acciones definidas en otros slices.En este caso, responde a la acción addQuiz del slice de quizzes. Note: arriba se importo addQuiz
    builder.addCase(addQuiz, (state, action) => {
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id);
      //Ambos métodos (addQuizId y extraReducers) necesitan realizar la misma operación: añadir el quizId al array quizIds del topic correspondiente. por eso ambos tienen state.topics[topicId].quizIds.push(id);
    });
  },
});

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;

export const selectTopics = (state) => state.topics.topics;
