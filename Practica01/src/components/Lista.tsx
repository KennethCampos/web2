// src/components/Lista.tsx
import { Link } from "react-router-dom";
import { series } from "../data/series";
import "./Lista.css";

export default function Lista() {
  return (
    <div className="lista-container">
      <h1>Las Mejores Series </h1>
      <div className="imagenes-grid">
        {series.map((serie) => (
          <Link key={serie.id} to={`/detalle/${serie.id}`}>
            <img src={serie.imagenMini} alt={serie.titulo} width="300" height="200" />
          </Link>
        ))}
      </div>
    </div>
  );
}
