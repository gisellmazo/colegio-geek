import React from "react";
import { ErrorMessage, Field } from "formik";

export default function Checkbox(props) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {({ field }) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='checkbox'
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                    checked={Field.value.includes(option.value)}>
                                </input>
                                <label htmlFor={option.value}>
                                    {option.key}
                                </label>
                            </React.Fragment>
                        )
                    })

                }}
            </Field>
        </div>
    )
}