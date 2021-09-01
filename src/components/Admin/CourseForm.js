import { Formik } from "formik";
import React from "react";
import SubmitButton from "../Burron/SubmitButton";
import FormField from "../FormField/FormField";
import RichtextEditor from "../TextEditor/RichTextEditor";

const CourseForm = ({ course = {}, handleSubmit }) => {
  return (
    <div>
      <p className="heading5 bold mb-5">Add Course</p>
      <div>
        <Formik
          initialValues={{
            title: "",
            description: "",
            author: "",
            authorInfo: "",
            info: "",
            picture: "",
            learnings: [
              "Learn to use Python professionally, learning both Python 2 and Python 3!",
              "Create games with Python, like Tic Tac Toe and Blackjack!",
              "Learn advanced Python features, like the collections module and how to work with timestamps!",
              "Learn to use Object Oriented Programming with classes!",
              "Understand complex topics, like decorators.",
              "Understand how to use both the Jupyter Notebook and create .py files",
              "Get an understanding of how to create GUIs in the Jupyter Notebook system!",
              "Build a complete understanding of Python from the ground up!",
            ],
          }}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              errors.title = "Required";
            }
            if (!values.description) {
              errors.description = "Required";
            }
            if (!values.author) {
              errors.author = "*Required";
            }
            if (!values.authorInfo) {
              errors.authorInfo = "*Required";
            }
            if (!values.info) {
              errors.info = "*Required";
            }
            if (!values.picture) {
              errors.picture = "*Required";
            }
            return errors;
          }}
          onSubmit={(values) => handleSubmit(values)}
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
              <div className="grid sm:grid-cols-2 xs:grid-cols-1 gap-x-2 gap-y-2">
                <FormField
                  type="title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  label="Title:"
                  placeholder="Title"
                />
                <FormField
                  type="author"
                  name="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                  label="Author:"
                  placeholder="Author"
                />
                <FormField
                  type="description"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  label="Short Description:"
                  placeholder="Description"
                />
                <FormField
                  type="text"
                  name="picture"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.picture}
                  label="Image:"
                  placeholder="Image Link"
                />
                <RichtextEditor
                  name="info"
                  value={values.info}
                  label="Course Info:"
                  placeholder="Give Info"
                />
                <RichtextEditor
                  name="authorInfo"
                  value={values.authorInfo}
                  label="Author's Info:"
                  placeholder="Give Info"
                />
              </div>
              <div className="mt-3">
                <SubmitButton type="submit">Save Course</SubmitButton>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CourseForm;
