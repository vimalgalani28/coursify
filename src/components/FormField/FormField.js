import { useFormikContext } from "formik";
import React from "react";
import "./form-field.css";

const FormField = ({ label, name, value, handleChange, ...otherProps }) => {
  const { errors, touched } = useFormikContext();
  return (
    <div className="mb-3">
      <div className="flex flex-col gap-y-2">
        <p className="paragraph1 bold">{label}</p>
        <input
          value={value}
          onChange={handleChange}
          name={name}
          {...otherProps}
          className="md:flex-1 input-field py-2 px-2 paragraph1"
        />
      </div>
      {errors[name] && touched[name] && (
        <p className="error paragraph1 light mt-2 error">{errors[name]}</p>
      )}
    </div>
  );
};

export default FormField;
