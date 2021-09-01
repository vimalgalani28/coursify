import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import React, { useContext } from "react";
import SubmitButton from "../Burron/SubmitButton";
import FormField from "../FormField/FormField";
import "./login-form.css";
import { useSnackbar } from "react-simple-snackbar";
import axios from "axios";
import { CoursifyContext } from "../../context/CoursifyContext";

const optionsSnack = {
  position: "top-right",
  style: {
    backgroundColor: "red",
    color: "#fff",
    fontSize: "18px",
    textAlign: "center",
    fontWeight: "bold",
  },
  closeStyle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default function LoginPage() {
  const [openSnackbar] = useSnackbar(optionsSnack);
  const { dispatchUser } = useContext(CoursifyContext);
  const handleLogin = async (values) => {
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API}/admin/login`,
      data: values,
    };
    try {
      const res = await axios(options);
      if (res.data.status === 200 || res.data.status === 201) {
        dispatchUser({
          type: "SET_USER",
          user: {
            ...res.data.user,
            type: "admin",
          },
        });
        localStorage.setItem(
          "coursify",
          JSON.stringify({ token: res.data.token, type: "admin" })
        );
        return;
      }
      openSnackbar(res.data.msg);
    } catch (e) {
      openSnackbar("Something Went Wrong", [3000]);
    }
  };

  return (
    <div className="login-form px-3 py-5">
      <div className="flex flex-col items-center justify-center mb-4 gap-y-1">
        <div className="lock-icon flex items-center justify-center">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <p className="heading5 bold">Admin Login</p>
      </div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => handleLogin(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormField
              type="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              label="Username:"
              placeholder="Username"
            />
            <FormField
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              label="Password:"
              placeholder="Password"
            />
            <SubmitButton type="submit">Login</SubmitButton>
          </form>
        )}
      </Formik>
      <p className="caption light mt-4 text-center">Copyright &copy; 2021</p>
    </div>
  );
}
