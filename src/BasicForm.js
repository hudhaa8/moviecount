import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email : yup.string().required("why not fill this email").min(5,"Need longer email"),
  password : yup.string().required("why not fill this password").min(8, "Need longer password").max(12)
})

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema : formValidationSchema,
    onSubmit : (values) => {
      console.log("onsubmit" , values)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
      id="email"
      name="email"
      value={formik.values.email} 
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      type="email" 
      placeholder="email" /> <br /><br />

{/* {formik.errors.email } */}
      {formik.touched.email && formik.errors.email ? formik.errors.email : " "}

      <input
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="password"
        placeholder="password"
      /> <br /><br />
{/* {formik.errors.password } */}

     {formik.touched.password && formik.errors.password ? formik.errors.password : ""}

      <button type="submit"> Submit</button>
    </form>
  );
}
