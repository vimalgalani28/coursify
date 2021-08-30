import { Formik } from "formik";
import React from "react";
import FormField from "../FormField/FormField";

export default function LoginPage() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormField
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            label="Email:"
          />
          <FormField
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            label="Password:"
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
