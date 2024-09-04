/*

Crear topicsSlice.js:

Importar createSlice de @reduxjs/toolkit.
Definir initialState con un objeto vacío para topics.
Crear topicsSlice usando createSlice con name, initialState y reducers.
Definir el addTopic action creator dentro de reducers.
Exportar el addTopic action creator y el reducer generado por createSlice.
Crear y exportar un selector para acceder a topics en el estado.

Integrar topicsSlice en el store:

Importar el reducer de topicsSlice en store.js.
Añadir el topicsReducer al objeto reducer en configureStore.

Usar el selector en el componente Topics:

Importar el selector selectTopics en Topics.js.
Usar useSelector para acceder a topics en el estado y renderizarlos en el componente.

Conectar el formulario de nuevo tema (NewTopicForm):

Importar useDispatch, uuidv4, y addTopic en NewTopicForm.js.
Usar useDispatch para obtener la función dispatch.
Generar un id único usando uuidv4.
Despachar la acción addTopic con el id, name e icon cuando se envíe el formulario.
Navegar a la página de topics después de despachar la acción

Crear quizzesSlice.js:

Definir initialState con un objeto vacio para quizzes.
Crear quizzesSlice
Definir el addQuiz action creator
exportar el selector a NewQuizForm.js para acceder a quizzes en el estado


Importar la accin addQuiz y dispatch it, to NewQuizForm