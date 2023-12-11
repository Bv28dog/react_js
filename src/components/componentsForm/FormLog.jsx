import React from "react";
import { Form, Field, ErrorMessage, useFormikContext } from "formik";

export const FormLog = () => {
  const { handleBlur } = useFormikContext();

  return (
    <>
      <Form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <br />
          <Field name="firstName" onBlur={handleBlur} />
          <ErrorMessage
            style={{ color: "red" }}
            name="firstName"
            component="div"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <Field name="lastName" onBlur={handleBlur} />
          <ErrorMessage
            style={{ color: "red" }}
            name="lastName"
            component="div"
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <br />
          <Field name="city" onBlur={handleBlur} />
          <ErrorMessage style={{ color: "red" }} name="city" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};
