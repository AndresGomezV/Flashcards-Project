import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";
// import selectors
import { selectQuizzes } from "../quizzes/quizzesSlice";

export default function Topic() {
  const topics = {};  // replace with selector
  const quizzes = useSelector(selectQuizzes);
  const { topicId } = useParams();
  const topic = topics[topicId];

  if(!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace/>
  }
  
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}

/*

Propósito:
Mostrar los detalles de un topic específico y los quizzes asociados a ese topic.

Uso del Selector:

Usas el selector para obtener todos los quizzes del estado global.

Usas useParams de react-router-dom para obtener el topicId de la URL.

Encuentras el topic específico usando el topicId.

Usas el array quizIds del topic para encontrar y renderizar los quizzes asociados a ese topic.

*/