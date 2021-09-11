import React from "react";
//import { useFormik } from "formik";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Assignment4.css";

const Adduser = (props) => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [role, setRole] = useState("");
  //   const firstNameHandler = (event) => {
  //     setFirstName(event.target.value);
  //   };

  //   const lastNameHandler = (event) => {
  //     setLastName(event.target.value);
  //   };

  //   const roleHandler = (event) => {
  //     setRole(event.target.value);
  //   };

  //   const submitHandler = (event) => {
  //     event.preventDefault();

  //     const enteredDetails = {
  //       firstName: firstName,
  //       lastName: lastName,
  //       role: role,
  //     };

  //     console.log(enteredDetails);

  //     setFirstName("");
  //     setLastName("");
  //     setRole("");
  //   };

  const initialValues = {
    id: "",
    firstName: "",
    lastName: "",
    role: "",
  };

  const onSubmit = (values) => {
    const user = {
      ...values,
      id: Math.random().toString(),
    };
    console.log("Form Data", user);
    props.onAddUser(user);
  };

  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "Required";
  //   }
  //   if (!values.lastName) {
  //     errors.lastName = "Required";
  //   }
  //   if (!values.role) {
  //     errors.role = "Required";
  //   }

  //   return errors;
  // };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required!"),
    lastName: Yup.string().required("Required!"),
    role: Yup.string().required("Required!"),
  });

  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema
  //   //validate,
  // });

  //console.log(formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="assignment-4">
        <div className="new-data">
          <label htmlFor="firstName">First Name</label>
          <Field
            type="text"
            name="firstName"
            //{...formik.getFieldProps('firstName')}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            // onChange={formik.handleChange}
          />
          {/* {formik.touched.firstName && formik.errors.firstName && (
                <div className="error">{formik.errors.firstName}</div>
              )}*/}

          <ErrorMessage name="firstName" />
        </div>
        <div className="new-data">
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            name="lastName"
            //{...formik.getFieldProps('lastName')}
            // onBlur={formik.handleBlur}
            // value={formik.values.lastName}
            // onChange={formik.handleChange}
          />
          {/* {formik.touched.lastName && formik.errors.lastName && (
                <div className="error">{formik.errors.lastName}</div>
              )} */}
          <ErrorMessage name="lastName" />
        </div>

        <div className="new-data">
          <label htmlFor="role">Select Role</label>
          <Field
            as="select"
            name="role"
            //{...formik.getFieldProps('role')}
            // onBlur={formik.handleBlur}
            // value={formik.values.role}
            // onChange={formik.handleChange}
          >
            <option value="">Select Option</option>
            <option value="Owner">Owner</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </Field>
          {/* {formik.touched.role && formik.errors.role && (
                <div className="error">{formik.errors.role}</div>
              )} */}
          <ErrorMessage name="role" />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Adduser;
