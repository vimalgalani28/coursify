import { useFormikContext } from "formik";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

const RichtextEditor = ({ label, name, value, ...otherProps }) => {
  const { errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="mb-2">
      <div className="flex flex-col gap-y-2">
        <p className="paragraph1 bold">{label}</p>
        <ReactQuill
          value={value}
          onChange={(value) => setFieldValue(name, value)}
          onBlur={() => setFieldTouched(name, true)}
          bounds={`.editor`}
          name={name}
          {...otherProps}
        />
      </div>
      {errors[name] && touched[name] && (
        <p className="error paragraph1 light mt-2">{errors[name]}</p>
      )}
    </div>
  );
};

export default RichtextEditor;
