import React from 'react';
import { ErrorMessage, useField } from 'formik';
import Checkbox from "./Checkbox";

function CampoFormulario({ label, estilo, ...props }) {
    const [field] = useField(props);

    return (
        <div>
            <label htmlFor={field.name} className={estilo}>
                {label}
            </label>
            <input
                {...field} {...props}
                autoComplete="off">
            </input>
            <label className={estilo}>
                <ErrorMessage name={field.name}  />
            </label>
            
            
            

        </div>
    );
}

export default CampoFormulario;