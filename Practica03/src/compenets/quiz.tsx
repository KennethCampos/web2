// src/components/Quiz.tsx
import { useState } from "react";
import { vocabulario,} from "../data/vocabulario";
import "./quiz.css";

interface Resultado {
  id: number;
  descripcion: string;
  correcta: string;
  usuario: string;
  imagen: string;
  acierto: boolean;
}

export default function Quiz() {
  const [respuestas, setRespuestas] = useState<string[]>(Array(vocabulario.length).fill(""));
  const [resultado, setResultado] = useState<Resultado[] | null>(null);

  const handleChange = (index: number, value: string) => {
    const copia = [...respuestas];
    copia[index] = value;
    setRespuestas(copia);
  };

  const verificar = () => {
    const resultadoFinal = vocabulario.map((pregunta, i) => {
      const limpia = respuestas[i].trim().toLowerCase();
      const acierta = limpia === pregunta.respuesta.toLowerCase();
      return {
        id: pregunta.id,
        descripcion: pregunta.descripcion,
        correcta: pregunta.respuesta,
        usuario: respuestas[i],
        imagen: pregunta.imagen,
        acierto: acierta,
      };
    });
    setResultado(resultadoFinal);
  };

  if (resultado) {
    const puntajeTotal = resultado.reduce((acc, r) => acc + (r.acierto ? 5 : 0), 0);
    return (
      <div className="resultado-container">
        <h2>Resultados - Tema: Mi Casa 🏠</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Imagen</th>
              <th>Descripción</th>
              <th>Tu Respuesta</th>
              <th>Respuesta Correcta</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {resultado.map((r) => (
              <tr key={r.id} className={r.acierto ? "correcto" : "incorrecto"}>
                <td>{r.id}</td>
                <td><img src={r.imagen} width="100" /></td>
                <td>{r.descripcion}</td>
                <td>{r.usuario}</td>
                <td>{r.correcta}</td>
                <td>{r.acierto ? 5 : 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total: {puntajeTotal} puntos</h3>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>Práctica de vocabulario: Mi Casa 🏠</h1>
      <img src="/images/casa/casa.png" width="300" />
      <form onSubmit={(e) => { e.preventDefault(); verificar(); }}>
        {vocabulario.map((pregunta, i) => (
          <div key={pregunta.id} className="pregunta">
            <label>
              {pregunta.id}. {pregunta.descripcion}
              <input
                type="text"
                required
                value={respuestas[i]}
                onChange={(e) => handleChange(i, e.target.value)}
              />
            </label>
          </div>
        ))}
        <button type="submit">Aplicar cuestionario</button>
      </form>
    </div>
  );
}
