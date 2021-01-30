import React from 'react';
import { ErrorMessage, useField } from 'formik';

function CampoFormulario({label, ...props}) {
    const [field, meta] = useField(props);
        
    return (
        <div>
            <label htmlFor={field.name}>
                {label}
            </label>
            <input 
            {...field} {...props}
            autoComplete="off">
            </input>
            <ErrorMessage name={field.name}/>
        </div>
    );
}

export default CampoFormulario;