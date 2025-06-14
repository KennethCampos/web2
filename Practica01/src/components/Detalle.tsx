// src/components/Detalle.tsx
import { useParams } from "react-router-dom";
import { series } from "../data/series";
import "./Detalle.css";

export default function Detalle() {
  const { id } = useParams();
  const serie = series.find((s) => s.id === Number(id));

  if (!serie) return <p>Serie no encontrada.</p>;

  return (
    <div className="detalle-container">
      <h2>{serie.titulo}</h2>
      <img src={serie.imagenGrande} alt={serie.titulo} width="800" height="600" />
      <p><strong>Año:</strong> {serie.anios}</p>
      <p><strong>Actores:</strong></p>
      <ul>
        {serie.actores.map((actor, i) => (
          <li key={i}>{actor}</li>
        ))}
      </ul>
      <p><strong>Observaciones:</strong> {serie.observaciones}</p>
    </div>
  );
}
