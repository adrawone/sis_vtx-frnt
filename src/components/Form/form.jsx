/* Custom Hooks */
import useForm from "../../hooks/useForm.js";
import { validateField, validateEmail } from "../../hooks/useValidation";

// styles
import icon from "../../img/icono-modal.png";
import "../../App.css";

const Form = ({ messageSaveData }) => {
	/*
		values: obtiene el estado actual de los valores del formulario
		setField: cambia el estado de los valores del formulario, recibe dos argumentos: el campo (propiedades de initialValues) y su valor,
		errors: obtiene los errores del formulario,
		handleSubmit: función que se pasa al onSubmit del formulario para validarlo
	*/
	const { values, setFieldValue, errors, handleSubmit } = useForm({
		/* Valores iniciales del formulario */
		initialValues: {
			store_id: "",
			enviroment: "",
		},

		validate: (property, value) => {
			/* Ejemplo de validación en cada campo individualmente */
			const errorObj = {};

			switch (property) {
				case "store_id":
					const testStoreID = validateField({
						name: property,
						value,
						required: "Por favor ingresa el storeID.",
						min: 10,
						shortValue: "Ingresa un valor menor a 10 carácteres",
						validRegex: /^[0-9a-zA-Z]*$/,
					});
					Object.assign(errorObj, testStoreID);
					break;
				case "enviroment":
					const testEnviroment = validateField({
						name: property,
						value,
						required: "Por favor selecione un Entorno.",
					});
					Object.assign(errorObj, testEnviroment);
					break;
				

				default:
			}

			return errorObj;
		},
		onSubmit: ({ values, resetForm }) => {
			messageSaveData(true);
			// resetForm(); reinicia el formulario
		},
	});

	return (
		<form id="container" onSubmit={handleSubmit}>
			<div className="form-container">
				<label className="checkout">
					<input
						type="checkbox"
						id="woocommerce_wcsistecredito_enabled"
						name="woocommerce_wcsistecredito_enabled"
					/>
					Habilitar la pasarela de pago Sistecrédito
				</label>

				<div className="input-container" id="label-vendor">
					<div className="label-container">
						<div className="label-left">
							<span className="required-field">
								<p>*</p>
							</span>
							<label className="input-field">Vendor ID:</label>
						</div>
					</div>
					<input
						type="text"
						name="vendor_id"
						id="vendor_id"
						placeholder="ID único de usuario en Sistecrédito"
						defaultValue=""
					/>
					<p className="field-error-message">
						El Vendor ID que ingresaste no es válido.
					</p>
				</div>

				<div className="input-container" id="label-store">
					<div className="label-container">
						<div className="label-left">
							<span className="required-field">
								<p>*</p>
							</span>
							<label className="input-field">Store ID:</label>
						</div>
					</div>
					<input
						type="text"
						name="store_id"
						id="store_id"
						maxLength={50}
						placeholder="ID único de tienda asignado por Sistecrédito"
						defaultValue=""
						value={values.store_id}
						onChange={(e) => setFieldValue("store_id", e.target.value)}
					/>
					{errors.store_id && (
						<span className="field-error-message">{errors.store_id}</span>
					)}
				</div>

				<div className="input-container" id="label-subscriptionkey">
					<div className="label-container">
						<div className="label-left">
							<span className="required-field">
								<p>*</p>
							</span>
							<label className="input-field">Subscription Key:</label>
						</div>
					</div>
					<input
						type="text"
						name="subscription_key"
						id="subscription_key"
						placeholder="Token de consumo de REST API"
						defaultValue=""
					/>
					<p className="field-error-message">
						El Subscription key que ingresaste no es válido.
					</p>
					<div className="tooltip-error keys">
						<img
							src=""
							className="error-span-keys"
							id="SISTECREDITO_IMG_ERROR_KEY"
							alt="icono_error"
						/>
						<p className="field-error-keys" id="SISTECREDITO_VENDOR_ERROR_KEY">
							Los campos resaltados pueden tener información incorrecta, por
							favor verifica e inténtalo nuevamente.
						</p>
					</div>
				</div>

				<div className="input-container" id="label-environment">
					<div className="label-container">
						<div className="label-left">
							<span className="required-field">
								<p>*</p>
							</span>
							<label className="select-field">Entorno:</label>
						</div>
					</div>
					<select
						name="enviroment"
						id="enviroment"
						onChange={(e) => setFieldValue("enviroment", e.target.value)}>
						<option value="">Selecione el entorno </option>
						<option value="Development">Development</option>
						<option value="Qa">Qa </option>
						<option value="Staging">Staging</option>
						<option value="Production">Production</option>
					</select>
					{errors.enviroment && (
						<span className="field-error-message">{errors.enviroment}</span>
					)}
				</div>

				<hr></hr>

				<div className="label-container" id="label-onsamesite">
					<div className="label-left">
						<label className="input-field">
							Desea checkout "On Same Site" o "Redirect"
						</label>
					</div>

					<div className="tooltip bottom" id="tooltip-onsamesite">
						<img src={icon} className="icono-modal" alt="icono-modal" />
						<span className="tiptext">
							-Por <strong>defecto</strong> se encuentra en{" "}
							<strong>Redirect</strong>, el usuario será redirigido a la página
							de Sistecrédito para hacer el pago. -<strong>On Same Site</strong>
							, el usuario permanece en el comercio.
						</span>
					</div>
				</div>

				<label
					className="switch"
					id="woocommerce_wcsistecredito_enabled_checkout_widget">
					<input
						className="toggle-widget-checkout"
						type="checkbox"
						name="woocommerce_wcsistecredito_enabled_checkout_widget"
					/>
					<span className="slider round"></span>
				</label>

				<div className="input-container hidden_node" id="container_data_key">
					<div className="label-container">
						<div className="label-left" id="label-datakey-id">
							<span className="required-field">
								<p>*</p>
							</span>
							<label className="input-field">Data Key:</label>
						</div>
					</div>
					<input
						type="text"
						name="data_key"
						id="data_key"
						placeholder="ID único de tienda asignado por Sistecrédito"
						defaultValue=""
					/>
					<p className="field-error-message">
						El Data key que ingresaste no es válido.
					</p>
				</div>

				<div className="label-container">
					<div className="label-left">
						<label className="input-field"> Activar simulador widget</label>
					</div>

					<div className="tooltip bottom">
						<img src={icon} className="icono-modal" alt="icono-modal" />
						<span className="tiptext">
							<strong>Activo: </strong>
							el usuario obtiene la experiencia de simulación de cuotas máxima
							con su opción de compra y/o enrolamiento.
						</span>
					</div>
				</div>

				<div>
					<label className="switch2">
						<input
							className="toggle-widget-simulator"
							type="checkbox"
							name="enabled_widget_simulator"
							id="enabled_widget_simulator"
						/>
						<span className="slider2 round"></span>
					</label>
				</div>

				<div className="button-container">
					<button type="submit" name="saveButton" className="save-button">
						Guardar
					</button>
				</div>
			</div>
		</form>
	);
};

export default Form;
