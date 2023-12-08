import React from "react";
import { Formik } from "formik";
import { FormLog } from "./components/componentsForm/FormLog";

const App = () => {
  return (
    <>
      <Formik
        initialValues={{ firstName: "", lastName: "", city: "" }}
        onSubmit={(values, formikBag) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "First Name is required";
          }
          if (!values.lastName) {
            errors.lastName = "Last Name is required";
          }
          if (!values.city) {
            errors.city = "City is required";
          }
          if (Object.keys(errors).length > 0) {
            formikBag.setErrors(errors);
          } else {
            formikBag.setSubmitting(true);
            formikBag.resetForm();
          }
        }}
      >
        {(props) => {
          console.log(props);
          return <FormLog />;
        }}
      </Formik>
    </>
  );
};

export default App;
