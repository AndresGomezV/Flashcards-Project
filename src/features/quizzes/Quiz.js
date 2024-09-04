import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
// import quiz selector
import { selectQuizzes } from "./quizzesSlice";

export default function Quiz() {
  const quizzes = useSelector(selectQuizzes);
  const { quizId } = useParams();
  const quiz = quizzes[quizId];

  if(!quiz) {
    return <Navigate to={ROUTES.quizzesRoute()} replace/>
  }


  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}


/*

Propósito:
Mostrar los detalles de un quiz específico.

Uso del Selector:

Usas el selector para obtener todos los quizzes del estado global.

Usas useParams de react-router-dom para obtener el quizId de la URL.

Encuentras el quiz específico usando el quizId y renderizas sus detalles.

*/