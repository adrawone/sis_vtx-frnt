import { useState } from "react";

// components
import Form from "./components/Form/form";

// assets
import logo from "./img/sistecredito.png";
import checkbox from "./img/checkbox_marked.png";
import icon from "./img/icono-modal.png";

import "./App.css";

function App() {
	const [successAlert, setSuccessAlert] = useState(false);

	const messageSaveData = (isSuccess) => {
		setSuccessAlert(isSuccess);

		setTimeout(() => {
			setSuccessAlert(false);
		}, 5000);
	};

	return (
		<div className="App">
			<div className="App-Container">
				<div className="panel-body-sistecredito">
					<div className="header-container">
						{successAlert && (
							<div className="save-button-state">
								<img src={checkbox} className="icon-state" alt="" />
								<p>Configuración guardada exitosamente</p>
							</div>
						)}

						<img
							src={logo}
							className="logo-sistecredito"
							alt="logo-sistecredito"
						/>
					</div>

					<div className="info-sistecredito">
						<div className="info-sistecredito-box">
							<div className="info-sistecredito-text-container">
								This module allows you to accept secure payments using
								Sistecrédito
							</div>

							<div className="container-modal-sup">
								<img src={icon} className="circle" alt="icono" />
								<div className="modal-info">
									<p>
										Cuando el pago sea <strong>aceptado</strong> el estado del
										pedido cambia a <strong>procesando</strong>.
									</p>
									<p>
										En este paso de <strong>procesando</strong> se puede
										confirmar para poder gestionar el pedido.
									</p>
									<p>
										Si el pago es <strong>rechazado</strong> la orden queda{" "}
										<strong>pendiente</strong> hasta que se finalice o
										finalmente se abandona.
									</p>
								</div>
							</div>
						</div>
					</div>
					<Form messageSaveData={messageSaveData} />
				</div>
			</div>
		</div>
	);
}

export default App;

