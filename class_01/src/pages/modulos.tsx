import myComponent from "../components/component";

		const Modulos = () => {
			return (
				<div className="container">
					<h3>Uso de un componente externo</h3>
					<p>
						Componente para el uso de objetos de formulario web.<br/>
					</p>
					<br/>
					{myComponent()}
				</div>
			);
		}
		
		export default Modulos;