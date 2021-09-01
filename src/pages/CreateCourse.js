import React, { useContext } from "react";
import CourseForm from "../components/Admin/CourseForm";
import AdminLayout from "../components/Admin/Layout";
import { CoursifyContext } from "../context/CoursifyContext";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import axios from "axios";

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

const CreateCourse = (props) => {
  const [openSnackbar] = useSnackbar(optionsSnack);
  const { dispatchCourses } = useContext(CoursifyContext);
  const history = useHistory();

  const coursify = JSON.parse(localStorage.getItem("coursify"));
  const addCourse = async (values) => {
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API}/admin/course`,
      data: values,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${coursify.token}`,
      },
    };
    try {
      const res = await axios(options);
      if (res.data.status === 200 || res.data.status === 201) {
        openSnackbar("Course Added");
        dispatchCourses({
          type: "ADD_COURSE",
          course: res.data.course,
        });
        history.push("/admin/dashboard");
        return;
      }
      openSnackbar(res.data.msg);
    } catch (e) {
      console.log(e);
      openSnackbar("Something went wrong");
    }
  };
  return (
    <AdminLayout>
      <CourseForm handleSubmit={addCourse} />
    </AdminLayout>
  );
};

export default CreateCourse;
