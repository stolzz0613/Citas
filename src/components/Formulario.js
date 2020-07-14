import React, { Fragment, useState } from 'react';
import uuid from "uuid/v4";
import PropTypes from "prop-types";


const Formulario = ({ crearCita }) => {

    const [cita, setCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = (e) => {
        e.preventDefault();

        if (
            mascota.trim() === "" ||
            propietario.trim() === "" ||
            fecha.trim() === "" ||
            hora.trim() === "" ||
            sintomas.trim() === ""
        ) {
            setError(true);
            return;
        }
        setError(false);

        cita.id = uuid();

        crearCita(cita);

        setCita({
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
        });
    };


    return (
        <Fragment>
            <h2>Crear cita</h2>
            {
                error
                    ? <p className="alerta-error">
                        Todos los campos son obligatorios
                     </p>
                    : null
            }
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={handleChange}
                >Agregar cita</button>

            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;