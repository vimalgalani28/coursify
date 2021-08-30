import { useFormikContext } from "formik";
import React from "react";

const FormField = ({
  label,
  name,
  value,
  handleChange,
  error,
  ...otherProps
}) => {
  const { errors, touched } = useFormikContext();
  console.log(errors);
  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <p className="paragraph1 bold">{label}</p>
        <input
          value={value}
          onChange={handleChange}
          name={name}
          {...otherProps}
          className="md:flex-1"
        />
      </div>
      {touched[name] && errors[name] && (
        <p className="error paragraph1 light mt-2">{error}</p>
      )}
    </div>
  );
};

export default FormField;
